const Neoicon = ({
  status,
  icon,
  large,
  alt = "icon",
  ariaLabelledBy,
  tabIndex = 0,
}) => {
  let classArray = ["neo-icon-state"];

  if (status) {
    classArray.push(`neo-icon-state--${status}`);
  }
  if (icon) {
    classArray.push(`neo-icon-${icon}`);
  }

  if (large) {
    classArray.push(`neo-icon-state--large`);
  }

  return (
    <span
      tabIndex={tabIndex}
      className={classArray.join(" ")}
      aria-label={alt}
      aria-labelledby={ariaLabelledBy}
    ></span>
  );
};
export default Neoicon;
