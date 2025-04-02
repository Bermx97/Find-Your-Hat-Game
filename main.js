const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field { 
    constructor(field) {
      this._field = field;
      this._playerRow = this.playerPosition()[0];
      this._playerColumn = this.playerPosition()[1];
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
      } return [this._playerRow = rowField, this._playerColumn = columnField];
    } 
    moveUp () {
      if (this._field[this._playerRow - 1][this._playerColumn] === 'O') {
        throw new Error('Game over, you fell into a hole');
      } else if (this._playerRow > 0) {
        this._field[this._playerRow - 1][this._playerColumn] = '*';
        this._playerRow --;
      } else {
        throw new Error('you have gone off track');
      }
    };
    moveDown () { 
      if (this._field[this._playerRow + 1][this._playerColumn] === 'O') {
        throw new Error('Game over, you fell into a hole');
      } else if (this._playerRow < this._field.length - 1) {
        this._field[this._playerRow + 1][this._playerColumn] = '*';
        this._playerRow ++;
      } else {
        throw new Error('you have gone off track'); 
      }
    };
    moveRight () { 
      if (this._field[this._playerRow][this._playerColumn + 1] === 'O') {
        throw new Error('Game over, you fell into a hole');
      } else if (this._playerColumn < this._field[0].length - 1) {
        this._field[this._playerRow][this._playerColumn + 1] = '*';
        this._playerColumn ++;
      } else {
        throw new Error('you have gone off track');
      }
    };
    moveLeft () {
      if (this._field[this._playerRow][this._playerColumn - 1] === 'O') {
        throw new Error('Game over, you fell into a hole');
      } else if (this._playerColumn > 0) {
        this._field[this._playerRow][this._playerColumn - 1] = '*';
        this._playerColumn --;
      } else {
        throw new Error('you have gone off track');
      }
    };
};


const myField = new Field([
    ['O', '░', 'O', 'O', 'O', 'O', '░', 'O', '░',],
    ['░', 'O', '░', '░', '░', '░', 'O', '░', '░',],
    ['O', '░', '░', 'O', 'O', '░', '░', '*', 'O',],
    ['O', 'O', '░', '░', 'O', 'O', 'O', 'O', '░',],
    ['░', 'O', '░', 'O', 'O', 'O', '░', '^', 'O',],
    ['░', 'O', '░', 'O', 'O', 'O', '░', 'O', 'O',],
]);
  

//node main.js


console.log(myField._field.length)

myField.printField()
