import { useState, useRef, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

const NeoSelectBox = ({ label, options, selected, hint, onChange, error }) => {

  const [value, setValue] = useState(selected ? selected: options[0].value );

  const previousValueRef = useRef();
  const previousValue = previousValueRef.current;

  if (selected !== previousValue && selected !== value) {
    setValue(selected);
  }
  
  useEffect(() => {
    previousValueRef.current = selected;
  });

  let classArray = ["neo-form-control"];

  if (error) {
    classArray.push("neo-form-control--error");
  }

  return (
    <div className={classArray.join(" ")}>
      <div className="neo-input-group">
        {label ? <label htmlFor="color1">{label}</label> : null}

        <div className="neo-select">
          <select
            className="neo-icon-chevron-down"
            aria-describedby={label}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (onChange) {
                onChange(e.target.value);
              }
            }}
          >
            {options
              ? options.map((option) => {
                  const internalId = uuid_v4();
                  return (
                    <option key={internalId} value={option.value}>
                      {option.label}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
        {hint ? <div className="neo-input-hint">{hint}</div> : null}
      </div>
    </div>
  );
};
export default NeoSelectBox;
