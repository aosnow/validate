// ------------------------------------------------------------------------------
// name: isPhone.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:13
// ------------------------------------------------------------------------------

import { isPhone } from '@mudas/validate';

describe('isPhone test:', () => {
  it('isPhone("15258829831") must be truthy', () => {
    expect(isPhone('15258829831')).toBeTruthy();
  });

  it('isPhone("12258829831") must be falsy', () => {
    expect(isPhone('12258829831')).toBeFalsy();
  });

  it('isPhone("021-42531245") must be falsy', () => {
    expect(isPhone('021-42531245')).toBeFalsy();
  });
});
