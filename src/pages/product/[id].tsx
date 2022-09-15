import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query} = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officia exercitationem eius modi iste optio asperiores quos. Natus et, repellat amet suscipit hic, consequuntur iure, iusto velit aspernatur provident libero.</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}