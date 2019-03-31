import fs from 'fs';
const publicKey = fs.readFileSync('keys/foundationApp.pem');
export default publicKey;