import 'mocha';
import { expect } from 'chai';
// @ts-ignore
import { solution as carCamera } from '../src/carCamera.ts';
// @ts-ignore
import { solution as playTime } from '../src/playTime.ts';
// @ts-ignore
import { solution as remove5 } from '../src/remove5.ts';

describe('Test suite:', () => {
  it('Car Camera', () => {
    expect(carCamera('.>...')).to.eq(3);
    expect(carCamera('.>.<.>')).to.eq(4);
    expect(carCamera('>>>.<<<')).to.eq(6);
  });

  it('Play Time', () => {
    expect(playTime('12:01', '12:44')).to.eq(1);
    expect(playTime('20:00', '06:00')).to.eq(40);
    expect(playTime('00:00', '23:59')).to.eq(95);
    expect(playTime('12:03', '12:03')).to.eq(0);
    expect(playTime('01:01', '01:29')).to.eq(0);
  });

  it('Remove 5', () => {
    expect(remove5(15958)).to.eq(1958);
    expect(remove5(-5859)).to.eq(-589);
    expect(remove5(-5000)).to.eq(0);
  });
});
