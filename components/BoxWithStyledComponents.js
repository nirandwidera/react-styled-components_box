import styled from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.$isBlack === "black" ? "black" : "green"};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;



/* - Inside of the `components` folder, create a file `BoxWithStyledComponents.js`.
- It should export a function which
  - accepts a prop `$isBlack` (note the `$` sign)
  - returns a `div`
- Inside of the same file, create a styled component called `StyledBox` which styles a `div`.
  - Inside of the return statement of your function, replace the `div` with `StyledBox`.
  - Pass the `$isBlack` prop to the `StyledBox` component.
  - `StyledBox` should have the same styling as the `BoxWithClassName` component.
  - Check whether the `$isBlack` prop is true and set the correct `background-color` accordingly.
  - How could you set the styling for the hover effect again?
- Switch to `./pages/index.js`:
  - import `BoxWithStyledComponents` and
  - below the two `BoxWithClassName` components, render two `BoxWithStyledComponents`, one green and one black. */