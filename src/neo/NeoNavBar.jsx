const NeoNavBar = ({ children, style }) => {
  return <nav className="neo-navbar" style={style}>{children ? children : null}</nav>;
};
export default NeoNavBar;
