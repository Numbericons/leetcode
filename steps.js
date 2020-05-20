  var numberOfSteps = function (num) {
    if (num < 2) return 1;
    return num % 2 === 0 ? 1 + numberOfSteps(num / 2) : 1 + numberOfSteps(num - 1);
  };

numberOfSteps(123);