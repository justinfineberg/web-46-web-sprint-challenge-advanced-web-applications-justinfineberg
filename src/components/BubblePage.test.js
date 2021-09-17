import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
import ColorList from './ColorList'

test("Renders without errors", ()=> {
    render (<BubblePage />)
});

const colors = [
    {
    code: {hex: "#6093ca"},
    color:'blue',
    id: 1
    }
]

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    const fake = jest.fn(()=>{
        return(colors)
    })
    render(<ColorList colors={fake()}/>)
    await waitFor(()=>{
    const colors = screen.queryAllByTestId(/color/i);
    expect(colors).toHaveLength(1);
    })

   
});