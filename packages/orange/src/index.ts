import { printMe, add } from '@tpham0/apple';

export function callMe(message: string) {
  console.log(printMe(message));
}

export function sum(list: number[]) {
  return list.reduce((a, c) => add(a, c), 0);
}

export function log11() {
  console.log('hello world');
}

export function log21() {
  console.log('log213222');
}

export function log221() {
  console.log('lssog21322');
}

export function log2s21() {
  console.log('l222222s');
}
