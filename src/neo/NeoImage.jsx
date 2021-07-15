const NeoImage = ({ src, alt }) => {
  if (!src) {
    console.error("NeoImage src property is mandatory");
  }
  if (!alt) {
    console.error("NeoImage alt property is mandatory");
  }
  return <img src={src} className="neo-img neo-img--fluid" alt={alt}></img>;
};
export default NeoImage;
