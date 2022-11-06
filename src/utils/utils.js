export const getType = (value) => {
    return Object.prototype.toString.call(value).match(/\s([\w]+)/)[1].toLowerCase()
}