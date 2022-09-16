import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Compra Efetuada!</h1>
            <ImageContainer>

            </ImageContainer>
            <p>
                Uhuul <strong>Felipe Marques</strong>, sua <strong>camiseta beyond the limits</strong> já está a caminho da sua casa.
            </p>

            <Link href="/">
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}