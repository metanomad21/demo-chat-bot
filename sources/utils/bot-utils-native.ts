import TelegramBot from 'node-telegram-bot-api';
import * as process from 'process';

const token = process.env.BOT_TOKEN!;
console.log('token=',token);

export const bot = new TelegramBot(token, { polling: true });
bot.on("polling_error", (msg: any) => console.log(msg));
console.log('Start bot success===');