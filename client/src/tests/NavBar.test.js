import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import NavBar from '../components/NavBarTop/NavBar';

describe('NavBar', () => {
    it('deve renderizar corretamente', () => {
        const wrapper = mount(<NavBar />);
        expect(wrapper.find('.div_navbar_container')).to.have.lengthOf(1);
        expect(wrapper.find('h4')).to.have.text('PredMaq');
    });
    
    it('deve atualizar o estado de dateBase corretamente', (done) => {
        const wrapper = mount(<NavBar />);
        const initialDateBase = wrapper.find('small').text();
        
        setTimeout(() => {
            const updatedDateBase = wrapper.find('small').text();
            expect(updatedDateBase).to.not.equal(initialDateBase);
            done();
        }, 1500);
    });
});
  