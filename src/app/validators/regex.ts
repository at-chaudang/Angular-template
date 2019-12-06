// tslint:disable-next-line: max-line-length
const VIET_KEY = 'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ';

const SPECIAL_CHARACTER = '!@#\$%\^&\*_\-=\+\(\)';

// (?=.*[a-z]): Use positive look ahead to see if at least one lower case letter exists
// (?=.*[A-Z]): Use positive look ahead to see if at least one upper case letter exists
// (?=.*\d): Use positive look ahead to see if at least one digit exists
// (?=.*\W]): Use positive look ahead to see if at least one non-word character exists
const PASSWORD = /[\s\S]/g;

export const REGEX = {
  onlyNumber: /^[0-9]*$/,
  onlyNumberAndLetter: /^[a-zA-Z0-9]*$/,
  withoutSpecialCharacter: `^[^${SPECIAL_CHARACTER}]*$`,
  specialCharacter: /[^\w\s]/gi,
  matchVietkey: `^[a-z0-9A-Z-. ${VIET_KEY}]*$`,
  exceptNumberAndLetter: /[^a-zA-Z0-9]/g,
  password: PASSWORD,
  emoji: new RegExp(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)
};
