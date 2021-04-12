// ------------------------------------------------------------------------------
// name: isTelephone.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:12
// ------------------------------------------------------------------------------

import { isTelephone } from '@mudas/validate';

describe('isTelephone test:', () => {
  it('isTelephone("02142531245") must be truthy', () => {
    expect(isTelephone('02142531245')).toBeTruthy();
  });

  it('isTelephone("021-42531245") must be truthy', () => {
    expect(isTelephone('021-42531245')).toBeTruthy();
  });

  it('isTelephone("0571-42531245") must be truthy', () => {
    expect(isTelephone('0571-42531245')).toBeTruthy();
  });

  it('isTelephone("0571 42531245") must be truthy', () => {
    expect(isTelephone('0571 42531245')).toBeTruthy();
  });
});
