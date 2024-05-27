import Home from '../components/home/Home.jsx';
import About from '../components/home/About.jsx';
import EntryShopping from "../components/home/EntryShopping.jsx";

export default function PageHome() {

    return (
        <>
            <Home
                Titulo="As melhores maquiagens você encontra aqui na Maquiagens VK"
                Paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. "
                TextoButão="Saber mais"
            />

            <About
                Titulo="Dúvidas sobre as maquiagens"
                Paragrafo1="As maquiagens são realmente boas?"
                Paragrafo2="Como aplicar maquiagem facial?"
                Paragrafo3="As maquiagens são seguras para uso?"
            />

            <EntryShopping
                Titulo="Aproveite nossas ofertas especiais"
                Paragrafo="Descubra as melhores ofertas em maquiagens de alta qualidade. Não perca a oportunidade de se sentir ainda mais bonita com nossos produtos exclusivos."
                TextoButão="Ir às Compras"
            />
        </>
    )
}