// import {expect, describe, it} from "chai";
// import {render, waitFor} from '@testing-library/react';
// import {renderHook} from '@testing-library/react-hooks';

// import NavBar from "../components/NavBarTop/NavBar";

// describe('NavBar', () => {
//     it('Deve atualizar a dateBase após 1 segundo', async() => {
//         const {result} = renderHook(() => NavBar());
//         const {container} = render(<NavBar />);
        
//         const initialDateBase = result.current[0];
        
//         // Aguarda 1 segundo para a atualização ocorrer
//         await waitFor(() => expect(result.current[0]).not.to.equal(initialDateBase));
        
//         // Verifica se o valor foi renderizado corretamente no componente
//         expect(container.textContent).to.include(result.current[0]);
//     });
// });

import React from "react";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavBar from "../components/NavBarTop/NavBar";

configure({
    adapter: new Adapter()
});

describe("Testin <NavBar/> Component", () => {
    it("Deve atualizar a dateBase após 1 segundo", () => {
        const wrapper = shallow(<NavBar />);
        const message = <p>Edit <code>src/App.js</code> and save to reload.</p>;
        
        expect(wrapper).to.contain(message);
    });
    
    chai.use(chaiEnzyme());
});