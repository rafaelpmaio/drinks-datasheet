import styles from './Button.module.scss'

interface ButtonProps {
    children: any,
    onClick?: (valor: any) => void, 
    className?: any,
    type?: string
}

export default function Button({ children, onClick: aoClickado, className, type = 'button' }: ButtonProps) {

    return (
        <button className={`${styles.default} ${styles[type]} ${className}`} onClick={aoClickado}>
            { children }
        </button >
    )
};