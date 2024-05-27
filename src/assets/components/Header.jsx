import {
    HeaderContainer,
    Logo,
    Nav, NavLink,
    NavList,
} from '../styles/StyleHeader.js'
import LogoImg from '../img/logo.png'

export default function Header() {

    return (
        <HeaderContainer>
            <a href="/"><Logo src={LogoImg} alt="Maquiagem" /></a>
            <Nav>
                <NavList>
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="#about">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink href="/shopping">Shopping</NavLink>
                    </li>
                </NavList>
            </Nav>
        </HeaderContainer>
    )
}