//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
// HTML файла нет так как выводит и в консоль редактора.


const json = `{
  "list": [
    {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
    },
    {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
    }
  ]
}`;

const obj = JSON.parse(json);

for (let i = 0; i < obj.list.length; i++) {
    obj.list[i].age = parseInt(obj.list[i].age);
}

console.log(obj);