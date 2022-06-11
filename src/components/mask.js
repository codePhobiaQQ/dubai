import { DEFAULT_MASK_RULES  } from 'react-hook-mask';

const maskPhoneGenerator = {
  rules: DEFAULT_MASK_RULES,
  generateMask: (value) =>
    (value?.replaceAll('-', '').length ?? 0) <= 13
      ? '9-(999)-999-99-99'
      : '9-(999)-999-999-999',
};

const maskCVVGenerator = {
  rules: DEFAULT_MASK_RULES,
  generateMask: (value) => "999",
};
const maskExpritationGenerator = {
  rules: DEFAULT_MASK_RULES,
  generateMask: (value) => "99/99",
};

export const maskHandler = (name) => {
  if (name == "Phone") return maskPhoneGenerator
  else if (name == "CVV") return maskCVVGenerator
  else if (name == "Expiration") return maskExpritationGenerator
  return null
}
