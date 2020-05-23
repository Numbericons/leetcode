var subtractProductAndSum = function (n) {
  const nStr = n.toString();
  return nStr.split('').reduce((a,b) => parseInt(a) * parseInt(b)) -  nStr.split('').reduce((a, b) => parseInt(a) + parseInt(b));
};

  // for (let i=0;i<nStr.length;i++) {
  //   prod *= parseInt(nStr[i]);
  //   sum += parseInt(nStr[i]);
  // }
  // return prod - sum;

