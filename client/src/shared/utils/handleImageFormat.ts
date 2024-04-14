export function handleImageFormat(image: string, path?: string) {
    if (String(image).includes('data:image') || String(image).includes('static/media') ) {
        return image;
    }
    if (image) {
        return require(`assets/images/${path}/${image}`)
    }
    return require(`assets/images/drink-logo.png`)
}