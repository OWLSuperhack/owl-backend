import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk'
import { ethers } from 'ethers'

const easContractAddress = process.env.EAS_CONTRACT_ADDRESS
const schemaUID = process.env.EAS_CONTRACT_ADDRESS
const rpc = process.env.RPC_URL
const pk = process.env.PK

export type AttestationData = {
  id: string
  index: number
  location: string
  address: string
  data?: string
}
export default class AttestationService {
  public async attestMilestone({id, index, location, address, data = '0x'}: AttestationData) {
    if (!easContractAddress || !rpc || !pk || !schemaUID) {
      throw new Error('Some of the required data is not provided')
    }
    try {
      const provider = new ethers.JsonRpcProvider(rpc)
      const signer = new ethers.Wallet(pk, provider)
      const eas = new EAS(easContractAddress)
      eas.connect(signer)
      const schemaEncoder = new SchemaEncoder(
        'string id,uint256 index,string location,bytes data'
      )
      const encodedData = schemaEncoder.encodeData([
        { name: 'id', value: id, type: 'string' },
        { name: 'index', value: index, type: 'uint256' },
        { name: 'location', value: location, type: 'string' },
        { name: 'data', value: data, type: 'bytes' },
      ])
      const tx = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: address,
          expirationTime: BigInt(0),
          revocable: false,
          data: encodedData,
        },
      });
      const newAttestationUID = await tx.wait();
      console.log("New attestation UID:", newAttestationUID);
    } catch (error) {
      console.log('Error on attestData:', error)
      throw error
    }
  }
}
