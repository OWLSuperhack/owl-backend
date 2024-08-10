import { ethers } from 'ethers'
import { OWL__factory } from '../contracts/typechain-types'
import IPFSService from './ipfs.service'
import { ProvideBase } from '../utils/ipfs/IpfsBase'

type Props = {
  to: string
  cid: string
  id: string
  index: number
  location: string
  address: string
  data: string
}

const ipfsService = new IPFSService()

export default class NFTService {
  public async mintNFT({ to, id, index, location, address, data }: Props) {
    try {
      const rpc = process.env.RPC_URL
      const pk = process.env.PK
      const contractAddress = process.env.NFT_CONTRACT_ADDRESS

      if (!rpc || !pk || !contractAddress) {
        throw new Error('RPC or PK not provided')
      }
      const ipfsBody = ProvideBase(
        0,
        id,
        index,
        location,
        address,
        data
      )
      console.log('ipfsBody:', ipfsBody);
      const cid = await ipfsService.uploadIPFs(ipfsBody)
      console.log('cid is:', cid);
      const provider = new ethers.JsonRpcProvider(rpc)
      const signer = new ethers.Wallet(pk, provider)
      const nftContract = OWL__factory.connect(contractAddress, signer)
      const tx = await nftContract.safeMint(to, cid)
      const txProcessReceipt = await tx.wait()
      const txHash = txProcessReceipt?.hash
      const eventProcessLogs = txProcessReceipt?.logs.filter((log) => {
        try {
          const parsedLog = nftContract.interface.parseLog(log)
          return parsedLog?.name === 'Transfer'
        } catch (error) {
          return false
        }
      })
      if (eventProcessLogs && eventProcessLogs.length > 0) {
        return txHash
      } else {
        return null
      }
    } catch (error) {
      console.log('Error on mintNFT:', error)
      return null
    }
  }
}
