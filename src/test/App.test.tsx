import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

// Tests
test("Renders  app Logo", async () => {
   console.log(screen);
   render(<App/>);
   expect(screen.getByTestId('logo')).toHaveTextContent('Stars')
});
