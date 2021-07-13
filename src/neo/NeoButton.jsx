import { useState, useEffect } from "react";

const NeoButton = ({
  animation,
  badge,
  children,
  dir,
  disabled,
  icon,
  onClick,
  shape,
  size,
  status,
  type,
}) => {
  const [spinner, setSpinner] = useState(false);
 
  let classArray = ["neo-btn"];
  let toRet;

  let ariaLabel = "";

  useEffect(() => {
    if (animation === "spinner") {
      setSpinner(true);
    } else {
      setSpinner(false);
    }
  }, [animation]);

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

  if (icon) {
    classArray.push(`neo-icon-${icon}`);
  }

  if (badge) {
    classArray.push(`neo-badge`);
  }

  if (animation === "pulse") {
    classArray.push("neo-pulse");
  }

  const renderBadge = (txt) => {
    let toRet = txt.replace(/\s/g, "");
    if (toRet.length >= 12) {
      toRet = toRet.substring(0, 12);
    }
    return toRet;
  };

  switch (shape) {
    case "circle":
    case "square":
      // display warning
      if (!icon || icon === "false") {
        console.warn("An icon is required");
      }
      toRet = (
        <button
          className={classArray.join(" ")}
          aria-label={ariaLabel}
          data-badge={renderBadge(badge)}
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
          data-badge={renderBadge(badge)}
          dir={dir}
        >
          {spinner ? <span className="neo-spinner"></span> : null}
          <div dangerouslySetInnerHTML={{ __html: children }} />
        </button>
      );
  }
  return toRet;
};

export default NeoButton;
