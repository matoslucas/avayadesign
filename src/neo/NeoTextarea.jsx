import { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

const NeoTextarea = ({
  label,
  placeholder,
  hint,
  ariaLabelledBy,
  maxlength = 300,
  defaultValue = "",
  onChange,
  cols,
  rows,
}) => {
  const internalId = uuid_v4();
  const [value, updateValue] = useState(defaultValue);
  const [counter, updateCounter] = useState(defaultValue.length);

  useEffect(() => {
    updateValue(defaultValue);
    updateCounter(defaultValue.length);
  }, [defaultValue]);

  const onChangeHandler = (e) => {
    const val = e.target.value;
    updateValue(val);
    updateCounter(val.length);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="neo-form-control neo-form-control--textarea">
      <div className="neo-input-group">
        {label ? <label htmlFor={internalId}>{label}</label> : null}

        <textarea
          id={internalId}
          className="neo-input"
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          type="text"
          aria-describedby={hint}
          aria-labelledby={ariaLabelledBy}
          maxLength={maxlength}
          value={value}
          onChange={onChangeHandler}
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
