import { useState, useRef, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

const NeoTextinput = ({
  label,
  placeholder,
  hint,
  defaultValue = "",
  onChange,
  onKeyUp,
  onKeyDown,
  onClear,
  size = 12,
  maxLength = 100,
  minLength = 12,
}) => {
  const internalId = uuid_v4();
  const [value, updateValue] = useState(defaultValue);

  const previousValueRef = useRef();
  const previousValue = previousValueRef.current;

  if (defaultValue !== previousValue && defaultValue !== value) {
    updateValue(defaultValue);
  }

  useEffect(() => {
    previousValueRef.current = defaultValue;
  });

  
  return (
    <div className="neo-form-control">
      <div className="neo-input-group">
        {label ? <label htmlFor={internalId}>{label}</label> : null}
        <div className="neo-input-editable__wrapper">
          <input
            className="neo-input"
            id={internalId}
            placeholder={placeholder}
            type="text"
            aria-describedby={hint}
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            size={size}
            maxLength={maxLength}
            minLength={minLength}
          ></input>
          <button
            onClick={onClear}
            aria-label="clear input"
            tabIndex="-1"
            className="neo-input-edit__icon neo-icon-end"
          ></button>
        </div>
      </div>

      {hint ? <div className="neo-input-hint">{hint}</div> : null}
    </div>
  );
};
export default NeoTextinput;
