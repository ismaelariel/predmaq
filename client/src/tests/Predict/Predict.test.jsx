import React from "react";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import Predict from "../../components/Predict/Predict";

import '@testing-library/jest-dom';

test('test user interation', async() => {
    render(<Predict/>);

    const inputUser = screen.getByLabelText('cost-input');

    fireEvent.change(inputUser, {target: {value: 'M15647'}});
    fireEvent.keyDown(inputUser, {key: 'Enter', code: 'Enter', charCod: 13});

    await waitFor(() => {
        expect(inputUser.value).toBe('M15647');
    });
});
