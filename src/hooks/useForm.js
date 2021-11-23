import { useState, useEffect } from "react";
import {
  checkAtLeastLength,
  checkZipcodePattern,
  checkPhonePattern,
  checkIpAddressPattern,
  checkIsfilled,
  checkIsTrue,
  checkEmailPattern,
  checkOnlyNumberPattern,
} from "../common/services/inputValidators";
import moment from "moment";
// import { useDispatch, useSelector } from 'react-redux';

const useForm = (initModel, submitCallback, rowData, setRowData) => {
  const [inputs, setInputs] = useState(initModel);
  useEffect(() => {
    setInputs(initModel);
  }, [initModel]);
  const handleChange = (e, newValue, flag = false) => {
    inputs?.forEach((i) => {
      if (i.name === "Job" && newValue && flag) {
        i.value = newValue?._id;
        parseInput(i);
        console.log("2");
      } else if (i.name === e?.target?.name) {
        i.value = e.target.value;
        console.log(i.name, i.value);
        parseInput(i);
        i?.label?.includes("*") && validateInput(i);
      }
    });
    setInputs([...inputs]);
  };

  const handleDateChange = (name, date) => {
    let Date = moment.utc(date).format();
    let temp = rowData;
    temp[name] = Date;
    setRowData({ ...rowData, temp });
    inputs?.forEach((i) => {
      if (i.name === name) {
        if (i.type === "date") {
          i.value = Date;
          parseInput(i);
          validateInput(i);
        }
      }
    });
    setInputs([...inputs]);
  };
  const handleEditChange = (e) => {
    console.log(e.target.name, rowData, 'ooiuig');
    let temp = rowData;
    temp[e.target.name] = e.target.value;
    setRowData({ ...rowData, temp });
    inputs.forEach((i) => {
      if (i.name === e.target.name) {
        i.value = e.target.value;
        parseInput(i);
        i?.label?.includes("*") && validateInput(i);
      }
    });
    setInputs([...inputs]);
  };

  const handleSubmit = (nextClick) => {
    let filteredInputs;
    filteredInputs = inputs?.filter((input) => input.label.includes('*'));
        
        filteredInputs.forEach((i) => validateInput(i));
    // inputs.forEach((i) => validateInput(i));
    inputs?.some((i) => i.alert)
      ? setInputs([...inputs])
      : submitCallback(nextClick);
  };

  const parseInput = (input) =>
    (input.value = input.parseFun ? input.parseFun(input.value) : input.value);
  const isValidFun = (expression) => checkAtLeastLength(expression, 0);

  console.log(inputs);
  const validateInput = (input) => {
    let alert = null;

    input?.validators.forEach((v) => {
      if (v.valId === "SCVAL001") {
        alert = !isValidFun(input.value) ? v.alert : alert;
      }

      // if (v.valId === "SC-VA-006") {
      //   alert = !checkEmailPattern(input.value) ? v.errorMessage : alert;
      // }
      // if (v.valId === "SC-VA-010") {
      //   alert = !checkIsfilled(input.value) ? v.errorMessage : alert;
      // }
    });
    input.alert = alert;
  };
  const resetFormData = () => {
    inputs?.forEach((input) => {
      input.value = "";
      input.alert = "";
    });
  };

  return [
    inputs,
    handleChange,
    handleEditChange,
    handleSubmit,
    resetFormData,
    handleDateChange,
  ];
};

export default useForm;
