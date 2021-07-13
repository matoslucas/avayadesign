import { useState, useRef, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

const NeoTextarea = ({
  label,
  placeholder,
  hint,
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
          maxLength={maxlength}
          value={value}
          onChange={onChange}
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
