import { ethers } from 'ethers'
import { OWL__factory } from '../contracts/typechain-types'
import IPFSService from './ipfs.service'
import { ProvideBase } from '../utils/ipfs/IpfsBase'
import axios from 'axios'

type Props = {
  to: string
  id: string
  index: number
  location: string
  data: string
}
export type NftMintResponse = {
  txHash: string | undefined | null
  tokenId: string
}

const ipfsService = new IPFSService()

export default class NFTService {
  public async mintNFT({ to, id, index, location, data }: Props) {
    try {
      const rpc = process.env.RPC_URL
      const pk = process.env.PK
      const contractAddress = process.env.NFT_CONTRACT_ADDRESS

      if (!rpc || !pk || !contractAddress) {
        throw new Error('RPC or PK not provided')
      }
      const ipfsBody = ProvideBase(
        id,
        index,
        location,
        to,
        data
      )
      const cid = await ipfsService.uploadIPFs(ipfsBody)
      const provider = new ethers.JsonRpcProvider(rpc)
      const signer = new ethers.Wallet(pk, provider)
      const nftContract = OWL__factory.connect(contractAddress, signer)
      const tx = await nftContract.safeMint(to, cid)
      const txProcessReceipt = await tx.wait()
      const txHash = txProcessReceipt?.hash
      const eventProcessLogs = txProcessReceipt?.logs.filter((log) => {
        try {
          const parsedLog = nftContract.interface.parseLog(log)
          return parsedLog?.name === 'MetadataUpdate'
        } catch (error) {
          return false
        }
      })
      if (eventProcessLogs && eventProcessLogs.length > 0) {
        const response : NftMintResponse = {
          txHash: txHash,
          tokenId: BigInt(eventProcessLogs[0].data).toString()
        }
        return response
      } else {
        return null
      }
    } catch (error) {
      console.log('Error on mintNFT:', error)
      return null
    }
  }
  public async updateNFTMetadata(
    id: string,
    index: number,
    location: string,
    to: string,
    data: string,
    tokenId: string,
    newAtribute?: {trait_type: string, value: string}
  ) {
    try {
      const rpc = process.env.RPC_URL
      const pk = process.env.PK
      const contractAddress = process.env.NFT_CONTRACT_ADDRESS

      if (!rpc || !pk || !contractAddress) {
        throw new Error('RPC or PK not provided')
      }
      //First obtain the information base for the level
      const ipfsBase = ProvideBase(
        id,
        index,
        location,
        to,
        data
      )
      const provider = new ethers.JsonRpcProvider(rpc)
      const signer = new ethers.Wallet(pk, provider)
      const nftContract = OWL__factory.connect(contractAddress, signer)
      
      //then we read the current nft metadata
      const currentUri = await nftContract.tokenURI(tokenId)
      const metadata = await axios.get(currentUri)
      let currentMetadata = []
      if(metadata.data.length > 7){
        currentMetadata = metadata.data.slice(0, 7)
        ipfsBase.attributes = ipfsBase.attributes.concat(currentMetadata)
      }
      if(newAtribute){
        ipfsBase.attributes.push(newAtribute)
      }
      const cid = await ipfsService.uploadIPFs(ipfsBase)
      const tx = await nftContract.updateTokenURI(tokenId, cid)
      const txProcessReceipt = await tx.wait()
      const txHash = txProcessReceipt?.hash
      const eventProcessLogs = txProcessReceipt?.logs.filter((log) => {
        try {
          const parsedLog = nftContract.interface.parseLog(log)
          return parsedLog?.name === 'MetadataUpdate'
        } catch (error) {
          return false
        }
      })
      if (eventProcessLogs && eventProcessLogs.length > 0) {
        const response : NftMintResponse = {
          txHash: txHash,
          tokenId: BigInt(eventProcessLogs[0].data).toString()
        }
        return response
      } else {
        return null
      }
    } catch (error) {
      console.log('Error on updateNFTMetadata:', error)
      return false
    }
  }
}
