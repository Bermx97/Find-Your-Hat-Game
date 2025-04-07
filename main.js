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
      try {
        if (this._field[this._playerRow - 1][this._playerColumn] === '^') {
          this._error = 'Congrats you won <:D ';
        } else if (this._field[this._playerRow - 1][this._playerColumn] === 'O') {
          this._error = 'Game over, you fell into a hole :c ';
        } else if (this._playerRow > 0) {
          this._field[this._playerRow - 1][this._playerColumn] = '*';
          this._playerRow --;
        }
      }
      catch(error) {
        this._error = 'You have gone off track :c ';
      };
    };
    moveDown () { 
      try {
        if (this._field[this._playerRow + 1][this._playerColumn] === '^') {
          this._error = 'Congrats you won <:D ';
        } else if (this._field[this._playerRow + 1][this._playerColumn] === 'O') {
          this._error = 'Game over, you fell into a hole :c ';
        } else if (this._playerRow < this._field.length - 1) {
          this._field[this._playerRow + 1][this._playerColumn] = '*';
          this._playerRow ++;
        }
      }
        catch(error) {
          this._error = 'You have gone off track :c ';
      };
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
      while (this._error === '') {
        this.printField();
        const way = prompt('Which way? ');
        if (way === 'l') {
          this.moveLeft();
          } else if (way === 'r') {
            this.moveRight();
          } else if (way === 'd') {
            this.moveDown();
          } else if (way === 'u') {
            this.moveUp();
          } else if (way === 'end') {
            this._error = 'Game Over';
          } else {
            console.log('Please give correct direction');
        } 
      } if (this._error !== '') {
        console.log(this._error);
    }
  };
   randomField (height, width, perc) {
    let field = [

]
//makes row with random character, you can change the percentage of holes thanks this
  const randomArr = (width, perc) => {
    let arr = [];
    while (arr.length < width) {
        let percent = Math.floor(Math.random() * 100);
        if(percent <= perc) {
            arr.push('O');
        } else { 
            arr.push('░');
        }
       } return arr;
}; // makes columns with random rows
   while (field.length !== height) {
        field.push(randomArr(width, perc));
  } field[0][0] = '*';
    field[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = '^';
    this._field = field;

  };
};


const myField = new Field([]);
  
myField.randomField(5, 23, 33)

const answ = prompt('Do you want to play ?');
if (answ === 'yes') {
  myField.startGame();
} else {
  console.log ('ohh, just say: yes');
};

