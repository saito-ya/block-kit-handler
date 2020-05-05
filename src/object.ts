import * as Slack from '@slack/types';

export interface PlainTextOptionalProps {
    emoji?: boolean
}
export function plainText(text: string, optionalProps?: PlainTextOptionalProps): Slack.PlainTextElement {
    return {
        type: 'plain_text',
        text,
        emoji: optionalProps?.emoji
    }
}

export interface MrkdwnTextOptionalProps {
    verbatim?: boolean
}
export function mrkdwnText(text: string, optionalProps?: MrkdwnTextOptionalProps): Slack.MrkdwnElement {
    return {
        type: 'mrkdwn',
        text,
        verbatim: optionalProps?.verbatim
    }
}

export interface OptionOptionalProps {
    description?: Slack.PlainTextElement;
    url?: string;
}
export function option(text: Slack.PlainTextElement | Slack.MrkdwnElement, value: string, optionalProps?: OptionOptionalProps): Slack.Option {
    return {
        text,
        value,
        description: optionalProps?.description,
        url: optionalProps?.url
    }
}