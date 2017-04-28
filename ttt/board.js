class Board {
  constructor() {
    // this.grid = [[ , , , ],[ , , , ],[ , , , ]];
    this.grid = [[],[],[]];
  }

  won() {
    (this.columns().concat(this.diagonals()).concat(this.rows())).some((arr) =>{
      arr.every((el) => el === arr[0]) && arr[0] !== undefined;
    });
  }

  columns() {
    let res = [[],[],[]];
    this.grid.forEach(row => {
      row.forEach((pos, index) => {
        res[index].push(pos);
      });
    });
    return res;
  }

  diagonals() {
    //screw you david
  }


}
