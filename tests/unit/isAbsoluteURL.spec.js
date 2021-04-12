// ------------------------------------------------------------------------------
// name: isAbsoluteURL.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:14
// ------------------------------------------------------------------------------

import { isAbsoluteURL } from '@mudas/validate';

describe('isAbsoluteURL test:', () => {
  it('isAbsoluteURL("http://www.xxx.com") must be truthy', () => {
    expect(isAbsoluteURL('http://www.xxx.com')).toBeTruthy();
  });

  it('isAbsoluteURL("ftp://200.0.0.1/xxx") must be truthy', () => {
    expect(isAbsoluteURL('ftp://200.0.0.1/xxx')).toBeTruthy();
  });

  it('isAbsoluteURL("//xxx.com/path") must be truthy', () => {
    expect(isAbsoluteURL('//xxx.com/path')).toBeTruthy();
  });

  it('isAbsoluteURL("/upload/xxx.jpg") must be falsy', () => {
    expect(isAbsoluteURL('/upload/xxx.jpg')).toBeFalsy();
  });
});
