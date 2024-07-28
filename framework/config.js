import '../dotenv/config'

export const config = {
  baseUrl: process.env.TEST_BASE_URL,
  basePassword: process.env.TEST_BASE_PASSWORD,
  baseEmail: process.env.TEST_BASE_LOGIN,
}
