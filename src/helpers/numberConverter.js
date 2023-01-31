export function numberConverter(number) {
    if(number >= 1000){
        const string = number.toString()
        const converted = string.slice(0, -3) + '.' + string.slice(-1) + 'K'

        return converted
    } else if(number >= 1000000){
        const string = number.toString()
        const converted = string.slice(0, -6) + 'Mil.'

        return converted
    } else if(number <= -1000){
        const string = number.toString()
        const converted = string.slice(0, -3) + '.' + string.slice(-1) + 'K'

        return converted
    } else if(number <= -1000000){
        const string = number.toString()
        const converted = string.slice(0, -6) + 'Mil.'

        return converted
    } else {
        return number
    }
}
