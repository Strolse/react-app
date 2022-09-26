import { classNames } from './classNames';

describe('classNames', () => {
  test('with the first argument', () => {
    expect(classNames('current')).toBe('current');
  });

  test('with the additional argument', () => {
    const expected = 'current class1 class2';
    expect(classNames(
      'current',
      {},
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('with the true mods', () => {
    const expected = 'current class1 class2 red hovered';
    expect(classNames(
      'current',
      { red: true, hovered: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('with false mod', () => {
    const expected = 'current class1 class2 red';
    expect(classNames(
      'current',
      { red: true, hovered: false },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('with undefined mod', () => {
    const expected = 'current class1 class2 red';
    expect(classNames(
      'current',
      { red: true, hovered: undefined },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
});
