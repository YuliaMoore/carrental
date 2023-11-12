import React from "react";
import Logo from "../../images/car-rental-logo.png";
import {
  NavContainer,
  Container,
  NavList,
  NavLinkStyled,
  Image,
  Wrapper,
} from "./Header.styled";

const Header = () => {
  return (
    <NavContainer>
      <Container>
        <NavList>
          <NavLinkStyled to="/">
            <Image src={Logo} alt="logo" />
            Home
          </NavLinkStyled>
        </NavList>
        <Wrapper>
          <NavList>
            <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          </NavList>
          <NavList>
            <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
          </NavList>
        </Wrapper>
      </Container>
    </NavContainer>
  );
};

export default Header;
