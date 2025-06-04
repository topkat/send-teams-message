# send-teams-message

A lightweight Node.js package that allows you to send messages to Microsoft Teams channels using webhooks.

[![npm version](https://img.shields.io/npm/v/send-teams-message.svg)](https://www.npmjs.com/package/send-teams-message)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install send-teams-message
```

## Features

- Send messages to Microsoft Teams channels using webhooks
- Support for Adaptive Cards
- TypeScript support
- Automatic message logging
- Simple and intuitive API

## Usage

### Basic Example

```typescript
import { sendTeamsMessage } from 'send-teams-message';

const webhookUrl = 'YOUR_TEAMS_WEBHOOK_URL';
const message = {
    type: 'AdaptiveCard',
    body: [
        {
            type: 'TextBlock',
            text: 'Hello from Node.js!',
            size: 'large'
        }
    ],
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    version: '1.0'
};

await sendTeamsMessage(webhookUrl, message);
```

### Getting a Webhook URL

1. Go to your Teams channel
2. Click on the three dots (...) next to the channel name
3. Select "Manage channel"
4. Go to "Connectors"
5. Find "Incoming Webhook" and click "Configure"
6. Create a new webhook and copy the URL

### Creating Custom Cards

You can create custom Adaptive Cards using the [Adaptive Cards Designer](https://adaptivecards.io/designer). After designing your card:

1. Copy the JSON output
2. Use it as the `configMsg` parameter in the `sendTeamsMessage` function

## API Reference

### `sendTeamsMessage(url: string, configMsg: Record<string, any>): Promise<string>`

Sends a message to a Microsoft Teams channel.

#### Parameters

- `url` (string): The webhook URL of your Teams channel
- `configMsg` (object): The Adaptive Card configuration object

#### Returns

- Promise<string>: A string containing the response status and status text

## Message Logging

The package automatically logs the last sent message to a file named `lastTeamsMsg.txt` in your project root directory. This file contains:
- The webhook URL used
- The complete message payload

## License

MIT © [topkat](https://github.com/topkat) 