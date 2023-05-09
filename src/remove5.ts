function solution(N: number): number {
  let n: string = N.toString();
  let positive: boolean = N > 0;
  let last: number = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] == '5') {
      last = i;
      if (i < n.length - 2) {
        if ((positive && n[i] < n[i + 1]) || (!positive && n[i] > n[i + 1])) {
          return parseInt(n.slice(0, last) + n.slice(last + 1));
        }
      }
    }
  }

  return parseInt(n.slice(0, last) + n.slice(last + 1));
}

export { solution };
