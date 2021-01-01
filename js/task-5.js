class Car {  
  static getSpecs(car){
    // console.log({maxSpeed, speed, isOn, distance, price});
    console.log(car);
    return ;
  }  
  constructor({speed = 0, price , maxSpeed, isOn = false, distance = 0}) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }  
  get price(){     
      // console.log(this._price)   
      return this._price;             
  };
  set price (newPrice){
    this._price = newPrice;      
  } 
   
  turnOn() {
    this.isOn = true;
    // console.log('машина работает!!!');
    return;
  } 

  turnOff() {
    this.isOn = false;
    this.speed = 0;
    // console.log('машинa не работает');
    return;
  }  

  accelerate(value) {    
this.speed += value;
if(this.speed <= this.maxSpeed){
  return console.log (`Your speed = ${this.speed}`);
  } 
  console.log( 'скорость выше максимальной');
} 
  
  decelerate(value) {
    this.speed -= value;
  if(this.speed >= 0){
    return console.log (`Your speed = ${this.speed}`);
  } 
  console.log( 'скорость не может быть меньше нуля');  
  } 
  
  drive(hours) {
    this.distance += hours * this.speed;
    if (this.isOn = true){
      return console.log(`Вы проехали ${this.distance}км!!`)
    }
    console.log('Чтобы поехать заведите машину');
  }  
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

// Напиши класс Car с указанными свойствами и методами.
/*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
/*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
/*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
/*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
/*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
/*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
/*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
/*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */