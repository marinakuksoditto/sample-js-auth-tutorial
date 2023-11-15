import { Ditto } from '@dittolive/ditto'

let ditto
export default function get() {
  if (!ditto) {
    const identity = {
      type: 'onlineWithAuthentication',
      appID: 'YOUR_DITTO_APP_ID_HERE',
      token: 'YOUR_DITTO_TOKEN_HERE'
    }
    ditto = new Ditto(identity, '/ditto')
    ditto.startSync()
  }
  return ditto
}
