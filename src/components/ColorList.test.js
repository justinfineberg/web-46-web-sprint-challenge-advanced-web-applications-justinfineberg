import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />)
});
const colors = [
    {
    code: {hex: "#6093ca"},
    color:'blue',
    id: 1
    }
]

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={colors} />)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList colors={colors} editing={true} />)
    let text = screen.getByText(/color name/i)
    expect(text).toBeInTheDocument()

    rerender(<ColorList colors={colors} editing={false} />)
    text = screen.queryByText(/color name/i)
    expect(text).not.toBeInTheDocument()

});
