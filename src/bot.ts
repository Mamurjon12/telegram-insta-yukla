import { Bot, webhookCallback } from 'grammy'
import express from "express"
import { MyContext, setupSession } from './session/session'
import { conversations, createConversation } from '@grammyjs/conversations'
import { startConversation } from './conversations/start.conversation'
import { downloadConversation } from './conversations/download.conversation'
import { autoChatAction } from '@grammyjs/auto-chat-action'

const bot = new Bot<MyContext>('6778762079:AAE_6lcyg-_VhazDvo48N2lfH2U7jmVOl-I')

bot.api.setMyCommands([
    {
        command: 'start',
        description: 'to start the bot',
    },
    {
        command: 'category',
        description: 'to see the categories click this command',
    },
])

bot.use(setupSession())
bot.use(conversations())
bot.use(createConversation(startConversation))
bot.use(createConversation(downloadConversation))
bot.use(autoChatAction())

bot.command('start', async (ctx) => {
    await ctx.conversation.enter('startConversation')
})

bot.on('message::url', async (ctx) => {
    await ctx.conversation.enter('downloadConversation')
})

bot.catch((error) => {
    console.log(error)
})


if (process.env.NODE_ENV === "DEVELOPMENT") {
    bot.start({
        onStart(botInfo) {
            console.log('Started')
        },
    })
} else {
    const port = process.env.PORT || 3000;
    const app = express();
    app.use(express.json());

    app.get("/", (req, res) => {
        res.json({
            message: "Bot is running"
        })
    })

    app.use(`/${bot.token}`, webhookCallback(bot, "express"));
    app.listen(port, () => console.log(`listening on port ${port}`));
}