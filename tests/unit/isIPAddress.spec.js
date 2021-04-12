// ------------------------------------------------------------------------------
// name: isIPAddress.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:14
// ------------------------------------------------------------------------------

import { isIPAddress } from '@mudas/validate';

describe('isIPAddress test:', () => {
  it('isIPAddress("127.0.0.1") must be truthy', () => {
    expect(isIPAddress('127.0.0.1')).toBeTruthy();
  });

  it('isIPAddress("192.168.1.1") must be truthy', () => {
    expect(isIPAddress('192.168.1.1')).toBeTruthy();
  });

  it('isIPAddress("0.0.0.0") must be truthy', () => {
    expect(isIPAddress('0.0.0.0')).toBeTruthy();
  });

  it('isIPAddress("0.0.0.256") must be falsy', () => {
    expect(isIPAddress('0.0.0.256')).toBeFalsy();
  });
});
