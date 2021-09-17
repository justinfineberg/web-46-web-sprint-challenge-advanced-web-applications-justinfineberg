import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
    code: {hex: ""},
    color: "",
    id: null,
}

const example = {
    code: {hex: "#6093ca"},
    color:'blue',
    id: 1
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColor} />)
});
  
test("Renders the color passed into component", () => {
    render (<Color color={example} />)
    const color = screen.queryByText(/blue/i)
    expect(color).toBeInTheDocument()
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const fakeDelete = jest.fn();
    
    const fakeToggle = jest.fn();
    
    
    render(<Color color={blankColor} deleteColor={fakeDelete} toggleEdit={fakeToggle}/>)
    
    const deleteColor = screen.getByText(/x/i)
    
    userEvent.click(deleteColor)
    expect(fakeDelete).toHaveBeenCalled()
    
    expect(fakeToggle).toHaveBeenCalled()
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const fakeEdit = jest.fn()
    const fakeToggle = jest.fn()
    render(<Color color={blankColor} setEditColor={fakeEdit} toggleEdit={fakeToggle}/>)
    
    const colors = screen.getByTestId(/color/i)
    userEvent.click(colors)
    
    
    expect(fakeEdit).toHaveBeenCalled()
    expect(fakeToggle).toHaveBeenCalled()
});