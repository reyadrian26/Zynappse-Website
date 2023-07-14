function SetValue (key, value, actionType) {
  if (arguments.length === 3) {
    return {
      type: actionType.toUpperCase(),
      payload: {
        [key]: value
      }
    };
  } else if (arguments.length === 2 && typeof key === "object") {
    return {
      type: arguments[1].toUpperCase(),
      payload: key
    }
  } else {
    throw new Error("SetValue() only accept arguments as follow SetValue(key, value, actionType) or SetValue({key: value}, actionType)");
  }
};

module.exports = SetValue;
