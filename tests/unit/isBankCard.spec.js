// ------------------------------------------------------------------------------
// name: isBankCard.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:13
// ------------------------------------------------------------------------------

import { isBankCard } from '@mudas/validate';

describe('isBankCard test:', () => {
  it('isBankCard("9558801282847859321") must be truthy', () => {
    expect(isBankCard('9558801282847859321')).toBeTruthy();
  });

  it('isBankCard("5124312137817842310") must be truthy', () => {
    expect(isBankCard('5124312137817842310')).toBeTruthy();
  });
});
