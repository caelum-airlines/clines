import React from 'react'
import {mount} from 'enzyme'
import {DarkButton, Button} from "./button.component";

describe('Button', () => {
    it('should render a button', () => {
        const wrap = mount(<Button>OK</Button>);
        expect(wrap.find('button').text()).toBe('OK')

    });

    it('should render a dark button', () => {
        const wrap = mount(<DarkButton>OK</DarkButton>);
        expect(wrap.find('button').text()).toBe('OK')
    });
})
