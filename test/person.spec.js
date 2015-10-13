import {Person} from '../src/person';

describe('person', () => {
  it('should be ok', () => {

let p = new Person('asi','farran');

    expect(p.fullName()).toBe('asi farran');
  });
});
