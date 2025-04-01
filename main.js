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
      let res = ''
      for (let row of this._field) {
        res += row.join('')
        res += ('\n')
      } console.log(res)
    }
}
  
  const myField = new Field([
    ['*', '░', 'O', '░', '░', 'O', '░', 'O', '░',],
    ['░', 'O', '░', '░', '░', '░', 'O', '░', '░',],
    ['░', '░', '░', '░', 'O', '░', '░', '░', 'O',],
    ['░', 'O', '░', '░', 'O', 'O', 'O', '░', '░',],
    ['░', 'O', '░', 'O', 'O', '░', '░', '^', '░',],
  ]);
  


//console.log('',row1,'\n',row2,'\n',row3)
//node main.js