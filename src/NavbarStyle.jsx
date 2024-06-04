import styled from "styled-components";
import { Link } from "react-router-dom";

const device = {
    mobile: `(max-width: 768px)`
};


export const StyledNav = styled.nav`
    display: flex;
    margin-top: 0;
    padding-top: 0;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    color: #fff;
    font-size: 1.2em;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;

    .language-selector {
        position: absolute;
        top: 10px;
        left: 10px;
        border: none;
        background: black;
        color: #000;
        padding: 5px 10px;
        font-size: 1em;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
    }

    a {
        color: #fff;
        text-decoration: none;
        margin: 0 15px;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

        &:hover {
            color: #fff;
            text-shadow: 0 0 10px #fff;
            transform: scale(1.1);
        }
    }
    @media ${device.mobile} {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 15px;
        flex-wrap: wrap;
        height: auto;
       

        .language-selector {
            position: static;
            
            margin-bottom: 20px;
            width: 100%; // Fügt Flexibilität hinzu, indem es die Breite auf 100% setzt
        }

        a {
            margin: 20px 0;
            width: 100%; // Fügt Flexibilität hinzu, indem es die Breite auf 100% setzt
        }
    }

`;

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
`;

export const StyledLinkd = styled(Link)`
    color: #fff;
    padding: 9px;
    font-size: 1.2em;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        color: #fff;
        text-shadow: 0 0 10px #fff;
        transform: scale(1.1);
    }
`;


export const NavContainer = styled.nav`
    position: absolute;
    top: 15px;
    right: 15px;
    
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 15px;

  display: flex;
  align-items: center;
  gap: 15px; // Erzeugt einen Abstand zwischen dem Logo und dem Text

  img {
    width: 50px; // Ändern Sie dies auf die gewünschte Breite des Logos
    height: 50px; // Ändern Sie dies auf die gewünschte Höhe des Logos
  }

  h1 {
    font-size: 1.5em;
    color: #fff; // Ändern Sie dies auf die gewünschte Farbe
  }
`;