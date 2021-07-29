import React, { useEffect } from "react";
import { IFormValues } from "../../types";

interface IInput {
  name: string;
  setFormValue: Function;
  FormValue: IFormValues | undefined;
  label: string;
  helpText?: string;
}

const Input: React.FC<IInput> = (props) => {
  const [currValue, setCurrValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent) => {
    let inputEl = e.target as HTMLInputElement;
    setCurrValue(inputEl.value);
  };

  useEffect(() => {
    if (
      props.FormValue?.address == undefined &&
      props.FormValue?.firstName == undefined &&
      props.FormValue?.lastName == undefined
    ) {
      setCurrValue("");
    }
  }, [props.FormValue]);

  useEffect(() => {
    currValue.length > 0 &&
      props.setFormValue({ ...props.FormValue, [props.name]: currValue });
  }, [currValue]);

  return (
    <>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">{props.label}</label>
        <input
          type="text"
          className="form-control"
          aria-describedby={`${props.name}Help`}
          value={currValue}
          onChange={handleChange}
        />
        <small id={`${props.name}Help`} className="form-text text-muted">
          {props.helpText}
        </small>
      </div>
    </>
  );
};

export default Input;
