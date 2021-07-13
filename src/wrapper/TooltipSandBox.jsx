import { useState } from "react";
import "@avaya/neo/neo/dist/css/neo/neo.min.css";
import "./wraper.css";

import {
  NeoButton,
  // NeoCheckbox,
  NeoRadioGroup,
  NeoTextarea,
  NeoTooltip,
} from "../neo";

const TooltipSandBox = () => {
  const [position, setPosition] = useState("right");
  const [tooltipText, setTooltipText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est."
  );

 

  const clickHandler = () => {
    console.log("clickHandler");
  };

  return (
    <div className="main">
      <div className={"sandbox"}>
        <h4>Tooltip Sandbox</h4>
        <div className={"buttons-container"}>
          <form
            className={"neo-form"}
            style={{ width: "100%", height: "15rem" }}
          >
            <div className={"tooltip-box"}>
              <NeoTooltip
                position={position}
                text={tooltipText}
               
              >
                <NeoButton
                  status="default"
                  text={"default"}
                  onClick={clickHandler}
                  type={"primary"}
                >
                  Tooltip
                </NeoButton>
              </NeoTooltip>
            </div>
          </form>
        </div>
      </div>

      <div className={"settings-panel"}>
       <NeoTextarea
          onChange={setTooltipText}
          defaultValue={tooltipText}
          rows="4"
        />

        <NeoRadioGroup
          onChange={setPosition}
          label={"Position"}
          options={[
            { name: "Right", value: "right" },
            { name: "Left", value: "left" },
            { name: "Up", value: "up" },
            { name: "Up Right", value: "up-right" },
            { name: "Up Left", value: "up-left" },

            { name: "Down", value: "down" },
            { name: "Down Right", value: "down-right" },
            { name: "Down Left", value: "down-left" },
          ]}
        />
      </div>
    </div>
  );
};
export default TooltipSandBox;
