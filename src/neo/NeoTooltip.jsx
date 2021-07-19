const NeoTooltip = ({
  multiLineBreakpoint = 50,
  position = "up",
  text,
  children,
}) => {
  const { ariaLabelledBy } = children.props;
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
