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
      this._error = '';
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
      if (this._field[this._playerRow - 1][this._playerColumn] === '^') {
        this._error = 'Congrats you won <:D ';
      } else if (this._field[this._playerRow - 1][this._playerColumn] === 'O') {
        this._error = 'Game over, you fell into a hole :c ';
      } else if (this._playerRow > 0) {
        this._field[this._playerRow - 1][this._playerColumn] = '*';
        this._playerRow --;
      } else {
        this._error = 'you have gone off track :c ';
      }
    };
    moveDown () {
      if (this._field[this._playerRow + 1][this._playerColumn] === '^') {
        this._error = 'Congrats you won <:D ';
      } else if (this._field[this._playerRow + 1][this._playerColumn] === 'O') {
        this._error = 'Game over, you fell into a hole :c ';
      } else if (this._playerRow < this._field.length - 1) {
        this._field[this._playerRow + 1][this._playerColumn] = '*';
        this._playerRow ++;
      } else {
        this._error = 'You have gone off track :c '; 
      }
    };
    moveRight () { 
      if (this._field[this._playerRow][this._playerColumn + 1] === '^') {
        this._error = 'Congrats you won <:D ';
      } else if (this._field[this._playerRow][this._playerColumn + 1] === 'O') {
        this._error = 'Game over, you fell into a hole :c ';
      } else if (this._playerColumn < this._field[0].length - 1) {
        this._field[this._playerRow][this._playerColumn + 1] = '*';
        this._playerColumn ++;
      } else {
        this._error = 'You have gone off track :c ';
      }
    };
    moveLeft () {
      if (this._field[this._playerRow][this._playerColumn - 1] === '^') {
        this._error = 'Congrats you won <:D ';
      } if (this._field[this._playerRow][this._playerColumn - 1] === 'O') {
        this._error = 'Game over, you fell into a hole :c ';
      } else if (this._playerColumn > 0) {
        this._field[this._playerRow][this._playerColumn - 1] = '*';
        this._playerColumn --;
      } else {
        this._error = 'You have gone off track :c ';
      }  
    };
    startGame () {
      this.printField()
      while (this._error === '') {
        const way = prompt('Witch way? ')
        if (way === 'l') {
          this.moveLeft();
          this.printField();
          } else if (way === 'r') {
            this.moveRight();
            myField.printField();
          } else if (way === 'd') {
            this.moveDown();
            this.printField();
          } else if (way === 'u') {
            this.moveUp();
            this.printField();
          } else {
           console.log('Please give correct direction');
        } 
      } if (this._error !== '') {
        console.log(this._error)
    }
  }
 }

const myField = new Field([
    ['O', '░', 'O', 'O', 'O', 'O', '░', 'O', '░', '░', 'O', '░', 'O', '░', 'O', '░', 'O', 'O'],
    ['░', 'O', '░', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', '░', '░', '░', 'O', '░', '░'],
    ['O', '░', '░', 'O', 'O', '░', '░', 'O', 'O', '░', 'O', '░', 'O', '░', 'O', '░', 'O', 'O'],
    ['O', '░', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░'],
    ['O', '*', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░'],
    ['░', '░', '░', 'O', '░', '░', '░', 'O', 'O', '░', '░', '░', 'O', '░', '░', '░', '░', 'O'],
    ['░', 'O', '░', 'O', '░', 'O', '░', 'O', 'O', '░', '░', 'O', '░', '░', '░', '^', 'O', '░'],
    ['░', 'O', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', '░', '░', 'O'],
    ['O', '░', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░'],
]);
  

//node main.js

const answ = prompt('Do you want to play ?')
if (answ === 'yes') {
  myField.startGame()
} else {
  console.log ('ohh, say: yes')
}

