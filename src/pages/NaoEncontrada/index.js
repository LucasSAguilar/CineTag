import styles from "./NaoEncontrada.module.css"

export default function NaoEncontrada(){
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você está procurano não foi encontrado!</p>
        </section>
    )
}