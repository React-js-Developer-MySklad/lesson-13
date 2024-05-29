import { normalizePhoneImperative, normalizePhone, normalizePhoneImperativeV2 } from './string-normalizer';


describe('string normalizer', () => {
  // suite
  describe('declarative', () => {
    // test case
    it('should return the same phone numbers', () => {
      expect(normalizePhone('12345')).toBe('12345');
    });

    it('should return numbers without minus', () => {
      expect(normalizePhone('-1ajdshdsf2-3--45---')).toBe('12345');
    });
  });

  describe('imperative', () => {
    it('should return the same numbers', () => {
      expect(normalizePhoneImperative('12345')).toBe('12345');
    });

    it('should return numbers without minus', () => {
      expect(normalizePhoneImperative('-12-3--45---')).toBe('12345');
    });
  });

  describe('imperative v2', () => {
    it('should return the same numbers', () => {
      expect(normalizePhoneImperativeV2('12345')).toBe('12345');
    });

    it('should return numbers without minus', () => {
      expect(normalizePhoneImperativeV2('-12-3--45---')).toBe('12345');
    });
  });
});

describe.skip('email normalizer', () => {});
