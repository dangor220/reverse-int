module.exports = function reverse (n) {
  if (n < 0) {
    n = n * -1;
  }
  let reverseNum = n.toString().split('');
  return reverseNum.reverse().join('');
}
