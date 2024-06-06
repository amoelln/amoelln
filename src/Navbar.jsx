import React from "react";
import { useTranslation } from 'react-i18next';
import {StyledNav , NavContainer , StyledLinkd , StyledUl, LanguageSelector } from "./NavbarStyle";

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <StyledNav>
            <LanguageSelector>
            <div className="language-selector">
                <a href="#" onClick={() => changeLanguage('en')}>EN</a> / 
                <a href="#" onClick={() => changeLanguage('de')}>DE</a>
            </div>
            </LanguageSelector>
            <StyledUl>
                <NavContainer>
                    <li>
                        <StyledLinkd to="/">{t('Home')}</StyledLinkd>
                    </li>
                    <li>
                        <StyledLinkd to="/AboutMe">{t('About Me')}</StyledLinkd>
                    </li>
                    <li>
                        <StyledLinkd to="/Kontakt">{t('Contact')}</StyledLinkd>
                    </li>
                </NavContainer>
            </StyledUl>
        </StyledNav>
    );
}

export default Navbar;