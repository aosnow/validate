// ------------------------------------------------------------------------------
// name: isRequired.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:08
// ------------------------------------------------------------------------------

import { isRequired } from '@mudas/validate';

describe('isRequired test:', () => {
  it('isRequired("") must be truthy', () => {
    expect(isRequired('')).toBeTruthy();
  });

  it('isRequired("a") must be truthy', () => {
    expect(isRequired('a')).toBeTruthy();
  });

  it('isRequired("",true) must be falsy', () => {
    expect(isRequired('', true)).toBeFalsy();
  });

  it('isRequired("a",true) must be truthy', () => {
    expect(isRequired('a', true)).toBeTruthy();
  });
});
