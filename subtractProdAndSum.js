var subtractProductAndSum = function (n) {
  const nStr = n.toString();
  let prod = 1;
  let sum = 0;
  for (let i=0;i<nStr.length;i++) {
    prod *= parseInt(nStr[i]);
    sum += parseInt(nStr[i]);
  }
  return prod - sum;
};

