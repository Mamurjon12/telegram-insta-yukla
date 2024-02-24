import { AutoChatActionFlavor } from '@grammyjs/auto-chat-action'
import { ConversationFlavor } from '@grammyjs/conversations'
import { Context, SessionFlavor, session } from 'grammy'

export interface SessionData {
    status: boolean
}

export type MyContext = Context &
    SessionFlavor<SessionData> &
    ConversationFlavor &
    AutoChatActionFlavor

export function setupSession() {
    return session({
        initial: (): SessionData => ({
            status: true,
        }),
    })
}
