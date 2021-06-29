const NeoButton = ({
  shape,
  size,
  pulse,
  type,
  disabled,
  icon,
  status,
  onClick,
  children,
  spinner,
}) => {
  let classArray = ["neo-btn"];
  let toRet;

  let ariaLabel = "";

  switch (type) {
    case "primary":
      classArray.push("neo-btn-primary");
      classArray.push(`neo-btn-primary--${status}`);
      break;
    case "secondary":
      classArray.push("neo-btn-secondary");
      classArray.push(`neo-btn-secondary--${status}`);
      break;
    case "tertiary":
      classArray.push("neo-btn-tertiary");
      classArray.push(`neo-btn-tertiary--${status}`);
      break;
    default:
  }

  if (typeof children === "string" || children instanceof String) {
    ariaLabel = children;
  }

  switch (shape) {
    case "circle":
      classArray = classArray.map((item) =>
        item.replace("neo-btn", "neo-btn-circle")
      );
      break;
    case "square":
      classArray = classArray.map((item) =>
        item.replace("neo-btn", "neo-btn-square")
      );
      break;
    default:
  }

  switch (size) {
    case "compact":
      classArray.push("neo-btn--compact");
      break;
    case "wide":
      classArray.push("neo-btn--wide");
      break;
    default:
  }

  if (pulse) {
    classArray.push("neo-pulse");
  }

  if (icon) {
    classArray.push(icon);
  }

  switch (shape) {
    case "circle":
    case "square":
      // display warning
      if (!icon || icon==="false") {
        console.warn("Icon is required");
      }
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
          {spinner ? <span className="neo-spinner"></span> : null}
          <div dangerouslySetInnerHTML={{__html: children}} />
        </button>
      );
  }
  return toRet;
};

export default NeoButton;
