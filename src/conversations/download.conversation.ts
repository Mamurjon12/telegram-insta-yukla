import { Conversation } from '@grammyjs/conversations'
import { MyContext } from '../session/session'
import { instaSave } from '../axios/instagram'

type MyConversation = Conversation<MyContext>

export async function downloadConversation(
    conversation: MyConversation,
    ctx: MyContext
) {
    const url = ctx.message?.text
    const waitMessage = await ctx.reply('Please wait ⏳')
    const data = await instaSave(url)

    ctx.chatAction = 'upload_video'
    await ctx.replyWithVideo(data[0].link, {
        caption: `<b>${data[0].title}</b>\n\n@yukklaw_bot`,
        parse_mode: 'HTML',
    })
    await ctx.api.deleteMessage(waitMessage.chat.id, waitMessage.message_id)
}
