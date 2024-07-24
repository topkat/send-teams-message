

import axios from 'axios'
import fs from 'fs'
import Path from 'path'

import { C, removeCircularJSONstringify } from 'topkat-utils'

/**
 * For Webhook Url, go to teams channel => open sidePanel => Manage chanel => connector => webhook => create
 *
 * Create your own card here => https://adaptivecards.io/designer
 * Then copy paste the json output as configMsg
*/
export async function sendTeamsMessage(url: string, configMsg: Record<string, any>) {
    const card = {
        'type': 'message',
        'attachments': [{
            'contentType': 'application/vnd.microsoft.card.adaptive',
            'content': configMsg
        }]
    }

    const response = await axios.post(url, card)
    if (response.data === 1) C.success('TEAMS MESSAGE SENT')
    else C.error('ERROR WHILE SENDING TEAMS MESSAGE', removeCircularJSONstringify(response.data))
    try {
        const path = Path.join(__dirname, '../lastTeamsMsg.txt')
        C.info(`teams message and url have been written to ${path}`, removeCircularJSONstringify(response.status))
        fs.writeFileSync(path, `url: ${url}\n\n` + JSON.stringify(card))
    } catch (err) {
        C.error(err)
    }
    return `${response.status} - ${response.statusText}`
}