const NeoImage = ({ src, alt, ariaLabelledBy, tabIndex = 0 }) => {
  if (!src) {
    console.error("NeoImage src property is mandatory");
  }
  if (!alt) {
    console.error("NeoImage alt property is mandatory");
  }
  return (
    <img
      tabIndex={tabIndex}
      src={src}
      className="neo-img neo-img--fluid"
      alt={alt}
      aria-labelledby={ariaLabelledBy}
    ></img>
  );
};
export default NeoImage;
