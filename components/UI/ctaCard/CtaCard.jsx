import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";


const CtaCard = () => {
  return (
    <MDBCard background="dark" className="text-white">
      <MDBCardImage
        overlay
        src="https://mdbootstrap.com/img/new/slides/017.webp"
        alt="..."
      />
      <MDBCardOverlay>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </MDBCardText>
        <MDBCardText>Last updated 3 mins ago</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
  );
};

export default CtaCard;
