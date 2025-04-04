# My project is interactive terminal game. 
## The scenario is that the player has lost their hat  '^'  in a field full of holes  'O'  , and they must navigate back to it without falling down one of the holes or stepping outside of the field.
You need node.js

If you want to start you need to type into the terminal: **'node main.js'**

And answer **'yes'** to the question

### To control:
- Move left : **'l'**
- Move right: **'r'**
- Move up: **'u'**
- Move down **'d'**
- If you want end: **'end'**


### If you want to play on your field: 

- Delete **line 131** ***'myField.randomField(8, 20, 33)'***
- Put your field in the **line 129** like that:

const myField = new Field([

['*', '░', 'O', '░', 'O', '░'],

['░', 'O', '░', '░', 'O', '░'],

['░', '░', '░', '░', 'O', '░'],

['░', 'O', '░', '^', 'O', '░'],

])

**You can only use these characters!:**
- Hat = '^'
- Hole = 'O'
- FieldCharacter = '░'
- PathCharacter = '*'

### If you want random field:

- You can change **line 131** ***myField.randomField(8, 20, 33)***, it uses Class method ***'randomField (height, width, perc)'***

  - **height** is the height of the field you want

  - **width** is the width of the field you want

  - **perc** is percentage of holes in the field

- Save and restart the program

***You can change it to the values ​​you want***




### The game ends when:
- You will reach the hat *'Congratulations'*
- You will fall into a hole
- You will go out of the field

## I used:
- Node.js *v22.14.0*
- Java Script

## Sources
This project is inspired by a task from the educational platform: 

https://www.codecademy.com

Where I`m learn
