const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field { 
    constructor(field) {
      this._field = field;
      this._playerRow = 0;
      this._playerColumn = 0;
    }
    printField () {
      let res = '';
      for (let row of this._field) {
        res += row.join('');
        res += ('\n');
      } console.log(res);
    } 
    playerPosition () {
      let rowField = []
      let columnField = []
      for (let row of this._field) {
        let iInRow = 0;
        for (let symbol of row) {
          let inColumnField = [];
          let i = 0
          if (symbol === '*') {
            //console.log(symbol)
            inColumnField.push(i)
            i++
          } else {
            i++
          } console.log(inColumnField)
        }
    } console.log(columnField)
  }
};
const myField = new Field([
    ['*', '░', 'O', 'O', '*', 'O', '░', 'O', '░',],
    ['░', 'O', '░', '░', '░', '░', 'O', '░', '░',],
    ['*', '░', '░', 'O', 'O', '░', '░', '░', 'O',],
    ['*', 'O', '░', '░', 'O', 'O', 'O', 'O', '░',],
    ['░', 'O', '░', 'O', 'O', '*', '░', '^', '*',],
]);
  




//node main.js
myField.printField();
myField.playerPosition()
//console.log(myField.playerPosition())
//console.log(myField._playerRow)
//console.log(myField._playerColumn)













/* playerPosition () {
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
*/