import { render } from "@testing-library/react";
import App from './App';


// To get the text and check if it matche
test("renders an h1" , () =>{
    const {getByText} = render(<App />);
    const h1 = getByText(/Hello/i);
    expect(h1).toHaveTextContent("Hello");
})