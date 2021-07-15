import { v4 as uuid_v4 } from "uuid";


const NeoRadioGroup = ({ options, label, onChange, name = uuid_v4() }) => {
  return (
    <div className="neo-form-control">
      <h5>{label}</h5>
      <div className="neo-input-group">
        {options
          ? options.map((radio, index) => {
              const internalId = uuid_v4();
              return (
                <div key={index} style={{ display: "flex" }}>
                  <input
                    className="neo-radio"
                    type="radio"
                    name={name}
                    value={radio.value}
                    id={internalId}
                    onChange={(e) => onChange(e.target.value)}
                    defaultChecked={index===0?true:false}
                  />
                  <label htmlFor={internalId}>{radio.name}</label>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default NeoRadioGroup;
