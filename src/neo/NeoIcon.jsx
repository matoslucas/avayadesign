const Neoicon = ({ status, icon, large, ariaLabel ="icon" }) => {
  let classArray = ["neo-icon-state"];

  if (status){
    classArray.push(`neo-icon-state--${status}`);
  }
  if (icon) {
    classArray.push(`neo-icon-${icon}`);
  }

  if(large){
    classArray.push(`neo-icon-state--large`);
  }

  return (
    <span
      class={classArray.join(" ")}
      aria-label={ariaLabel}
    ></span>
  );
};
export default Neoicon;
