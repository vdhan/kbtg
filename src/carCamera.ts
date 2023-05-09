function solution(S: string): number {
  let cars: string[] = [];
  let cameras: string[] = [];
  let count: number = 0;
  for (let char of S) {
    if (char == '>') {
      cars.push(char);
    } else if (char == '<') {
      count += cameras.length;
    } else {
      count += cars.length;
      cameras.push('.');
    }
  }

  return count;
}

export { solution };
