const NeoTooltip = ({ position = "right", children, text, multiline }) => {
  let classArray = ["neo-tooltip__content"];

  if (multiline) {
    classArray.push("neo-tooltip__content--multiline");
  }

  return (
    <div
      className={`neo-tooltip neo-tooltip--${position} neo-tooltip--onhover`}
    >
      {children}
      <div className={classArray.join(" ")}>
        <div className="neo-arrow"></div>
        {text}
      </div>
    </div>
  );
};
export default NeoTooltip;
