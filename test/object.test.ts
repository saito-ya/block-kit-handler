import * as chai from 'chai';
import * as Slack from '@slack/types';
import { plainText, mrkdwnText, option } from '../src/object';

describe('object', () => {
    it('plainText', () => {
        const obj = plainText('plain text');

        const expected: Slack.PlainTextElement = {
            type: 'plain_text',
            text: 'plain text',
            emoji: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('mrkdwnText', () => {
        const obj = mrkdwnText('mrkdwn text', { verbatim: false});

        const expected: Slack.MrkdwnElement = {
            type: 'mrkdwn',
            text: 'mrkdwn text',
            verbatim: false
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('option - required props only', () => {
        const obj = option(plainText('plain text'), 'value-plain');

        const expected: Slack.Option = {
            text: {
                type: 'plain_text',
                text: 'plain text',
                emoji: undefined
            },
            value: 'value-plain',
            description: undefined,
            url: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('option - optional props', () => {
        const obj = option(mrkdwnText('mrkdwn option', { verbatim: true }), 'value-mrkdwn', {
            description: plainText('description'),
            url: 'https://google.com'
        });
        const expected: Slack.Option = {
            text: {
                type: 'mrkdwn',
                text: 'mrkdwn option',
                verbatim: true
            },
            value: 'value-mrkdwn',
            description: {
                type: 'plain_text',
                text: 'description',
                emoji: undefined
            },
            url: 'https://google.com'
        }
        chai.assert.deepEqual(obj, expected);
    })
})