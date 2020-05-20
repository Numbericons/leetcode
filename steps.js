var numberOfSteps = function (num) {
  if (num < 3) return 1;
  return num % 2 === 0 ? 1 + numberOfSteps(num - 1) : 1 + numberOfSteps(num / 2);
};