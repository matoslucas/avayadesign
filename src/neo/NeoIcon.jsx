const Neoicon = ({ status, icon, large, alt ="icon", ariaLabelledBy }) => {
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
      className={classArray.join(" ")}
      aria-label={alt}
      aria-labelledby={ariaLabelledBy}
    ></span>
  );
};
export default Neoicon;
