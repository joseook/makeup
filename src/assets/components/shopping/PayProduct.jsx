import { ContainerPayProduct, ProductImage, ProductDetails, ProductTitle, ProductDescription, ProductStatus, AddToCartButton } from '../../styles/StylePayProduct.js';

export default function PayProduct({ produto }) {
    return (
        <ContainerPayProduct>
            <ProductImage src={produto.ImgMake} alt={produto.Title} />
            <ProductDetails>
                <ProductTitle>{produto.Title}</ProductTitle>
                <ProductDescription>{produto.AboutMakeup}</ProductDescription>
                <ProductStatus>{produto.Status}</ProductStatus>
                <a href="/">
                    <AddToCartButton disabled={produto.Status !== "Estoque"}>
                        {produto.Status === "Estoque" ? "Adicionar ao Carrinho" : "Indisponível"}
                    </AddToCartButton>
                </a>
            </ProductDetails>
        </ContainerPayProduct>
    );
}
