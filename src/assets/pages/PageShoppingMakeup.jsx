import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from '../components/ui/Card.jsx';
import data from '../data/makeup.json';
import { ContainerShopping, TitleShopping, SearchContainer, SearchInput, SearchIcon, CardsContainer } from '../styles/StylePageShoppingMakeup';

export default function PageShoppingMakeup() {
    const [searchTerm, setSearchTerm] = useState('');
    const makeups = data.makeups.filter(makeup =>
        makeup.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        makeup.AboutMakeup.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ContainerShopping>
            <TitleShopping>Shopping</TitleShopping>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search for makeup..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIcon>
                    <FaSearch />
                </SearchIcon>
            </SearchContainer>
            <CardsContainer>
                {makeups.map((makeup, index) => (
                    <Card
                        key={index}
                        TituloMake={makeup.Title}
                        SobreMake={makeup.AboutMakeup}
                        Img={makeup.ImgMake}
                        TextoButão={makeup.Status === "Estoque" ? "Comprar" : "Indisponível"}
                        ProductName={makeup.Title.toLowerCase().replace(/\s+/g, '-')}
                    />
                ))}
            </CardsContainer>
        </ContainerShopping>
    );
}
