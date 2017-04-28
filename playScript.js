const Game = require('towers.js'); // how does require work?
const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function completion(){
  reader.question("Do you want to play again?", (response) => {
    if (response === "yes") {
      const game = new Game();
      game.run();
    }else{
      console.log("Thanks for playing!")
      reader.close();
    }
  });

}

const game = new Game();
game.run(completion);
