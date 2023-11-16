import { Ditto } from '@dittolive/ditto'

let ditto
export default function get(token) {
  if (!ditto) {
    const authHandler = {
      authenticationRequired: async function (authenticator) {
        authenticator.loginWithToken(token, 'replit-auth')
      },
      authenticationExpiringSoon: function (authenticator, secondsRemaining) {
        authenticator.loginWithToken(token, 'replit-auth')
      },
    }
    const identity = {
      type: 'onlineWithAuthentication',
      appID: 'YOUR_DITTO_APP_ID_HERE',
      authHandler: authHandler
    }
    ditto = new Ditto(identity, '/ditto')
    ditto.startSync()
  }
  return ditto
}
