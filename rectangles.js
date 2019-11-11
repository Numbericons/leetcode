var rectangleArea = function (rectangles) {
  let total = 0;
  let subTri = {};
  for (let i = 0; i < rectangles.length; i++) {
    for (let j = rectangles[i][0]; j < rectangles[i][2]; j++) {
      for (let k = rectangles[i][1]; k < rectangles[i][3]; k++) {
        if (!subTri[`${j},${k},${j+1},${k+1}`]) {
          subTri[`${j},${k},${j + 1},${k + 1}`] = true;
          total+=1;
        }
      }
    }
  }
  return total;
};

// let result = rectangleArea([[0, 0, 2, 2], [1, 0, 2, 3], [1, 0, 3, 1]]);
let result = rectangleArea([[0, 0, 1000, 1000]]);
console.log(result);