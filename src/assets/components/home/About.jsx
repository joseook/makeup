import { useState } from "react";
import iconPlus from '../../img/icon-plus.svg';
import iconMinus from '../../img/icon-minus.svg';
import {
    AboutContainer,
    ContainerInfo,
    ContainerStateDescription,
    ContainerStateDescriptionInfo,
    Description, DescriptionResult,
    IconDescription,
    Title
} from "../../styles/StyleAbout.js";

export default function AboutMakeup({ Titulo, Paragrafo1, Paragrafo2, Paragrafo3 }) {
    const [isOpenMakeUpGood, setIsOpenMakeUpGood] = useState(false);
    const [isOpenMakeUpFace, setIsOpenMakeUpFace] = useState(false);
    const [isOpenMakeUpValid, setIsOpenMakeUpValid] = useState(false);

    const handleOpenMakeUpGood = () => {
        setIsOpenMakeUpGood(!isOpenMakeUpGood);
    }

    const handleOpenMakeUpFace = () => {
        setIsOpenMakeUpFace(!isOpenMakeUpFace);
    }

    const handleOpenMakeUpValid = () => {
        setIsOpenMakeUpValid(!isOpenMakeUpValid);
    }

    return (
        <AboutContainer id="#about">
            <ContainerInfo>
                <Title>{Titulo}</Title>
                <ContainerStateDescriptionInfo>
                    <ContainerStateDescription>
                        <Description>{Paragrafo1}</Description>
                        <IconDescription
                            src={isOpenMakeUpGood ? iconMinus : iconPlus}
                            alt={isOpenMakeUpGood ? "Minus" : "Plus"}
                            onClick={handleOpenMakeUpGood}
                        />
                    </ContainerStateDescription>
                    {isOpenMakeUpGood && (
                        <ContainerStateDescriptionInfo>
                            <DescriptionResult>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc
                                sed velit dignissim
                            </DescriptionResult>
                        </ContainerStateDescriptionInfo>
                    )}
                </ContainerStateDescriptionInfo>


                <ContainerStateDescriptionInfo>
                    <ContainerStateDescription>
                        <Description>{Paragrafo2}</Description>
                        <IconDescription
                            src={isOpenMakeUpFace ? iconMinus : iconPlus}
                            alt={isOpenMakeUpFace ? "Minus" : "Plus"}
                            onClick={handleOpenMakeUpFace}
                        />
                    </ContainerStateDescription>
                    {isOpenMakeUpFace && (
                        <ContainerStateDescriptionInfo>
                            <DescriptionResult>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc
                                sed velit dignissim
                            </DescriptionResult>
                        </ContainerStateDescriptionInfo>
                    )}
                </ContainerStateDescriptionInfo>


                <ContainerStateDescriptionInfo>
                    <ContainerStateDescription>
                        <Description>{Paragrafo3}</Description>
                        <IconDescription
                            src={isOpenMakeUpValid ? iconMinus : iconPlus}
                            alt={isOpenMakeUpValid ? "Minus" : "Plus"}
                            onClick={handleOpenMakeUpValid}
                        />
                    </ContainerStateDescription>
                    {isOpenMakeUpValid && (
                        <ContainerStateDescriptionInfo>
                            <DescriptionResult>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc
                                sed velit dignissim
                            </DescriptionResult>
                        </ContainerStateDescriptionInfo>
                    )}
                </ContainerStateDescriptionInfo>

            </ContainerInfo>
        </AboutContainer>
    )
}
