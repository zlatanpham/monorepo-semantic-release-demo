import { printMe, add } from '@tpham0/apple';

export function callMe(message: string) {
  console.log(printMe(message));
}

export function sum(list: number[]) {
  return list.reduce((a, c) => add(a, c), 0);
}
