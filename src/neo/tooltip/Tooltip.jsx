import { Children, useContext } from "react";
import { TooltipContext } from "./TooltipContext";
import { Action } from "./TooltipReducer";

const Tooltip = ({ text = "", position = "top", children }) => {
  const { dispatch } = useContext(TooltipContext);

  const handleOnMouseOver = (e) => {
    let el = e.currentTarget;

    if (el) {
      let rect = el.getBoundingClientRect();

      dispatch({
        type: Action.SHOW,
        state: {
          visible: true,
          hoverRect: rect,
          text: text,
          position: position,
        },
      });
    }
  };

  const handleOnMouseOut = (e) => {
      
    let el = e.currentTarget;

    if (el) {
      let rect = el.getBoundingClientRect();

      dispatch({
        type: Action.HIDE,
        state: {
          visible: false,
          hoverRect: rect,
          text: text,
          position: position,
        },
      });
    }
  };

  return (
    <>
      {Children.map(children, (Child) => (
        <Child.type
          {...Child.props}
          onMouseOver={handleOnMouseOver}
          onFocus={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        />
      ))}
    </>
  );
};
export default Tooltip;
