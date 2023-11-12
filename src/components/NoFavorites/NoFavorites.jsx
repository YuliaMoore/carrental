import React from "react";
import { StyledContainer, Message, LinkToCatalog } from "./NoFavorites.styled";

const NoFavorites = () => {
  return (
    <StyledContainer>
      <Message>There is no cars in your favorite list.</Message>
      <LinkToCatalog to="/catalog">
        Follow to catalog and choose favorite cars
      </LinkToCatalog>
    </StyledContainer>
  );
};
export default NoFavorites;
