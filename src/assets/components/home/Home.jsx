import { HomeContainer, Button, Description, Title, LinkLearnMore } from "../../styles/StyleHome.js";

export default function Home({ Titulo, Paragrafo, TextoButão }) {
    return (
        <HomeContainer>
            <div>
                <Title>{Titulo}</Title>
                <Description>{Paragrafo}</Description>
                <Button><LinkLearnMore href="#about">{TextoButão}</LinkLearnMore></Button>
            </div>
        </HomeContainer>
    );
}
