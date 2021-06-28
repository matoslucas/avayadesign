import { useState } from "react";
import "@avaya/neo/neo/dist/css/neo/neo.min.css";
import "./ButtonSandBox.css";

import { NeoButton, NeoCheckbox, NeoRadioGroup, NeoSelectBox } from "../neo";

const ButtonSandBox = () => {
  const [isPrimary, setPrimary] = useState(false);
  const [isSecondary, setSecondary] = useState(false);
  const [isTertiary, setTertiary] = useState(false);
  const [isDisable, setDisable] = useState(false);
  const [isPulse, setPulse] = useState(false);
  const [isCompact, setCompact] = useState(false);
  const [isWide, setWide] = useState(false);
  const [isInline, setInline] = useState(false);
  const [isSpinner, setSpinner] = useState(false);
  

  const [icon, setIcon] = useState();

  const [buttonType, setButtonType] = useState("default");

  const clickHandler = () => {
    console.log("clickHandler");
  };

  return (
    <div className="main">
      <div className={"sandbox"}>
        <h4>
         Buttons Sandbox
        </h4>
        <div className={"buttons-container"}>
          <form className={isInline ? "neo-form neo-form--inline" : "neo-form"}>
            <div className={"button-box"}>
              <NeoButton
                status="default"
                text={"default"}
                onClick={clickHandler}
                primary={isPrimary}
                secondary={isSecondary}
                tertiary={isTertiary}
                disabled={isDisable}
                pulse={isPulse}
                compact={isCompact}
                wide={isWide}
                type={buttonType}
                icon={icon}
                spinner={isSpinner}
              >
                Default
              </NeoButton>
            </div>
            <div className={"button-box"}>
              <NeoButton
                status="success"
                onClick={clickHandler}
                primary={isPrimary}
                secondary={isSecondary}
                tertiary={isTertiary}
                disabled={isDisable}
                pulse={isPulse}
                compact={isCompact}
                wide={isWide}
                type={buttonType}
                icon={icon}
                spinner={isSpinner}
              >
                Success
              </NeoButton>
            </div>
            <div className={"button-box"}>
              <NeoButton
                status="alert"
                onClick={clickHandler}
                primary={isPrimary}
                secondary={isSecondary}
                tertiary={isTertiary}
                disabled={isDisable}
                pulse={isPulse}
                compact={isCompact}
                wide={isWide}
                type={buttonType}
                icon={icon}
                spinner={isSpinner}
              >
                Alert
              </NeoButton>
            </div>
            <div className={"button-box"}>
              <NeoButton
                status="warning"
                onClick={clickHandler}
                primary={isPrimary}
                secondary={isSecondary}
                tertiary={isTertiary}
                disabled={isDisable}
                pulse={isPulse}
                compact={isCompact}
                wide={isWide}
                type={buttonType}
                icon={icon}
                spinner={isSpinner}
              >
                warning
              </NeoButton>
            </div>
            <div className={"button-box"}>
              <NeoButton
                status="info"
                onClick={clickHandler}
                primary={isPrimary}
                secondary={isSecondary}
                tertiary={isTertiary}
                disabled={isDisable}
                pulse={isPulse}
                compact={isCompact}
                wide={isWide}
                type={buttonType}
                icon={icon}
                spinner={isSpinner}
              >
                info
              </NeoButton>
            </div>
          </form>
        </div>
      </div>

      <div className={"settings-panel"}>
        <NeoCheckbox label={"InLine"} onChange={setInline} />
        <NeoCheckbox label={"Primary"} onChange={setPrimary} />
        <NeoCheckbox label={"Secondary"} onChange={setSecondary} />
        <NeoCheckbox label={"Tertiary"} onChange={setTertiary} />
        <NeoCheckbox label={"Disable"} onChange={setDisable} />
        <NeoCheckbox label={"Pulse"} onChange={setPulse} />
        <NeoCheckbox label={"Compact"} onChange={setCompact} />
        <NeoCheckbox label={"Wide"} onChange={setWide} />
        <NeoCheckbox label={"Spinner"} onChange={setSpinner} />
        <NeoRadioGroup
          onChange={setButtonType}
          label={"Type"}
          options={[
            { name: "Default", value: "default" },
            { name: "Circle", value: "circle" },
            { name: "Square", value: "square" },
          ]}
        />
        <br />
        <NeoSelectBox
          onChange={setIcon}
          label={"Icon"}
          hint={"Select icon name"}
          options={[
            { label: "select value", value: "none" },

            { label: "settings", value: "neo-icon-settings" },
            { label: "error", value: "neo-icon-error" },
            { label: "chat", value: "neo-icon-chat" },
            { label: "add", value: "neo-icon-add" },
            { label: "add-circle", value: "neo-icon-add-circle" },
            { label: "address", value: "neo-icon-address" },
            { label: "address-book", value: "neo-icon-address-book" },
            { label: "agents", value: "neo-icon-agents" },
            { label: "analytics", value: "neo-icon-analytics" },
            { label: "available", value: "neo-icon-available" },
            { label: "available-filled", value: "neo-icon-available-filled" },
            { label: "away", value: "neo-icon-away" },
            { label: "away-filled", value: "neo-icon-away-filled" },
            { label: "bot", value: "neo-icon-bot" },
          ]}
        />
      </div>
    </div>
  );
};
export default ButtonSandBox;
