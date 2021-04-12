// ------------------------------------------------------------------------------
// name: isCnName.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:13
// ------------------------------------------------------------------------------

import { isCnName } from '@mudas/validate';

describe('isCnName test:', () => {
  it('isCnName("我是中国人") must be truthy', () => {
    expect(isCnName('我是中国人')).toBeTruthy();
  });

  it('isCnName("我要1个中国人") must be falsy', () => {
    expect(isCnName('我要1个中国人')).toBeFalsy();
  });
});
