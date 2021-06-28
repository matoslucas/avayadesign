const NeoButton = ({
  type,
  compact,
  pulse,
  primary,
  secondary,
  tertiary,
  disabled,
  wide,
  icon,
  status,
  onClick,
  children,
  spinner,
}) => {
  let classArray = ["neo-btn"];
  let toRet;

  let ariaLabel = "";

  if (primary) {
    classArray.push("neo-btn-primary");
    classArray.push(`neo-btn-primary--${status}`);
  }

  if (secondary) {
    classArray.push("neo-btn-secondary");
    classArray.push(`neo-btn-secondary--${status}`);
  }

  if (tertiary) {
    classArray.push("neo-btn-tertiary");
    classArray.push(`neo-btn-tertiary--${status}`);
  }

  if (typeof children === "string" || children instanceof String) {
    ariaLabel = children;
  }

  if (type === "circle") {
    classArray = classArray.map((item) =>
      item.replace("neo-btn", "neo-btn-circle")
    );
  }

  if (type === "square") {
    classArray = classArray.map((item) =>
      item.replace("neo-btn", "neo-btn-square")
    );
  }

  if (compact) {
    classArray.push("neo-btn--compact");
  }

  if (wide) {
    classArray.push("neo-btn--wide");
  }

  if (pulse) {
    classArray.push("neo-pulse");
  }

  if (icon) {
    classArray.push(icon);
  }

  switch (type) {
    case "circle":
    case "square":
      toRet = (
        <button
          className={classArray.join(" ")}
          aria-label={ariaLabel}
          onClick={onClick}
          disabled={disabled}
        />
      );
      break;
    default:
      toRet = (
        <button
          className={classArray.join(" ")}
          onClick={onClick}
          disabled={disabled}
        >
          {spinner?<span class="neo-spinner"></span>:null}
          
          {children}
        </button>
      );
  }
  return toRet;
};

export default NeoButton;
