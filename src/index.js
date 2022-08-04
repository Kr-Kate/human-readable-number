const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const twoDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const dozens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['hundred', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

module.exports = function toReadable (number) {
    const string = number.toString();
    let result = '';
    if(string.length === 1) {
        result = singleDigits[number];
    }
    else if(string.length === 2 && string[0] == 1) {
        result = twoDigits[string[1]];
    }
    else if(string.length === 2 && string[0] > 1 && string[1] != 0) {
        result = dozens[string[0]] + ' ' + singleDigits[string[1]];
    }
    else if(string.length === 2 && string[0] > 1 && string[1] == 0) {
        result = dozens[string[0]];
    }
    else if(string.length === 3 && string[1] == 0 && string[2] == 0) {
        result = hundreds[string[0]];
    }
    else if(string.length === 3 && string[1] == 0 && string[2] != 0) {
        result = hundreds[string[0]] + ' ' + singleDigits[string[2]];
    }
    else if(string.length === 3 && string[1] == 1) {
        result = hundreds[string[0]] + ' ' + twoDigits[string[2]];
    }
    else if(string.length === 3 && string[1] > 1 && string[2] == 0) {
        result = hundreds[string[0]] + ' ' + dozens[string[1]];
    }
    else {
        result = hundreds[string[0]] + ' ' + dozens[string[1]] + ' ' + singleDigits[string[2]];
    }
    return result;
}

