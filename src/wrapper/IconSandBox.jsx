import { useState } from "react";
import "@avaya/neo/neo/dist/css/neo/neo.min.css";
import "./wraper.css";

import { NeoIcon, NeoSelectBox, NeoRadioGroup, NeoCheckbox, NeoTextarea } from "../neo";

const IconSnadBox = () => {
  const [icon, setIcon] = useState("voice");
  const [text, setText] = useState("DESCRIPTION OF ICON/ACTION");
  const [isLarge, setLarge] = useState(false);
  const [status, setStatus] = useState("default");

  return (
    <div className="main">
      <div className={"sandbox"}>
        <h4>Icon Sandbox</h4>
        <div className={"buttons-container"}>
          <div className={"button-box"}>
            <NeoIcon status={status} icon={icon} large={isLarge} />
          </div>
        </div>
      </div>

      <div className={"settings-panel"}>
        <NeoTextarea
          label={"Aria Label"}
          onChange={setText}
          defaultValue={text}
        />
        <NeoCheckbox label={"Large"} onChange={setLarge} />
        <NeoRadioGroup
          onChange={setStatus}
          label={"Status"}
          options={[
            { name: "Default", value: "default" },
            { name: "Available ", value: "available" },
            { name: "Away", value: "away" },
            { name: "Busy", value: "busy" },
            { name: "Do not disturb", value: "do-not-disturb" },
            { name: "Offline", value: "offline" },
            { name: "Lock", value: "lock" },
            { name: "Warning", value: "warning" },
            { name: "Missed", value: "missed" },
            { name: "Connected", value: "connected" },
            { name: "Inbound", value: "inbound" },
            { name: "Outbound", value: "outbound" },
          ]}
        />
        <br />
        <NeoSelectBox
          onChange={setIcon}
          selected={icon}
          label={"Icon"}
          error={!icon || icon === "false" ? true : false}
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
export default IconSnadBox;
