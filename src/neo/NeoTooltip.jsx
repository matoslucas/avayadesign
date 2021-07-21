import React, {useRef} from "react";

const NeoTooltip = ({
  multiLineBreakpoint = 50,
  position = "up",
  text,
  children,
}) => {
  // const computedStyles = window.getComputedStyle(children);
  // console.log(computedStyles);
  const elementRef = useRef();
  let { ariaLabelledBy } = children.props;
  if (children.props["aria-labelledby"]) {
    ariaLabelledBy = children.props["aria-labelledby"];
  }
  let classArray = ["neo-tooltip__content"];

  if (multiLineBreakpoint < 50) {
    multiLineBreakpoint = 50;
  }

  if (text && text.length >= multiLineBreakpoint) {
    classArray.push("neo-tooltip__content--multiline");
  }

  return (
    <div
      className={`neo-tooltip neo-tooltip--${position} neo-tooltip--onhover`}
    >
      {children}
      <div className={classArray.join(" ")} id={ariaLabelledBy}>
        <div className="neo-arrow"></div>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};
export default NeoTooltip;
