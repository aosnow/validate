// ------------------------------------------------------------------------------
// name: isUserName.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:10
// ------------------------------------------------------------------------------

import { isUserName } from '@mudas/validate';

describe('isUserName test:', () => {
  it('isUserName("ao_snow88") must be truthy', () => {
    expect(isUserName('ao_snow88')).toBeTruthy();
  });

  it('isUserName("_aosnow") must be falsy', () => {
    expect(isUserName('_aosnow')).toBeFalsy();
  });
});
