const axios = require('axios')

export default class IPFSService {
  public async uploadIPFs(jsonData: any) {
    try {
      const endpoint = 'https://api.pinata.cloud/pinning/pinJSONToIPFS'
      const pinataApiKey = process.env.PINATA_API_KEY
      const pinataSecretApiKey = process.env.PINATA_SECRET_KEY
      const requestBody = {
        pinataMetadata: {
          name: `metadata-${+new Date()}.json`,
          keyvalues: {
            contract: 'OWL Game',
          },
        },
        pinataOptions: {
          cidVersion: 1,
        },
        pinataContent: jsonData,
      }
      const headers = {
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      }
      if(!pinataApiKey || !pinataSecretApiKey) {
        throw new Error('API keys not provided')
      }

      const response = await axios.post(endpoint, requestBody, {
        headers: headers,
      });
      const cid = response.data.IpfsHash;
      return cid;
    } catch (error) {
      console.log('Error on uploadIPFs:', error)
      throw error
    }
  }
}
