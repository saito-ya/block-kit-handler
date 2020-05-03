import * as chai from 'chai';
import * as Slack from '@slack/types';
import { button, checkboxes, datepicker, plainTextInput, staticSelect } from '../src/element';
import { plainText, option, mrkdwnText } from '../src/object';

describe('element', () => {
    it('button - required props only', () => {
        const obj = button(plainText('button'), 'button_action');

        const expected: Slack.Button = {
            type: 'button',
            text: {
                type: 'plain_text',
                text: 'button',
                emoji: undefined
            },
            action_id: 'button_action',
            url: undefined,
            value: undefined,
            style: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('button - optional props', () => {
        const obj = button(plainText('button'), 'button_action', {
            url: 'https://google.com',
            value: 'value-button',
            style: 'danger'
        });

        const expected: Slack.Button = {
            type: 'button',
            text: {
                type: 'plain_text',
                text: 'button',
                emoji: undefined
            },
            action_id: 'button_action',
            url: 'https://google.com',
            value: 'value-button',
            style: 'danger'
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('checkboxes - required props only', () => {
        const obj = checkboxes('checkboxes', [
            option(plainText('option 1'), 'value-option1'),
            option(plainText('option 2'), 'value-option2')
        ]);

        const expected: Slack.Checkboxes = {
            type: 'checkboxes',
            action_id: 'checkboxes',
            options: [
                {
                    text: {
                        type: 'plain_text',
                        text: 'option 1',
                        emoji: undefined
                    },
                    value: 'value-option1',
                    description: undefined,
                    url: undefined
                },
                {
                    text: {
                        type: 'plain_text',
                        text: 'option 2',
                        emoji: undefined
                    },
                    value: 'value-option2',
                    description: undefined,
                    url: undefined
                }
            ],
            initial_options: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('checkboxes - optional props', () => {
        const obj = checkboxes('checkboxes', [
            option(plainText('option 1'), 'value-option1'),
            option(plainText('option 2'), 'value-option2')
        ], {
            initialOptions: [option(plainText('option 2'), 'value-option2')]
        });

        const expected: Slack.Checkboxes = {
            type: 'checkboxes',
            action_id: 'checkboxes',
            options: [
                {
                    text: {
                        type: 'plain_text',
                        text: 'option 1',
                        emoji: undefined
                    },
                    value: 'value-option1',
                    description: undefined,
                    url: undefined
                },
                {
                    text: {
                        type: 'plain_text',
                        text: 'option 2',
                        emoji: undefined
                    },
                    value: 'value-option2',
                    description: undefined,
                    url: undefined
                }
            ],
            initial_options: [
                {
                    text: {
                        type: 'plain_text',
                        text: 'option 2',
                        emoji: undefined
                    },
                    value: 'value-option2',
                    description: undefined,
                    url: undefined
                }
            ]
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('datepicker - required props only', () => {
        const obj = datepicker('datepick_action');

        const expected: Slack.Datepicker = {
            type: 'datepicker',
            action_id: 'datepick_action',
            placeholder: undefined,
            initial_date: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('datepicker - optional props', () => {
        const obj = datepicker('datepick_action', {
            initialDate: '2020-05-02'
        });

        const expected: Slack.Datepicker = {
            type: 'datepicker',
            action_id: 'datepick_action',
            placeholder: undefined,
            initial_date: '2020-05-02'
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('plainTextInput - required props only', () => {
        const obj = plainTextInput('input_action');

        const expected: Slack.PlainTextInput = {
            type: 'plain_text_input',
            action_id: 'input_action',
            placeholder: undefined,
            initial_value: undefined,
            multiline: undefined,
            min_length: undefined,
            max_length: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('plainTextInput - optional props', () => {
        const obj = plainTextInput('input_action', {
            initialValue: 'test',
            multiline: true
        });

        const expected: Slack.PlainTextInput = {
            type: 'plain_text_input',
            action_id: 'input_action',
            placeholder: undefined,
            initial_value: 'test',
            multiline: true,
            min_length: undefined,
            max_length: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('staticSelect - required props only', () => {
        const obj = staticSelect('select_action', plainText('static select'), [
            option(mrkdwnText('option 1'), 'opt-1'),
            option(mrkdwnText('option 2'), 'opt-2')
        ]);

        const expected: Slack.StaticSelect = {
            type: 'static_select',
            action_id: 'select_action',
            placeholder: {
                type: 'plain_text',
                text: 'static select',
                emoji: undefined
            },
            options: [
                {
                    text: {
                        type: 'mrkdwn',
                        text: 'option 1',
                        verbatim: undefined
                    },
                    value: 'opt-1',
                    description: undefined,
                    url: undefined
                },
                {
                    text: {
                        type: 'mrkdwn',
                        text: 'option 2',
                        verbatim: undefined
                    },
                    value: 'opt-2',
                    description: undefined,
                    url: undefined
                }
            ],
            initial_option: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('staticSelect - optional props', () => {
        const obj = staticSelect('select_action', plainText('static select'), [
            option(mrkdwnText('option 1'), 'opt-1'),
            option(mrkdwnText('option 2'), 'opt-2')
        ], {
            initialOption: option(mrkdwnText('option 1'), 'opt-1')
        });

        const expected: Slack.StaticSelect = {
            type: 'static_select',
            action_id: 'select_action',
            placeholder: {
                type: 'plain_text',
                text: 'static select',
                emoji: undefined
            },
            options: [
                {
                    text: {
                        type: 'mrkdwn',
                        text: 'option 1',
                        verbatim: undefined
                    },
                    value: 'opt-1',
                    description: undefined,
                    url: undefined
                },
                {
                    text: {
                        type: 'mrkdwn',
                        text: 'option 2',
                        verbatim: undefined
                    },
                    value: 'opt-2',
                    description: undefined,
                    url: undefined
                }
            ],
            initial_option: {
                text: {
                    type: 'mrkdwn',
                    text: 'option 1',
                    verbatim: undefined
                },
                value: 'opt-1',
                description: undefined,
                url: undefined
            }
        }
        chai.assert.deepEqual(obj, expected);
    })

})