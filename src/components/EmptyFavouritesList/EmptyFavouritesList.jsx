import React from "react";

import {
  StyledContainer,
  Message,
  LinkToCatalog,
} from "./EmptyFavoritesList.styled";

const EmptyFavoritesList = () => {
  return (
    <StyledContainer>
      <Message>There is no cars in your favorite list.</Message>
      <LinkToCatalog to="/catalog">Follow to catalog and choose.</LinkToCatalog>
    </StyledContainer>
  );
};
export default EmptyFavoritesList;
