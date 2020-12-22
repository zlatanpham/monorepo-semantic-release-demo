import { printMe, add, log5 } from '@tpham0/apple';

export function callMe(message: string) {
  console.log(printMe(message));
}

export function sum(list: number[]) {
  return list.reduce((a, c) => add(a, c), 0);
}

export function log6() {
  console.log('log6');
}

export function log7() {
  console.log('log64');
}

export function log8() {
  console.log('log6');
}

export function log10() {
  log5('log10');
}

export function log11() {
  log5('log10');
}
