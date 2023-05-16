function solution(S: string): number {
  let cars: number = 0;
  let cameras: number = 0;
  let count: number = 0;
  for (let char of S) {
    if (char == '>') {
      cars += 1;
    } else if (char == '<') {
      count += cameras;
    } else {
      count += cars;
      cameras += 1;
    }
  }

  return count;
}

export { solution };
