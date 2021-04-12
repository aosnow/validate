// ------------------------------------------------------------------------------
// name: isNumeric.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:09
// ------------------------------------------------------------------------------

import { isNumeric } from '@mudas/validate';

describe('isNumeric test:', () => {
  it('isNumeric("3.1415926") must be truthy', () => {
    expect(isNumeric('3.1415926')).toBeTruthy();
  });

  it('isNumeric("-100") must be truthy', () => {
    expect(isNumeric('-100')).toBeTruthy();
  });

  it('isNumeric("-1.25") must be truthy', () => {
    expect(isNumeric('-1.25')).toBeTruthy();
  });
});
