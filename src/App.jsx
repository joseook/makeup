import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from './assets/components/Header.jsx';
import PageHome from './assets/pages/PageHome.jsx';
import PageContact from './assets/pages/PageContact.jsx'
import PageShopping from './assets/pages/PageShoppingMakeup.jsx'
import PagePayProduct from "./assets/pages/PagePayProduct.jsx";
import Footer from "./assets/components/Footer.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<PageHome/>}/>
                <Route path="/shopping" element={<PageShopping/>}/>
                <Route path="/pay-product/:productName" element={<PagePayProduct />} />
                <Route path="/contact" element={<PageContact/>}/>
            </Routes>

            <Footer
                ContainerStyle="footerContainer"
                Paragrafo="© Kailla. Todos os direitos reservados."
                NavLinks1="Home"
                NavLinks2="Sobre"
                NavLinks3="Shopping"
            />
        </BrowserRouter>

    )
}

export default App
