export function romanToInteger(str) {
    let result = 0;
    function rom2dec(symbol) {
        switch (symbol) {
            case 'I':
                return 1;
                break;
            case 'V':
                return 5;
                break;
            case 'X':
                return 10;
                break;
            case 'L':
                return 50;
                break;
            case 'C':
                return 100;
                break;
            case 'D':
                return 500;
                break;
            case 'M':
                return 1000;
                break;
            default:
                return 0;
                break;
        }
    }
    for (let i = 0; i < str.length - 1; i++) {
        // сначала безусловно прибавляем букву к результату
        // если оказывается, что буква - вычитающая приставка (как I в IV), то вычитаем ее дважды
        result += rom2dec(str[i]);
        if (rom2dec(str[i]) < rom2dec(str[i + 1])) {
            result -= rom2dec(str[i]) * 2;
        }
    }
    result += rom2dec(str[str.length - 1]);
    return result;
}
