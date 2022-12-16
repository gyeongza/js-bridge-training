const { Console } = require("@woowacourse/mission-utils");
const ErrorCheck = require("./ErrorCheck");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.", (size) => {
      if (ErrorCheck.hasCorrectSize(size)) return this.readBridgeSize(bridgeGame)
      bridgeGame.ready(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
