/**
 * Config file
 */
export default {
  server: {
    // HOST: '2409:8a60:121b:9950:dd33:e99:3cb6:8ef3',
    HOST: '192.168.1.12',
    PORT: 10088,
    TRANSFER_PORT: 10089
  },
  connection: {
    ALIVE_PERIOD: 10000,
    MAX_RETRY_TIMES: 3,
    MAX_SEQUENCE_NUMBER: 65536,
    RESPONSE_TIMEOUT: 30000
  },
  transfer: {
    CIPHER_ALGORITHM: 'AES-256-CBC'
  }
}
