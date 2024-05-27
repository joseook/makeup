import styled from 'styled-components';

export const HeaderContainer = styled.header`
    max-width: 1200px;
    margin: 0 auto;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const Logo = styled.img`
    width: 150px;
    border-radius: 100%;
`;

export const Nav = styled.nav`
    display: flex;
`;

export const NavList = styled.ul`
    display: flex;
    gap: 2em;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const NavLink = styled.a`
    font-size: 20px;
    font-weight: bold;
    color: #2d4a43;
    text-transform: capitalize;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 15px 0;
    border-bottom: 3px solid transparent;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, border-bottom 0.3s ease-in-out;

    &:hover {
        color: #123e35;
        transform: scale(1.1);
        border-bottom: 3px solid #123e35;
    }
`;