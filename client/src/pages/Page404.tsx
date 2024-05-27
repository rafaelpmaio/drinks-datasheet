import themeStyles from 'styles/theme.module.scss'

export default function Page404() {
    return (
        <section className={themeStyles.card}>
            <h1>404</h1>
            <p>Sry, We couldn't find the page :(</p>
        </section>
    )
}