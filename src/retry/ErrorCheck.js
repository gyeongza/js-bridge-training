const { Console } = require("@woowacourse/mission-utils");

const ErrorCheck = {
  hasCorrectSize(size) {
    const number = this.hasNumber(size);
    const range = this.hasInRange(size);
    const incorrectSize = number || range;
    return incorrectSize;
  },

  hasNumber(size) {
    const notNumber = isNaN(size);
    try {
      if (notNumber) throw new Error("[ERROR] 숫자만 입력해 주세요.");
    } catch (error) {
      Console.print(error.message);
    }
    return notNumber;
  },

  hasInRange(size) {
    const notInRange = size < 3 || size > 20;
    try {
      if (notInRange)
        throw new Error("[ERROR] 3 이상 20 이하만 입력해 주세요.");
    } catch (error) {
      Console.print(error.message);
    }
    return notInRange;
  },
};

module.exports = ErrorCheck;
