const NeoNavLeftButton = ({ children }) => {
  return (
    <div
      className="neo-nav--left"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {children ? children : null}
    </div>
  );
};
export default NeoNavLeftButton;
