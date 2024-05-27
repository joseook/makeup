import { FooterContainer, FooterContent, FooterNav, FooterNavItem, FooterCopy } from '../styles/StyleFooter.js';

export default function Footer({ ContainerStyle, Paragrafo, NavLinks1, NavLinks2, NavLinks3 }) {
    return (
        <FooterContainer className={ContainerStyle}>
            <FooterContent>
                <FooterCopy>{Paragrafo}</FooterCopy>
                <FooterNav>
                    <ul>
                        <FooterNavItem>
                            <a href="/">{NavLinks1}</a>
                        </FooterNavItem>
                        <FooterNavItem>
                            <a href="/">{NavLinks2}</a>
                        </FooterNavItem>
                        <FooterNavItem>
                            <a href="/contact">{NavLinks3}</a>
                        </FooterNavItem>
                    </ul>
                </FooterNav>
            </FooterContent>
        </FooterContainer>
    );
}
