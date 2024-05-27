import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    padding: 1rem;
`;

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    color: #2d4a43;
    margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
`;

export const CardButton = styled.button`
    background-color: #e91e63;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #c2185b;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
