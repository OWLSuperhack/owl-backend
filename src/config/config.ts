import dotenv from 'dotenv';
dotenv.config();

interface Config {
  port: number;
  dbUser: string;
  dbPassword: string;
  dbHost: string;
  dbName: string;
  dbPort: number;
  jwtSecret: string;
  logs: {
    level: string;
  };
  nft: {
    attestationUrl: string;
    openSeaUrl: string;
    blockScout: string;
  };
  worldcoin: {
    url: string;
    clientSecret: string;
    appId: string;
    callbackUrl: string;
  };
}

const config: Config = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,

    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbHost: process.env.DB_HOST || '',
    dbName: process.env.DB_NAME || '',
    dbPort: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  
    jwtSecret: process.env.JWT_SECRET || '',

    logs: {
      level: process.env.LOG_LEVEL || 'silly',
    },
    nft: {
      attestationUrl: process.env.ATTESTATION_URL || '',
      openSeaUrl: process.env.OPENSEA_URL || '',
      blockScout: process.env.BLOCKSCOUT_URL || '',
    },
    worldcoin: {
      url: process.env.WORLDCOIN_URL || '',
      clientSecret: process.env.WORLDCOIN_CLIENT_SECRET || '',
      appId: process.env.WORLDCOIN_APP_ID || '',
      callbackUrl: process.env.WORLDCOIN_REDIRECT_URL || '',
    },
}

export { config };

