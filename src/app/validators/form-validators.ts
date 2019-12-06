import { REGEX } from './regex';
import { AbstractControl } from '@angular/forms';

export const FORM_VALIDATOR = {
  onlyNumberAndLetter: (control: AbstractControl) => {
    if (!control || !control.parent) {
      return null;
    }
    if (control.value && !REGEX.onlyNumberAndLetter.test(control.value)) {
      control.setValue(control.value.replace(REGEX.exceptNumberAndLetter, ''));
    }
  },
  hashtag: {
    maxLength: 256,
    patternRegex: REGEX.onlyNumberAndLetter
  },
  searchGlobal: {
    maxLength: 256
  },
  phoneNumber: {
    maxLength: 16,
    patternRegex: REGEX.onlyNumber
  },
  houseName: {
    maxLength: 80
  },
  name: {
    maxLength: 256
  },
  firstName: {
    maxLength: 128
  },
  lastName: {
    maxLength: 128
  },
  email: {
    maxLength: 254
  },
  password: {
    minLength: 8,
    maxLength: 256
  },
  line: {
    maxLength: 500
  },
  note: {
    maxLength: 1000
  },
  searchText: {
    maxLength: 256
  },
  guestNumber: {
    min: 1,
    max: 10000
  },
  price: {
    min: 0,
    max: 999999999, // 999, 999, 999
  },
  acreage: {
    max: 10000,
    min: 0,
    defaultValue: 0
  },
  capacity: {
    max: 10000,
    min: 1,
    defaultValue: 1
  },
  houseFee: {
    max: 999999999, // 999, 999, 999
    min: 0,
    defaultValue: ''
  },
  electricFee: {
    max: 999999999, // 999, 999, 999
    min: 0,
    defaultValue: 3000
  },
  electricNum: {
    max: 100000, // 100,000
    min: 0,
    defaultValue: 0
  },
  waterFee: {
    max: 999999999, // 999, 999, 999
    min: 0,
    defaultValue: 4500
  },
  waterNum: {
    max: 100000, // 100,000
    min: 0,
    defaultValue: 0
  },
  locationDescription: {
    maxLength: 500,
    minLength: 1
  },
  description: {
    maxLength: 1000,
    minLength: 0
  },
  policies: {
    maxLength: 1000,
    minLength: 0
  },
  editor: {
    removeHTMLTagRegex: /<\/?[^>]+(>|$)/g // Remove HTML tag Regex
  },
  amount: {
    max: 100000, // 100,000
    min: 1,
    defaultValue: 1
  }
};

export const FILE_VALIDATION = 'image/png, image/gif, image/jpeg, image/webp';

export const FILE_SIZE = 2000000;
