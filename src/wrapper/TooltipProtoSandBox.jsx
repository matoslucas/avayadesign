import React, { createRef, useContext } from "react";
import NeoTooltipPrototype from "../neo/tooltip/NeoTooltipPrototype";

import { TooltipContext } from "../neo/tooltip/TooltipContext";

import { Action } from "../neo//tooltip/TooltipReducer";

import Tooltip from "../neo/tooltip/Tooltip";
import "../neo/tooltip/tooltip.css";

const Btn = ({ id, children, onMouseOver, onMouseOut }) => {
  return (
    <button
      type="button"
      id={id}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseOut}
    >
      {children}
    </button>
  );
};
const AppTest = () => {
  const toolTipRef = createRef();

  const handleOnMouseOut = (evt) => {
    //toolTipRef.current.hide();
  };
  const handleOnMouseOver = (evt) => {
    // get hovered element reference
    let el = evt.currentTarget;

    if (el != null) {
      let rect = el.getBoundingClientRect();

      // toolTipRef.current.show(rect);
      /*
      dispatch({
        type: Action.SHOW,
        action: rect,
      });
      */
    }
  };
  const createBtn = (id, text) => {
    return (
      <Btn
        id={id}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        {text}
      </Btn>
    );
  };

  return (
    <>
      {createBtn("btnLeft", "click 1")}
      {createBtn("btnRight", "click 2")}
      {createBtn("btnBtmR", "click 3")}
      {createBtn("btnCenter", "click 4")}
      <div>test</div>
    </>
  );
};

const TooltipProtoSandBox = () => {
  const { dispatch } = useContext(TooltipContext);

  
  return (
    <div className="main">
      <div className={"sandbox"}>
        <h4>Tooltip Prototype</h4>

        <NeoTooltipPrototype />
       
        <Tooltip position="top" text="This tooltip is in the TOP position">
          <button>Button 1</button>
        </Tooltip>
        <Tooltip position="right" text="This tooltip is in the RIGHT position">
          <button>Button 2</button>
        </Tooltip>
        <Tooltip position="left" text="This tooltip is in the LEFT position">
          <button>Button 3</button>
        </Tooltip>
        <Tooltip position="bottom" text="This tooltip is in the BOTTOM position">
          <button>Button 4</button>
        </Tooltip>
      </div>
    </div>
  );
};
export default TooltipProtoSandBox;
