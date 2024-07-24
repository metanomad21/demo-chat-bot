import dotenv from 'dotenv'
dotenv.config()
import {bot} from './utils/bot-utils-native'

async function main(): Promise<void> {
    await bot.setMyCommands([
        { command: '/brain', description: 'Talk anything with AI bot' },
      ])

      bot.onText(/\/brain (.+)/, async (msg: any, match: any) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const userQuery: any = match[1];

        bot.sendMessage(chatId, `Welcome to chat bot: ${userQuery}`);
      })
}

main();