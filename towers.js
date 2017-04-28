const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(){
    this.stacks = [[1,2,3], [], []];
  }
  promptMove(callback){
    console.log(this.stacks);
    reader.question("Where do you want to move a disc from --> to?", (response) => {
      let startTowerIdx, endTowerIdx;
      [startTowerIdx, endTowerIdx] = response.split(',');
      startTowerIdx = parseInt(startTowerIdx);
      endTowerIdx = parseInt(endTowerIdx);
      this.move(startTowerIdx, endTowerIdx);
      return this.run(callback);
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    // first el in endTowerIdx must be greater than first el in startTowerIdx
    return !this.stacks[endTowerIdx].length || this.stacks[endTowerIdx][0] > this.stacks[startTowerIdx][0];
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)){
      let move_el = this.stacks[startTowerIdx].shift();
      this.stacks[endTowerIdx].unshift(move_el);
      return true;
    } else {
      console.log("You screwed up buddy");
      return  false;
    }
  }

  print() {
    console.log(JSON.stringify(this.stacks));
  }

  isWon() {
    return this.stacks[1].length === 3 || this.stacks[2].length === 3;
  }

  run(completionCallBack){
    if (this.isWon()) {
      reader.close();
      completionCallBack();
    } else {
      this.promptMove(completionCallBack);
    }
  }

    //successfulMove = promptMove(this.move)
  //   if (!this.promptMove(this.move)){
  //     ;
  //   }
  //   if (this.isWon()) {
  //     console.log("You won!");
  //     completionCallBack();
  //   } else {
  //     this.run(completionCallBack);
  //   }
  // }
}

// const game = new Game();
//
// game.run(()=> console.log("Game over."));
module.exports = Game;
