import styles from './Input.module.css'

export default function setLabelDecorationWhenInputHasValue(value: string) {
    let labelClass = '';
    value
        ? labelClass = styles.input_has_value
        : labelClass = '';

        return labelClass;
}