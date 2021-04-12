// ------------------------------------------------------------------------------
// name: isIPURL.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:14
// ------------------------------------------------------------------------------

import { isIPURL } from '@mudas/validate';

describe('isIPURL test:', () => {
  it('isIPURL("http://127.0.0.1/path") must be truthy', () => {
    expect(isIPURL('http://127.0.0.1/path')).toBeTruthy();
  });

  it('isIPURL("ftp://200.0.0.1/path") must be truthy', () => {
    expect(isIPURL('ftp://200.0.0.1/path')).toBeTruthy();
  });

  it('isIPURL("//172.16.8.6/path") must be truthy', () => {
    expect(isIPURL('//172.16.8.6/path')).toBeTruthy();
  });

  it('isIPURL("http://www.xxx.com") must be falsy', () => {
    expect(isIPURL('http://www.xxx.com')).toBeFalsy();
  });
});
