import * as chai from 'chai';
import { Option } from '../../src/objects/impl/option';
import { Text } from '../../src/objects/impl/text';

describe('test for Text class', () => {
    it('give required params only', () => {
        const option = new Option(new Text('option test'), 'value-option_test');

        const expected = {
            text: {
                type: 'mrkdwn',
                text: 'option test',
                emoji: true,
                verbatim: false
            },
            value: 'value-option_test'
        }
        chai.assert.deepEqual(option.getObject(), expected);
    })

    it('give optional props', () => {
        const option = new Option(new Text('option test'), 'value-option_test', {
            description: new Text('description', { type: 'plain_text' }),
            url: 'https://google.com'
        });

        const expected = {
            text: {
                type: 'mrkdwn',
                text: 'option test',
                emoji: true,
                verbatim: false
            },
            value: 'value-option_test',
            description: {
                type: 'plain_text',
                text: 'description',
                emoji: true,
                verbatim: false

            },
            url: 'https://google.com'
        }
        chai.assert.deepEqual(option.getObject(), expected);
    })
})
