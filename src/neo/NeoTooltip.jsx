const NeoTooltip = ({ position = "right", children, text }) => {
  let classArray = ["neo-tooltip__content"];

  

  if (text && text.length >=50) {
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
