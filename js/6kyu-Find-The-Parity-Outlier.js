function findOutlier(integers) {
  const evenArray = integers.filter((int) => int % 2 === 0);
  if (evenArray.length === 1) return evenArray[0];
  return integers.filter((int) => int % 2 !== 0)[0];
}
