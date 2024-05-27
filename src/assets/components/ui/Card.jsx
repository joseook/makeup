import { CardContainer, CardImage, CardContent, CardTitle, CardDescription, CardButton } from '../../styles/StyleCard.js';
import { Link } from 'react-router-dom';

export default function CardMakes({ TituloMake, SobreMake, Img, TextoButão, ProductName }) {
    const isAvailable = TextoButão === "Comprar";

    return (
        <CardContainer>
            <CardImage src={Img} alt={TituloMake} />
            <CardContent>
                <CardTitle>{TituloMake}</CardTitle>
                <CardDescription>{SobreMake}</CardDescription>
                <Link to={isAvailable ? `/pay-product/${ProductName}` : "#"}>
                    <CardButton disabled={!isAvailable}>{TextoButão}</CardButton>
                </Link>
            </CardContent>
        </CardContainer>
    );
}
