var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let z = 0; z < startTime.length; z++) {
    if (startTime[z] <= queryTime && endTime[z] >= queryTime) count += 1;
  }
  return count;
};

//run a for loop
//check if start[i] is < queryTime
//check if end[i] is > queryTime