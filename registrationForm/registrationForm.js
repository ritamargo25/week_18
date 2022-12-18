let errors = [];
function checkValid(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле' + input.placeholder + 'не заполнено');
    }
    if (validity.patternMissmatch) {
        errors.push('неверный формат заполнения');
    }

}
