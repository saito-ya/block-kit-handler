import * as Slack from '@slack/types';
import { PlainTextElement, Option } from './object';

declare type BUTTON_STYLE = 'primary' | 'danger';
export interface ButtonOptionalProps {
    url?: string;
    value?: string;
    style?: BUTTON_STYLE;
}
export interface Button extends Slack.Button{}
export function button(text: PlainTextElement, actionId: string, optionalProps?: ButtonOptionalProps): Button {
    return {
        type: 'button',
        text,
        action_id: actionId,
        url: optionalProps?.url,
        value: optionalProps?.value,
        style: optionalProps?.style
    }
}

export interface CheckboxesOptionalProps {
    initialOptions?: Option[]
}
export interface Checkboxes extends Slack.Checkboxes{}
export function checkboxes(actionId: string, options: Option[], optionalProps?: CheckboxesOptionalProps): Checkboxes {
    // TODO: check if elements of initialOptions are included in options
    
    return {
        type: 'checkboxes',
        action_id: actionId,
        options,
        initial_options: optionalProps?.initialOptions
    }
}

export interface DatepickerOptionalProps {
    placeholder?: PlainTextElement;
    initialDate?: string;
}
export interface Datepicker extends Slack.Datepicker{}
export function datepicker(actionId: string, optionalProps?: DatepickerOptionalProps): Datepicker {
    return {
        type: 'datepicker',
        action_id: actionId,
        placeholder: optionalProps?.placeholder,
        initial_date: optionalProps?.initialDate
    }
}

export interface MultiSelectOptionalProps {
    initialOptions?: Option[];
    maxSelectedItems?: number;
}
export interface MultiSelect extends Slack.MultiStaticSelect{}
export function multiSelect(actionId: string, placeholder: PlainTextElement, options: Option[], optionalProps?: MultiSelectOptionalProps): MultiSelect {
    return {
        type: 'multi_static_select',
        action_id: actionId,
        placeholder,
        options,
        initial_options: optionalProps?.initialOptions
    };
}

export interface MultiExternalSelectOptionalProps {
    minQueryLength?: number;
    initialOptions?: Option[];
    maxSelectedItems?: number;
}
export interface MultiExternalSelect extends Slack.MultiExternalSelect{}
export function multiExternalSelect(actionId: string, placeholder: PlainTextElement, optionalProps?: MultiExternalSelectOptionalProps): MultiExternalSelect {
    return {
        type: 'multi_external_select',
        action_id: actionId,
        placeholder,
        min_query_length: optionalProps?.minQueryLength,
        initial_options: optionalProps?.initialOptions,
        max_selected_items: optionalProps?.maxSelectedItems
    }
}

export interface MultiUsersSelectOptionalProps {
    initialUsers?: string[];
    maxSelectedItems?: number;
}
export interface MultiUsersSelect extends Slack.MultiUsersSelect{}
export function multiUsersSelect(actionId: string, placeholder: PlainTextElement, optionalProps?: MultiUsersSelectOptionalProps): MultiUsersSelect {
    return {
        type: 'multi_users_select',
        action_id: actionId,
        placeholder,
        initial_users: optionalProps?.initialUsers,
        max_selected_items: optionalProps?.maxSelectedItems
    }
}

export interface MultiConversationsSelectOptionalProps {
    initialConversations?: string[];
    defaultToCurrentConversation?: boolean;
    maxSelectedItems?: number;
}
export interface MultiConversationsSelect extends Slack.MultiConversationsSelect{}
export function multiConversationsSelect(actionId: string, placeholder: PlainTextElement, optionalProps?: MultiConversationsSelectOptionalProps): MultiConversationsSelect {
    return {
        type: 'multi_conversations_select',
        action_id: actionId,
        placeholder,
        initial_conversations: optionalProps?.initialConversations,
        default_to_current_conversation: optionalProps?.defaultToCurrentConversation,
        max_selected_items: optionalProps?.maxSelectedItems
    }
}

