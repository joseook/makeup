import {
    ContainerEntryShopping,
    ContainerInfo,
    LinkedButton,
    Title,
    Description,
    ButtonShopping,
    ContainerImg,
    Img
} from '../../styles/StyleEntryShopping.js';
import { Link } from 'react-router-dom';

import ImgEntry from '../../img/img-entry.jpg';

export default function EntryShopping({ Titulo, Paragrafo, TextoButão }) {
    return (
        <ContainerEntryShopping>
            <ContainerInfo>
                <Title>{Titulo}</Title>
                <Description>{Paragrafo}</Description>
                <LinkedButton>
                    <Link to="/shopping">
                        <ButtonShopping>{TextoButão}</ButtonShopping>
                    </Link>
                </LinkedButton>
            </ContainerInfo>

            <ContainerImg>
                <Img src={ImgEntry} alt="Entry Image" />
            </ContainerImg>
        </ContainerEntryShopping>
    );
}
