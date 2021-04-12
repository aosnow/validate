// ------------------------------------------------------------------------------
// name: isEmail.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:12
// ------------------------------------------------------------------------------

import { isEmail } from '@mudas/validate';

describe('isEmail test:', () => {
  it('isEmail("aosnow@good.net") must be truthy', () => {
    expect(isEmail('aosnow@good.net')).toBeTruthy();
  });

  it('isEmail("aosnow@good.com.cn") must be truthy', () => {
    expect(isEmail('aosnow@good.com.cn')).toBeTruthy();
  });

  it('isEmail("aosnow@good.公司") must be truthy', () => {
    expect(isEmail('aosnow@good.公司')).toBeTruthy();
  });

  it('isEmail("aosnow@yeah") must be falsy', () => {
    expect(isEmail('aosnow@yeah')).toBeFalsy();
  });
});
