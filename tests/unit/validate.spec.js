// ------------------------------------------------------------------------------
// name: validate.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:14
// ------------------------------------------------------------------------------

import { validate, Telephone, Phone } from '@mudas/validate';

describe('validate() test:', () => {
  it('validate(\'15258878312\', Telephone, Phone) must be falsy', () => {
    expect(validate('15258878312', Telephone, Phone)).toBeFalsy();
  });

  it('validate(\'15258878312\', Telephone, Phone, false) must be truthy', () => {
    expect(validate('15258878312', Telephone, Phone, false)).toBeTruthy();
  });
});
