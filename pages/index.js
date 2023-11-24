import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";


const FlexWrapper = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <FlexWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $isBlack />
      <BoxWithStyledComponents $isBlack={false} />
    </FlexWrapper>
  );
}