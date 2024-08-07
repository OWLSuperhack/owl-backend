import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers'

const easContractAddress = process.env.EAS_CONTRACT_ADDRESS
const schemaUID = process.env.SCHEMA_UID
const rpc = process.env.RPC_URL
const pk = process.env.PK
const schemaEncoder = new SchemaEncoder(
  'string id,uint256 index,string location,bytes data'
)

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
      const attestation = await eas.getAttestation(newAttestationUID);
      //TODO save newAttestationUID to database to the user
    } catch (error) {
      console.log('Error on attestData:', error)
      throw error
    }
  }
  public async decodeAttestationData(attestationUID: string) {
    try {
      if (!easContractAddress || !rpc || !pk) {
        throw new Error('Some of the required data is not provided')
      }
      const eas = new EAS(easContractAddress)
      const provider = new ethers.JsonRpcProvider(rpc)
      const signer = new ethers.Wallet(pk, provider)
      eas.connect(signer)

      const attestation = await eas.getAttestation(attestationUID);
      const decodedData = schemaEncoder.decodeData(attestation.data);
      const dataFormatted = decodedData.map((data) => {
        return {
          name: data.name,
          value: data.value.value.toString(),
        };
      });
      return dataFormatted;
      //this returns something like 
      // data formatted: [
      //   { name: 'id', value: '5058531629' },
      //   { name: 'index', value: '10' },
      //   { name: 'location', value: "val's Home" },
      //   { name: 'data', value: '0x' }
      // ]
    } catch (error) {
      console.log('Error on decodeAttestationData:', error)
      throw error
    }
  }
}
