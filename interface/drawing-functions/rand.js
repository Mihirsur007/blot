let jsr = 69;

export function rand() {
  var x = Math.sin(jsr++) * 10000;
  return x - Math.floor(x);
}

export function setRandSeed(number) {
  jsr = number;
}

export function randInRange(min, max) {
  return rand() * (max - min) + min;
}

export function randIntInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(rand() * (max - min + 1) + min);
}