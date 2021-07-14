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

  const [icon, setIcon] = useState(false);

  const [buttonShape, setButtonShape] = useState("default");
  const [buttonText, setButtonText] = useState("Hello");
  const [buttonBadge, setButtonBadge] = useState("100K");
  const [buttonStatus, setButtonStatus] = useState("default");
  const [buttonType, setButtonType] = useState("primary");
  const [buttonSize, setButtonSize] = useState("default");
  const [buttonDir, setButtonDir] = useState(false);
  const [buttonAnimation, setButtonAnimation] = useState("default");

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
      property: "animation",
      type: "string",
      description: "Set animation for button, only accept 2 types",
      values: "pulse| spinner",
      default: "-",
    },
    {
      key: "2",
      property: "badge",
      type: "string",
      description:
        "Set badge for button, 12 characters as max-length, no space.",
      values: "string",
      default: "-",
    },
    {
      key: "3",
      property: "dir",
      type: "string",
      description: "Set the button direction, left to right or right to left.",
      values: "ltr | rtl",
      default: "-",
    },
    {
      key: "4",
      property: "disabled",
      type: "boolean",
      description: "Set button as disabled.",
      values: "true | false",
      default: "false",
    },
    {
      key: "5",
      property: "icon",
      type: "string",
      description: "Set the icon, use the name of the icon",
      values:
        "check the <a href='https://design.avaya.com/components/icons/'>icon names</a> for the copmplete list.",
      default: "-",
    },
    {
      key: "6",
      property: "onClick",
      type: "function",
      description: "Set the handler to handle click event.",
      values: "(event) => void",
      default: "-",
    },
    {
      key: "7",
      property: "shape",
      type: "string",
      description:
        "Set button shape, icon prop will be required when using this property.",
      values: "circle | square",
      default: "-",
    },
    {
      key: "8",
      property: "size",
      type: "string",
      description: "Set button size, only 2 types of size are allowed.",
      values: "compact | wide",
      default: "-",
    },
    {
      key: "9",
      property: "status",
      type: "string",
      description: "Set the state style for the button state.",
      values: "default | success | alert | warning | info",
      default: "default",
    },
    {
      key: "10",
      property: "type",
      type: "string",
      description: "Set the level style for the button.",
      values: "primary | secondary | tertiary",
      default: "primary",
    },
  ];

  const columns = [
    {
      title: "Property",
      dataIndex: "property",
      width:"166px",
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
      width:"226px",
      key: "values",
    },
    {
      title: "Default State",
      dataIndex: "default",
      key: "default",
    },
  ];
  return (
    <div className="main">
      <div className={"sandbox"}>
        <h4>Button Sandbox</h4>
        <div className={"buttons-container"}>
          <div className={"button-box"}>
            <NeoButton
              status={buttonStatus}
              onClick={clickHandler}
              type={buttonType}
              disabled={isDisable}
              size={buttonSize}
              shape={buttonShape}
              icon={icon}
              animation={buttonAnimation}
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
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NeoCheckbox
            label={"Dir"}
            onChange={setButtonDir}
            onClick={() => {
              setButtonText("عندما يريد العالم");
              setIcon("settings");
            }}
          />
          {buttonDir ? <code>rtl</code> : <code>ltr</code>}
        </div>
        <NeoTextarea
          label={"Content"}
          onChange={(e) => setButtonText(e.target.value)}
          defaultValue={buttonText}
        />
        <NeoTextinput
          label={"Badge"}
          onChange={(e) => setButtonBadge(e.target.value)}
          onClear={(e) => setButtonBadge("")}
          defaultValue={buttonBadge}
        />
        <NeoRadioGroup
          onChange={setButtonAnimation}
          label={"Animation"}
          options={[
            { name: "Default", value: "default" },
            { name: "Spinner", value: "spinner" },
            { name: "Pulse", value: "pulse" },
          ]}
        />
        <br />
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
