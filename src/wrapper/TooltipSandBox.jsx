import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";

import "@avaya/neo/neo/dist/css/neo/neo.min.css";
import "./wraper.css";

import {
  NeoButton,
  NeoImage,
  NeoIcon,
  NeoRadioGroup,
  NeoTextarea,
  NeoTooltip,
  NeoTable,
  NeoTextinput,
} from "../neo";

const TooltipSandBox = () => {
  const [position, setPosition] = useState("right");
  const [tooltipText, setTooltipText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est."
  );

  const clickHandler = () => {
    console.log("clickHandler");
  };

  const dataSource = [
    {
      key: "2",
      property: "multiLineBreakpoint",
      type: "number",
      description: "Change multiline break point, it is restricted to 50",
      values: "50",
      default: "50",
    },
    {
      key: "3",
      property: "position",
      type: "string",
      description: "Set alignment position of the tooltip",
      values:
        "right | left | up | up-right | up-left | down | down-right | down-left",
      default: "up",
    },
    {
      key: "4",
      property: "text",
      type: "string",
      description: "Set text for the tooltip",
      values: "text",
      default: "-",
    },
  ];

  const columns = [
    {
      title: "Property",
      dataIndex: "property",
      width: "236px",
      key: "property",
      render: (text, record) => (
        <div className={"api-prop-col"}>
          {text}
          <code>{record.type}</code>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Values",
      dataIndex: "values",
      width: "226px",
      key: "values",
    },
    {
      title: "Default",
      dataIndex: "default",
      key: "default",
    },
  ];

  return (
    <div className="main">
      <div className={"sandbox"}>
        <NeoTooltip position={position} text={tooltipText}>
          <h4 aria-labelledby="h4-tooltip-id" tabIndex="0">
            Tooltip Sandbox
          </h4>
        </NeoTooltip>
        <div className={"buttons-container"}>
          <form
            className={"neo-form"}
            style={{ width: "100%", flexFlow: "row wrap", display: "flex" }}
          >
            <div className={"tooltip-box"}>
              <NeoTooltip position={position} text={tooltipText}>
                <NeoImage
                  src="https://i.picsum.photos/id/1022/200/200.jpg?hmac=MjK2sur6luq2UfxMPWBFBuPyvZYyYLYvQH9kCmEGJRY"
                  alt={"sample image tooltip"}
                  ariaLabelledBy="img-tooltip-id"
                />
              </NeoTooltip>
            </div>
            <div className={"tooltip-box"}>
              <NeoTooltip position={position} text={tooltipText}>
                <NeoButton
                  onClick={clickHandler}
                  ariaLabelledBy="buton-tooltip-id"
                >
                  Button
                </NeoButton>
              </NeoTooltip>
            </div>
            <div className={"tooltip-box"}>
              <NeoTooltip position={position} text={tooltipText}>
                <NeoIcon
                  status="default"
                  icon="help"
                  large={false}
                  alt={"icon sample"}
                  ariaLabelledBy="icon-tooltip-id"
                  onClick={clickHandler}
                />
              </NeoTooltip>
            </div>
            <div className={"tooltip-box"}>
              <NeoTooltip position={position} text={tooltipText}>
                <NeoTextinput
                  label={"Text Input"}
                  ariaLabelledBy="textinput-tooltip-id"
                />
              </NeoTooltip>
            </div>
            <div className={"tooltip-box"}>
              <NeoTooltip position={position} text={tooltipText}>
                <NeoTextarea
                  label={"Text Area"}
                  ariaLabelledBy="textarea-tooltip-id"
                />
              </NeoTooltip>
            </div>

            <div className={"tooltip-box"}>
              <NeoTooltip position={position} text={tooltipText}>
                <span aria-labelledby="p-tooltip-id" tabIndex="0">
                <p >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </span>
              </NeoTooltip>
            </div>
          </form>
        </div>
        <h4>API</h4>
        <NeoTable dataSource={dataSource} columns={columns} />
      </div>

      <div className={"settings-panel"}>
        <NeoTextarea
          onChange={(e) => setTooltipText(e.target.value)}
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
