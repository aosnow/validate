// ------------------------------------------------------------------------------
// name: isRelativeURL.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:14
// ------------------------------------------------------------------------------

import { isRelativeURL } from '@mudas/validate';

describe('isRelativeURL test:', () => {
  it('isRelativeURL("a/b/c/i.html") must be truthy', () => {
    expect(isRelativeURL('a/b/c/i.html')).toBeTruthy();
  });

  it('isRelativeURL("a/b/c/q?k=123") must be truthy', () => {
    expect(isRelativeURL('a/b/c/q?k=123')).toBeTruthy();
  });

  it('isRelativeURL("../a/b/c") must be truthy', () => {
    expect(isRelativeURL('../a/b/c')).toBeTruthy();
  });

  it('isRelativeURL("//a.com/b/c") must be falsy', () => {
    expect(isRelativeURL('//a.com/b/c')).toBeFalsy();
  });
});
