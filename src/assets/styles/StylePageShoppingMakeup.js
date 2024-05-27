import styled from 'styled-components';

export const ContainerShopping = styled.div`
    max-width: 1200px;
    margin: 4em auto;
    padding: 0 1rem;
`;

export const TitleShopping = styled.h1`
    font-size: 3rem;
    color: #2d4a43;
    text-align: center;
    margin-bottom: 2rem;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
`;

export const SearchInput = styled.input`
    width: 300px;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

export const SearchIcon = styled.div`
    position: absolute;
    right: 32%;
    color: #ccc;
    background-color: black;
    padding: 0.5rem;
    border-radius: 50%;
    
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`;
