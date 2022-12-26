import { useReducer } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE": {
      return {
        ...state,
        inputValue: action.value,
      };
    }
    case "SET_TOUCHED_TO_TRUE": {
      return {
        ...state,
        inputTouched: true,
      };
    }
    case "SET_TOUCHED_TO_FALSE": {
      return {
        ...state,
        inputTouched: false,
      };
    }
    default: {
      return state;
    }
  }
};

const useInput = (defaultInputValue, validator, passwordInputValue) => {
  // const [inputValue, setInputValue] = useState(defaultInputValue);
  // const [inputTouched, setInputTouched] = useState(false);
  const initialInputReducerValue = {
    inputValue: defaultInputValue,
    inputTouched: false,
  };
  const [inputUsage, dispatchToInputUsage] = useReducer(
    inputReducer,
    initialInputReducerValue
  );

  const errorMessage = validator(inputUsage.inputValue, passwordInputValue)
  const isInputValid = !errorMessage;
  const hasError = !isInputValid && inputUsage.inputTouched;

  const handleOnInputChange = (e) => {
    const value = e.target.value;
    // setInputValue(value);
    dispatchToInputUsage({
      type: "SET_VALUE",
      value,
    });
  };

  const handleOnInputBlur = () => {
    // setInputTouched(true);
    dispatchToInputUsage({
      type: "SET_TOUCHED_TO_TRUE",
    });
  };

  const reset = () => {
    // setInputValue('');
    dispatchToInputUsage({
      type: "SET_VALUE",
      value: "",
    });
    // setInputTouched(false);
    dispatchToInputUsage({
      type: "SET_TOUCHED_TO_FALSE",
    });
  };

  return {
    inputValue: inputUsage.inputValue,
    inputTouched: inputUsage.inputTouched,
    dispatchToInputUsage,
    handleOnInputBlur,
    handleOnInputChange,
    isInputValid,
    hasError,
    errorMessage,
    reset,
  };
};

export default useInput;
