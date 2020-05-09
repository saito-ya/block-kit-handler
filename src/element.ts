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
    }
}
