// ------------------------------------------------------------------------------
// name: isInternationalPhone.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:13
// ------------------------------------------------------------------------------

import { isInternationalPhone } from '@mudas/validate';

describe('isInternationalPhone test:', () => {
  it('isInternationalPhone("+8615258893175") must be truthy', () => {
    expect(isInternationalPhone('+8615258893175')).toBeTruthy();
  });

  it('isInternationalPhone("008615258893175") must be truthy', () => {
    expect(isInternationalPhone('008615258893175')).toBeTruthy();
  });

  it('isInternationalPhone("0018002006454") must be truthy', () => {
    expect(isInternationalPhone('0018002006454')).toBeTruthy();
  });

  it('isInternationalPhone("+81792379925") must be truthy', () => {
    expect(isInternationalPhone('+81792379925')).toBeTruthy();
  });
});
