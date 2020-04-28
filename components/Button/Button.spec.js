import React from 'react'
import {mount} from 'enzyme'
import {DarkButton, Button} from "./Button.component";

describe('Button', () => {
    it('should render a button', () => {
        const wrap = mount(<ButtonComponent>OK</ButtonComponent>);
        expect(wrap.find('button').text()).toBe('OK')

    });

    it('should render a dark button', () => {
        const wrap = mount(<DarkButton>OK</DarkButton>);
        expect(wrap.find('button').text()).toBe('OK')
    });
})