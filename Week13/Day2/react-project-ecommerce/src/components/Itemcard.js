import React from "react";
import { Anchor, CardImage, CardContainer, Container, Header2, Header3 } from "./Website.Style";

export default function Itemcard(props) {

  return (
    <CardContainer>

      <Container>
        <CardImage src="https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Pro-Max-Gold-frontimage" alt="" />
        <Header3>Grey T-Shirt</Header3>
        <Header2>$1,500</Header2>
        <Anchor  href="#">Add to Cart</Anchor>
      </Container>

      <Container>
        <CardImage src="https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Pro-Max-Silver-frontimage" alt="" />
        <Header3>Grey T-Shirt</Header3>
        <Header2>$1,500</Header2>
        <Anchor  href="#">Add to Cart</Anchor>
      </Container>

      <Container>
        <CardImage src="https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Pro-Max-Sierra-Blue-frontimage-1" alt="" />
        <Header3>Grey T-Shirt</Header3>
        <Header2>$1,500</Header2>
        <Anchor  href="#">Add to Cart</Anchor>
      </Container>

      <Container>
        <CardImage src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13-Pro-Max/Graphite/Apple-iPhone-13-Pro-Max-Graphite-frontimage.png" alt="" />
        <Header3>Grey T-Shirt</Header3>
        <Header2>$1,500</Header2>
        <Anchor  href="#">Add to Cart</Anchor>
      </Container>
    <h1>Current number </h1>
    </CardContainer>
  );
}