import styled from 'styled-components';

export const ContainerPayProduct = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 4em auto;
    padding: 0 1rem;
    gap: 2rem;
    align-items: center;
`;

export const ProductImage = styled.img`
    width: 50%;
    object-fit: cover;
    border-radius: 10px;
`;

export const ProductDetails = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ProductTitle = styled.h1`
    font-size: 2.5rem;
    color: #2d4a43;
`;

export const ProductDescription = styled.p`
    font-size: 1.2rem;
    color: #555;
`;

export const ProductStatus = styled.span`
    font-size: 1rem;
    color: ${props => (props.children === "Estoque" ? "green" : "red")};
    font-weight: bold;
`;

export const AddToCartButton = styled.button`
    background-color: #e91e63;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
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
