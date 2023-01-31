function numberConverter(number) {
    if(number >= 1000){
        const string = number.toString()
        const shortened = string.slice(0, -3)
        const converted = string.slice(0, -3) + 'K'

        return converted
    }
}

console.log(numberConverter(540233))