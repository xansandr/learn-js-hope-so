let Calculator = {
  status: false,
  expression: "",
  history: [],
  on: function () {
    this.status = true;
    return "Калькулятор включен";
  },
  off: function () {
    this.status = false;
    return "Калькулятор выключен";
  },
  solve: function (string) {
    if (this.status === true) {
      string = string.toString();
      arr = string.match(/^(\d+).?([*+\/\-]).?(\d+)$/);
      if (arr[2] === "*") {
        result = +arr[1] * +arr[3];
      }
      if (arr[2] === "+") {
        result = +arr[1] + +arr[3];
      }
      if (arr[2] === "/") {
        result = +arr[1] / +arr[3];
      }
      if (arr[2] === "-") {
        result = +arr[1] - +arr[3];
      }
      expression = arr[1] + arr[2] + arr[3] + "=" + result;
      this.expression = expression;
      this.history.push(expression);
      return this.expression;
    } else {
      return "Включите калькулятор";
    }
  },
};
