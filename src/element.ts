import * as Slack from '@slack/types';

export declare type STYLE = 'primary' | 'danger';
export interface ButtonOptionalProps {
    url?: string;
    value?: string;
    style?: STYLE;
}
export function button(text: Slack.PlainTextElement, actionId: string, optionalProps?: ButtonOptionalProps): Slack.Button {
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
    initialOptions?: Slack.Option[]
}
export function checkboxes(actionId: string, options: Slack.Option[], optionalProps?: CheckboxesOptionalProps): Slack.Checkboxes {
    // TODO: check if elements of initialOptions are included in options
    
    return {
        type: 'checkboxes',
        action_id: actionId,
        options,
        initial_options: optionalProps?.initialOptions
    }
}

export interface DatepickerOptionalProps {
    placeholder?: Slack.PlainTextElement;
    initialDate?: string;
}
export function datepicker(actionId: string, optionalProps?: DatepickerOptionalProps): Slack.Datepicker {
    return {
        type: 'datepicker',
        action_id: actionId,
        placeholder: optionalProps?.placeholder,
        initial_date: optionalProps?.initialDate
    }
}

export interface PlainTextInputOptionalProps {
    placeholder?: Slack.PlainTextElement;
    initialValue?: string;
    multiline?: boolean;
    minLength?: number;
    maxLenght?: number;
}
export function plainTextInput(actionId: string, optionalProps?: PlainTextInputOptionalProps): Slack.PlainTextInput {
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
    initialOption?: Slack.Option;
}
export function staticSelect(actionId: string, placeholder: Slack.PlainTextElement, options: Slack.Option[], optionalProps?: StaticSelectOptionalProps): Slack.StaticSelect {
    return {
        type: 'static_select',
        action_id: actionId,
        placeholder,
        options,
        initial_option: optionalProps?.initialOption
    }
}
