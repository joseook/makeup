import styled from 'styled-components';

export const HomeContainer = styled.section`
    max-width: 1200px;
    margin: 5em auto;
    display: flex;
    padding: 4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    text-align: center;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #333;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1.25rem;
    margin: 1em 0;
    font-weight: 300;
    color: #555;
    line-height: 1.6;
`;

export const LinkLearnMore = styled.a`
    text-decoration: none;
    color: inherit;
`;

export const Button = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 25px;
    border: none;
    background-color: #e91e63;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    &:hover {
        background-color: #d81b60;
        transform: translateY(-2px);
    }
    &:active {
        background-color: #c2185b;
        transform: translateY(0);
    }
`;
