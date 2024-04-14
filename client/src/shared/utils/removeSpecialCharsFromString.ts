export default function removeSpecialCharsFromString (string: String) {
    return string.replace(/[^\w]/g, '');
}