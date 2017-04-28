class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000); //is this right?
  }

  _tick () {
    this.seconds+=1;
    this.printTime();
  }

  printTime() {
    let addMinutes = Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;
    this.minutes += addMinutes;
    let addHours = Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;
    this.hours += addHours;
    this.hours = this.hours % 24;
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }


}

// const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0){
      reader.question("Input a number to sum up", function (number) {
        sum += parseInt(number);
        return addNumbers(sum, numsLeft - 1, completionCallback);
      });
    } else {
      return completionCallback(sum);
    }
}


//addNumbers(0, 3, sum=> console.log(`Total Sum: ${sum}`));



function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, (response) => {
    response === 'yes' ? callback(true) : callback(false);

  });
}

// askIfGreaterThan(5, 10, boolean => console.log(boolean));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
    }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else{
    outerBubbleSortLoop(madeAnySwaps);
  }

}
//innerBubbleSortLoop([3,2,1,5], 0, false, () => console.log("we're in outer loop"));

function absurdBubbleSort (arr, sortCompletionCallback) {
  let outerBubbleSortLoop = (madeAnySwaps) => {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };
  outerBubbleSortLoop(true);
}
//
// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function (context) {
  // context is what this is being bound to.... it's an object.
  return () => this.apply(context);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp
