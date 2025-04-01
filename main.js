const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field { 
    constructor(field) {
      this._field = field;
    }
    printField () {
      let res = '';
      for (let row of this._field) {
        res += row.join('');
        res += ('\n');
      } console.log(res);
    }
    playerPosition () {
      let rowField = 0;
      let columnField = 0;
      for (let row of this._field) {
        if (row.indexOf('*') > -1) {
          columnField = row.indexOf('*');
          break;
        } else {
          rowField += 1;
        }
      } return [rowField, columnField];
    }
};
  
  const myField = new Field([
    ['*', '░', 'O', 'O', '░', 'O', '░', 'O', '░',],
    ['░', 'O', '░', '░', '░', '░', 'O', '░', '░',],
    ['░', '░', '░', 'O', 'O', '░', '░', '░', 'O',],
    ['░', 'O', '░', '░', 'O', 'O', 'O', 'O', '░',],
    ['░', 'O', '░', 'O', 'O', '░', '░', '^', '░',],
  ]);
  




 
//node main.js
myField.printField();
console.log(myField.playerPosition())

