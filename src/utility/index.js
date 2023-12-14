export const yearFormat = (str) => {
    const date = new Date(str);
    return `${date.getUTCFullYear()}`
}