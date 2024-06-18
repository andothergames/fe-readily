export const dateConverter = (string) => {
    const DD = string.slice(8, 10)
    const MM = string.slice(5, 7)
    const YY = string.slice(2, 4)
    return `${DD}/${MM}/${YY}`;

}
