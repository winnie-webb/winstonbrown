import React from "react";
import { Helmet } from "react-helmet";

export const Head = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/webp" href="../images/logo.webp" />
      <title>Winston Brown Portfolio</title>
    </Helmet>
  );
};
export default Head;
