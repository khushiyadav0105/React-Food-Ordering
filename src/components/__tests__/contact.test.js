import { render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
    render(<Contact/>);
    //query
    const heading = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();

});

test("should load button on contact us component", () => {

    render(<Contact/>);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();

});



