import styled from "styled-components";

export const AboutContainer = styled.section`
    max-width: 1200px;
    margin: 5em auto;
    padding: 200px 9% 100px;
    text-align: center;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #333;
    margin-bottom: 1rem;
`;

export const ContainerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
`;

export const ContainerStateDescriptionInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    border-top: 1px solid #e0e0e0;
    padding: 1rem 0;
    cursor: pointer;
`;

export const ContainerStateDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    padding: 1rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease;
    &:hover {
        background: #f1f1f1;
    }
`;

export const DescriptionResult = styled.p `
    font-size: 20px;
    
`

export const Description = styled.p`
    font-size: 1.125rem;
    color: #555;
    flex: 1;
    margin: 0;
`;

export const IconDescription = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    cursor: pointer;
`;
