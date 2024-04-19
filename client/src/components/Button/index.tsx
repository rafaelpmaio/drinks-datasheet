import styles from './Button.module.scss'

interface ButtonProps {
    children: string,
    onClick?: (valor: any) => void, 
    type?: string
}

export default function Button({ children, onClick: aoClickado, type = 'button' }: ButtonProps) {

    return (
        <button className={`${styles.default_button} ${styles[type]}`} onClick={aoClickado}>
            { children }
        </button >
    )
};