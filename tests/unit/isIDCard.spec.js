// ------------------------------------------------------------------------------
// name: isIDCard.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:12
// ------------------------------------------------------------------------------

import { isIDCard } from '@mudas/validate';

describe('isIDCard test:', () => {
  it('isIDCard("522425198109113949") must be truthy', () => {
    expect(isIDCard('522425198109113949')).toBeTruthy();
  });

  it('isIDCard("14082519750817363x") must be truthy', () => {
    expect(isIDCard('14082519750817363x')).toBeTruthy();
  });

  it('isIDCard("14082519750817363X") must be truthy', () => {
    expect(isIDCard('14082519750817363X')).toBeTruthy();
  });

  it('isIDCard("130928198905281") must be truthy', () => {
    expect(isIDCard('130928198905281')).toBeTruthy();
  });
});
