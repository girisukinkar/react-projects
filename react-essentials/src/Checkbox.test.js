import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {Checkbox}  from "./Checkbox";

test("check if its checked", () => {


    const { getByLabelText }  = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})