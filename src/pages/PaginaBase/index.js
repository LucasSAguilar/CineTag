import Cabecalho from "componentes/Cabecalho"
import FavoritosProvider from "contextos/Favoritos"
import Container from "componentes/Container"
import { Outlet } from "react-router-dom"
import Rodape from "componentes/Rodape"

export default function PaginaBase(){
    return (
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                    
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}