export interface MultiChannelsSelectOptionalProps {
    initialChannels?: string[];
    maxSelectedItems?: number;
}
export interface MultiChannelsSelect extends Slack.MultiChannelsSelect{}
export function multiChannelsSelect(actionId: string, placeholder: PlainTextElement, optionalProps?: MultiChannelsSelectOptionalProps): MultiChannelsSelect {
    return {
        type: 'multi_channels_select',
        action_id: actionId,
        placeholder,
        initial_channels: optionalProps?.initialChannels,
        max_selected_items: optionalProps?.maxSelectedItems
    }
}

export interface OverflowMenu extends Slack.Overflow{}
export function overflowMenu(actionId: string, options: Option[]): OverflowMenu {
    return {
        type: 'overflow',
        action_id: actionId,
        options
    };
}

export interface PlainTextInputOptionalProps {
    placeholder?: PlainTextElement;
    initialValue?: string;
    multiline?: boolean;
    minLength?: number;
    maxLenght?: number;
}
export interface PlainTextInput extends Slack.PlainTextInput{}
export function plainTextInput(actionId: string, optionalProps?: PlainTextInputOptionalProps): PlainTextInput {
    return {
        type: 'plain_text_input',
        action_id: actionId,
        placeholder: optionalProps?.placeholder,
        initial_value: optionalProps?.initialValue,
        multiline: optionalProps?.multiline,
        min_length: optionalProps?.minLength,
        max_length: optionalProps?.maxLenght
    }
}

export interface StaticSelectOptionalProps {
    initialOption?: Option;
}
export interface StaticSelect extends Slack.StaticSelect{}
export function staticSelect(actionId: string, placeholder: PlainTextElement, options: Option[], optionalProps?: StaticSelectOptionalProps): StaticSelect {
    return {
        type: 'static_select',
        action_id: actionId,
        placeholder,
        options,
        initial_option: optionalProps?.initialOption
    };
}

export interface ExternalSelectOptionalProps {
    initialOption?: Option;
    minQueryLength?: number;
}
export interface ExternalSelect extends Slack.ExternalSelect{}
export function externalSelect(actionId: string, placeholder: PlainTextElement, optionalProps?: ExternalSelectOptionalProps): ExternalSelect {
    return {
        type: 'external_select',
        action_id: actionId,
        placeholder,
        initial_option: optionalProps?.initialOption,
        min_query_length: optionalProps?.minQueryLength
    };
}

export interface UsersSelectOptionalProps {
    initialUser?: string;
}
export interface UsersSelect extends Slack.UsersSelect{}
export function usersSelect(actionId: string, placeholder: PlainTextElement, optionalProps?: UsersSelectOptionalProps): UsersSelect {
    return {
        type: 'users_select',
        action_id: actionId,
        placeholder,
        initial_user: optionalProps?.initialUser
    };
}

export interface ConversationsSelectOptionalProps {
    initialConversation?: string;
    defaultToCurrentConversation?: boolean;
    responseUrlEnabled: boolean;
}
export interface ConversationsSelect extends Slack.ConversationsSelect{}
export function conversationsSelect(actionId: string, placeholder: PlainTextElement, optionalProps?: ConversationsSelectOptionalProps): ConversationsSelect {
    return {
        type: 'conversations_select',
        action_id: actionId,
        placeholder,
        initial_conversation: optionalProps?.initialConversation,
        response_url_enabled: optionalProps?.responseUrlEnabled
    };
}

export interface ChannelsSelectOptionalProps {
    initialChannel?: string;
    defaultToCurrentConversation?: boolean;
}
export interface ChannelsSelect extends Slack.ChannelsSelect{}
export function channelsSelect(actionId: string, placeholder: PlainTextElement, optionalProps?: ChannelsSelectOptionalProps): ChannelsSelect {
    return {
        type: 'channels_select',
        action_id: actionId,
        placeholder,
        initial_channel: optionalProps?.initialChannel
    };
}
