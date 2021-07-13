import { useState } from "react";
import "@avaya/neo/neo/dist/css/neo/neo.min.css";
import "./wraper.css";

import {
  NeoButton,
  NeoCheckbox,
  NeoRadioGroup,
  NeoSelectBox,
  NeoTextarea,
  NeoTextinput,
  NeoTable,
} from "../neo";

const ButtonSandBox = () => {
  const [isDisable, setDisable] = useState(false);
  const [isPulse, setPulse] = useState(false);

  const [isSpinner, setSpinner] = useState(false);

  const [icon, setIcon] = useState(false);

  const [buttonShape, setButtonShape] = useState("default");
  const [buttonText, setButtonText] = useState("Text");
  const [buttonBadge, setButtonBadge] = useState("");
  const [buttonStatus, setButtonStatus] = useState("default");
  const [buttonType, setButtonType] = useState("primary");
  const [buttonSize, setButtonSize] = useState("default");
  const [buttonDir, setButtonDir] = useState(false);

  const clickHandler = () => {
    console.log("clickHandler");
  };

  const keyDownHandler = (e) => {
    //space pressed
    if (e.keyCode === 32) {
      //space
      e.preventDefault();
    }
  };

  const updateShapeHandler = (value) => {
    setButtonShape(value);

    if (value === "circle" && (!icon || icon === "false")) {
      setIcon("add");
    }

    if (value === "square" && (!icon || icon === "false")) {
      setIcon("settings");
    }

    if (value === "default") {
      setIcon(false);
    }
  };
  // table data
  const dataSource = [
    {
      key: "1",
      property: "onClick",
      description: "Set the handler to handle <code>click</code> event.",
      type: "(event) => void",
      default: "-",
    },
    {
      key: "2",
      property: "shape",
      description: "Can be set button shape",
      type: "circle | square",
      default: "-",
    },
  ];

  const columns = [
    {
      title: "Property",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
        <h4>Buttons Sandbox</h4>
        <div className={"buttons-container"}>
          <div className={"button-box"}>
            <NeoButton
              status={buttonStatus}
              onClick={clickHandler}
              type={buttonType}
              disabled={isDisable}
              pulse={isPulse}
              size={buttonSize}
              shape={buttonShape}
              icon={icon}
              spinner={isSpinner}
              badge={buttonBadge}
              dir={buttonDir ? "rtl" : "ltr"}
            >
              {buttonText}
            </NeoButton>
          </div>
         
        </div>
        <h4>API</h4>
          <NeoTable dataSource={dataSource} columns={columns} />
      </div>

      <div className={"settings-panel"}>
        <NeoCheckbox label={"Disable"} onChange={setDisable} />
        <NeoCheckbox label={"Pulse"} onChange={setPulse} />
        <NeoCheckbox label={"Spinner"} onChange={setSpinner} />
        <NeoCheckbox label={"Dir"} onChange={setButtonDir} />
        <NeoTextarea
          label={"Content"}
          onChange={setButtonText}
          defaultValue={buttonText}
        />
        <NeoTextinput
          label={"Badge"}
          onChange={(e) => setButtonBadge(e.target.value)}
          onClear={(e) => setButtonBadge("")}
          onKeyDown={keyDownHandler}
          defaultValue={buttonBadge}
          maxLength={12}
        />
        <NeoRadioGroup
          onChange={setButtonSize}
          label={"Size"}
          options={[
            { name: "Default", value: "default" },
            { name: "Compact", value: "compact" },
            { name: "Wide", value: "wide" },
          ]}
        />
        <br />

        <NeoRadioGroup
          onChange={setButtonType}
          label={"Type"}
          options={[
            { name: "Primary", value: "primary" },
            { name: "Secondary", value: "secondary" },
            { name: "Tertiary", value: "tertiary" },
          ]}
        />
        <br />

        <NeoRadioGroup
          onChange={setButtonStatus}
          label={"Status"}
          options={[
            { name: "Default", value: "default" },
            { name: "Success", value: "success" },
            { name: "Alert", value: "alert" },
            { name: "Warning", value: "warning" },
            { name: "Info", value: "info" },
          ]}
        />
        <br />
        <NeoRadioGroup
          onChange={updateShapeHandler}
          label={"Shape"}
          options={[
            { name: "Default", value: "default" },
            { name: "Circle", value: "circle" },
            { name: "Square", value: "square" },
          ]}
        />
        <br />
        <NeoSelectBox
          onChange={setIcon}
          selected={icon}
          label={"Icon"}
          error={
            buttonShape !== "default" && (!icon || icon === "false")
              ? true
              : false
          }
          hint={"Select icon name"}
          options={[
            { label: "select value", value: false },
            { label: "voice", value: "voice" },
            { label: "settings", value: "settings" },
            { label: "error", value: "error" },
            { label: "chat", value: "chat" },
            { label: "add", value: "add" },
            { label: "add-circle", value: "add-circle" },
            { label: "address", value: "address" },
            { label: "address-book", value: "address-book" },
            { label: "agents", value: "agents" },
            { label: "analytics", value: "analytics" },
            { label: "available", value: "available" },
            { label: "available-filled", value: "available-filled" },
            { label: "away", value: "away" },
            { label: "away-filled", value: "away-filled" },
            { label: "bot", value: "bot" },
          ]}
        />
      </div>
    </div>
  );
};
export default ButtonSandBox;
