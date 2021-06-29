import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";

const NeoTextarea = ({
  label,
  placeholder,
  hint,
  maxlength = 300,
  defaultValue = "",
  onChange,
}) => {
  const internalId = uuid_v4();
  const [value, updateValue] = useState(defaultValue);
  const [counter, updateCounter] = useState(defaultValue.length);

  const onChangeHandler = (value) => {
    updateValue(value);
    updateCounter(value.length);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="neo-form-control neo-form-control--textarea">
      <div className="neo-input-group">
        {label ? <label for={internalId}>{label}</label> : null}

        <textarea
          id={internalId}
          className="neo-input"
          placeholder={placeholder}
          type="text"
          aria-describedby={hint}
          maxLength={maxlength}
          defaultValue={value}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
      <div className="neo-input-textarea__helper">
        {hint ? <div className="neo-input-hint">{hint}</div> : null}
        <div className="neo-input-textarea__counter">{`${counter}/${maxlength}`}</div>
      </div>
    </div>
  );
};
export default NeoTextarea;
