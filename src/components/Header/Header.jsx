import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { StartLogoBig } from "../RenderSvg/RenderSvg";
import { HamburgerMenu } from "./Hamburger/Hamburger";
import Nav from "../Navigation/Navigation";
import UserLogoutModal from "./ProfileModal/ProfileModal";

import {
  NavContainer,
  HamburgerButton,
  HeaderContainer,
  UserInfo,
  UserName,
  UserAvatar,
} from "./Header.styled";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const location = useLocation();

  const { user } = useAuth();

  const toggleBurgerMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleUserModal = () => {
    setUserModalOpen(!isUserModalOpen);
  };

  return (
    <>
      {location.pathname !== "/auth/login" &&
        location.pathname !== "/auth/register" &&
        location.pathname !== "/" && (
          <HeaderContainer>
            <NavLink to="/main">
              <StartLogoBig />
            </NavLink>
            <NavContainer>
              <Nav />
            </NavContainer>

            <UserInfo onClick={toggleUserModal}>
              <UserAvatar src={user.avatar} />
              <UserName>{user.name}</UserName>
              {isUserModalOpen && <UserLogoutModal />}
            </UserInfo>

            <HamburgerButton>
              <GiHamburgerMenu onClick={toggleBurgerMenu} />
            </HamburgerButton>

            <HamburgerMenu
              openState={isMenuOpen}
              handleCloseMenu={toggleBurgerMenu}
            />
          </HeaderContainer>
        )}
    </>
  );
};
