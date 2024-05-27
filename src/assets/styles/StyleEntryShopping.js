import styled from 'styled-components';

export const ContainerEntryShopping = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 4em auto;
    padding: 2em;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContainerInfo = styled.div`
    flex: 1;
    padding: 1em;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1em;
    color: #2d4a43;
`;

export const Description = styled.p`
    font-size: 1.125rem;
    margin-bottom: 1.5em;
    color: #555;
    line-height: 1.6;
`;

export const LinkedButton = styled.div`
    margin-top: 1em;
`;

export const ButtonShopping = styled.button`
    background-color: #e91e63;
    color: white;
    border: none;
    padding: 0.75em 1.5em;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #c2185b;
    }
`;

export const ContainerImg = styled.div`
    flex: 1;
    padding: 1em;
`;

export const Img = styled.img`
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
