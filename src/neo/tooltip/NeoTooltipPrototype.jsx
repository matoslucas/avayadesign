import React, { useEffect, useContext, createRef, useState } from "react";
import { TooltipContext } from "./TooltipContext";
import { Action } from "./TooltipReducer";

const NeoTooltipPrototype = () => {
  const ttNode = createRef();
  const { state } = useContext(TooltipContext);
  const [ttRect, setTtRect] = useState();

  useEffect(() => {
    setTtRect(ttNode.current.getBoundingClientRect());
  }, [state.text]);

  // position the tooltip after showing it
  let x = 0,
    y = 0,
    type = "none";

  if (ttNode && state.hoverRect) {
    const docWidth = document.documentElement.clientWidth,
      docHeight = document.documentElement.clientHeight;

    let rx = state.hoverRect.x + state.hoverRect.width, // most right x
      lx = state.hoverRect.x, // most left x
      ty = state.hoverRect.y, // most top y
      by = state.hoverRect.y + state.hoverRect.height; // most bottom y

    // tool tip rectange

    let bRight = rx + ttRect.width <= window.scrollX + docWidth;
    let bLeft = lx - ttRect.width >= 0;

    let bAbove = ty - ttRect.height >= 0;
    let bBellow = by + ttRect.height <= window.scrollY + docHeight;

    // the tooltip doesn't fit to the right
    if (bRight) {
      x = rx;

      y = ty + (state.hoverRect.height - ttRect.height);

      if (y < 0) {
        y = ty;
      }

      type = "right";
    } else if (bBellow) {
      y = by;

      x = lx + (state.hoverRect.width - ttRect.width);

      if (x < 0) {
        x = lx;
      }

      type = "bottom";
    } else if (bLeft) {
      x = lx - ttRect.width;

      y = ty + (state.hoverRect.height - ttRect.height);

      if (y < 0) {
        y = ty;
      }

      type = "left";
    } else if (bAbove) {
      y = ty - ttRect.height;

      x = lx + (state.hoverRect.width - ttRect.width);

      if (x < 0) {
        x = lx;
      }

      type = "top";
    }
  }

  let visibility = state.visible === true ? "on" : "off";

  let style = {};

  if (state.hoverRect) {
    switch (state.position) {
      case "top":
        x = state.hoverRect.x + state.hoverRect.width / 2 - ttRect.width / 2;
        y = state.hoverRect.y - ttRect.height;

        style = {
          left: `${x}px`,
          top: `${y}px`,
        };
        type = "top";

        break;
      case "right":
        x = state.hoverRect.x + state.hoverRect.width;
        y = state.hoverRect.y + state.hoverRect.height / 2 - ttRect.height / 2;
        style = {
          left: `${x}px`,
          top: `${y}px`,
        };
        type = "right";
        break;
      case "bottom":
        x = state.hoverRect.x + state.hoverRect.width / 2 - ttRect.width / 2;
        y = state.hoverRect.y + state.hoverRect.height;
        style = {
          left: `${x}px`,
          top: `${y}px`,
        };
        type = "bottom";
        break;
      case "left":
        x = state.hoverRect.x - ttRect.width;
        y = state.hoverRect.y + state.hoverRect.height / 2 - ttRect.height / 2;
        style = {
          left: `${x}px`,
          top: `${y}px`,
        };
        type = "left";
        break;
      default:
    }
    // force to show inside screen
    if (x < 0) {
      // force right
      x = state.hoverRect.x + state.hoverRect.width;
      y = state.hoverRect.y + state.hoverRect.height / 2 - ttRect.height / 2;
      style = {
        left: `${x}px`,
        top: `${y}px`,
      };
      type = "right";
    }
    if (y < 0) {
      // force bottom
      x = state.hoverRect.x + state.hoverRect.width / 2 - ttRect.width / 2;
      y = state.hoverRect.y + state.hoverRect.height;
      style = {
        left: `${x}px`,
        top: `${y}px`,
      };
      type = "bottom";
    }
    
    if(x> (document.documentElement.clientWidth - ttRect.width)){
     
      // force left
      x = state.hoverRect.x - ttRect.width;
      y = state.hoverRect.y + state.hoverRect.height / 2 - ttRect.height / 2;
      style = {
        left: `${x}px`,
        top: `${y}px`,
      };
      type = "left";
    }

    if(y > (document.documentElement.clientHeight - ttRect.height)){
      // force top
       x = state.hoverRect.x + state.hoverRect.width / 2 - ttRect.width / 2;
        y = state.hoverRect.y - ttRect.height;

        style = {
          left: `${x}px`,
          top: `${y}px`,
        };
        type = "top";
    }

    
  }

  let classNames = {};

  if (type != null && type != "none") {
    classNames[type] = true;
  }

  classNames[visibility] = true;

  return (
    <div
      ref={ttNode}
      id="tooltip"
      className={Object.keys(classNames).join(" ")}
      style={style}
    >
      <div className="tooltip-arrow"></div>
      <div className="tooltip-inner">{state.text}</div>
    </div>
  );
};
export default NeoTooltipPrototype;
