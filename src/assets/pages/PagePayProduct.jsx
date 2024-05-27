import { useParams } from 'react-router-dom';
import PayProduct from '../components/shopping/PayProduct.jsx';
import data from '../data/makeup.json';

export default function PagePayProduct() {
    const { productName } = useParams();
    const product = data.makeups.find(makeup => makeup.Title.toLowerCase().replace(/\s+/g, '-') === productName);

    return product ? <PayProduct produto={product} /> : <div>Produto não encontrado</div>;
}
