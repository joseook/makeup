import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #2d4a43;
    padding: 20px 0;
    color: #fff;
    text-align: center;
    width: 100%;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
`;

export const FooterNav = styled.nav`
    margin-top: 10px;
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 20px;
    }
`;

export const FooterNavItem = styled.li`
    font-size: 1rem;

    a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #e91e63;
            text-decoration: underline;
        }
    }
`;

export const FooterCopy = styled.p`
    font-size: 1rem;
    color: #ccc;
    margin-bottom: 0;
`;
