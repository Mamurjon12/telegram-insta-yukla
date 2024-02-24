import { Conversation } from '@grammyjs/conversations'
import { MyContext } from '../session/session'
import { Keyboard } from 'grammy'

export type MyConversation = Conversation<MyContext>

export async function startConversation(
    conversation: MyConversation,
    ctx: MyContext
) {
    await ctx.reply('What is your firstname?')
    const firstname = await conversation.waitFor(':text')

    await ctx.reply('What is your lastname?')
    const lastname = await conversation.waitFor(':text') 

    await ctx.reply('Could you shre your phone number?', {
        reply_markup: new Keyboard()
            .requestContact('☎️ Share Contact')
            .resized(),
    })
    const phoneNumber = await conversation.waitFor(':contact')

    await ctx.reply('You have successfully registered. Welcome!', {
        reply_markup: {
            remove_keyboard: true,
        },
    })
}
