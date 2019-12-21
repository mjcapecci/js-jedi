const crypto = require('crypto');

export default function randomInt(lowerBound, upperBound) {
  return Math.trunc(
    (parseInt(crypto.randomBytes(4).toString('hex'), 16) / Math.pow(2, 32)) *
      (upperBound - lowerBound) +
      lowerBound
  );
}
