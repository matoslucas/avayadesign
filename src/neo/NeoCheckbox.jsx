import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";

const NeoCheckBox = ({ label, onChange, onClick }) => {
  const [isChecked, setIsChacked] = useState(false);
  const internalId = uuid_v4();
  const changeHandler = () => {
    setIsChacked(!isChecked);
    onChange(!isChecked);
  };
  return (
    <div className="neo-form-control" onClick={onClick}>
      <label className="neo-switch" htmlFor={internalId}>
        <input
          id={internalId}
          type="checkbox"
          defaultChecked={isChecked}
          onChange={() => changeHandler()}
        />
        <i className="neo-switch__icon"></i>
        {label}
      </label>
    </div>
  );
};

export default NeoCheckBox;
