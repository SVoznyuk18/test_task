import React from "react";

import { ClassicButton } from "ComponentsRoot";

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">Test assignment for front-end developer</h1>
      <h3 className="promo__text">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </h3>
      <ClassicButton style={{ width: "100px" }}>Sign up</ClassicButton>
    </section>
  );
};

export default Promo;
