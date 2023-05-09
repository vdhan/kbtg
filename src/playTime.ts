function toMinute(A: string): number {
  let a: string[] = A.split(':');
  return parseInt(a[0]) * 60 + parseInt(a[1]);
}

function solution(A: string, B: string): number {
  let a: number = toMinute(A);
  let b: number = toMinute(B);
  let ta: string[] = A.split(':');
  let ma: number = parseInt(ta[1]);
  let offset: number = ma % 15 == 0 ? 0 : (15 - ma % 15);
  let total: number = 0;
  if (b > a) {
    total = b - a - offset;
  } else if (b < a) {
    total = 1440 - a + b - offset;
  }

  return Math.floor(total / 15);
}

export { solution };
