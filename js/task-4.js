class StringBuilder {
    constructor (value){
        this._value = value;
    };
    get value(){
        return this._value;
    };
    set value (newValue){
        this._value = newValue;
    };
    append(str){
        this._value.push(str);
        console.log(value);
    };
    prepend(str){
        this._value.shift(str);
        console.log(value);

    };
    pad(str){
        this._value.shift(str);
        this._value.push(str);
        console.log(value);

    }
}

const builder = new StringBuilder('.');
// console.log(builder);
builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство
//  _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

