const fs = require('fs');
const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev'; // default to 'dev' if NODE_ENV is not set

const envFile = `.env.${env}`;

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
  console.log(`Loaded ${envFile} file.`);
} else {
  console.warn(`No ${envFile} file found.`);
}