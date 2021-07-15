const Neoicon = ({ status, icon, large, alt ="icon" }) => {
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
      aria-label={alt}
    ></span>
  );
};
export default Neoicon;
