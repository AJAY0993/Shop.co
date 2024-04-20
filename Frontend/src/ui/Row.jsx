function Row({ children, classes = "" }) {
  return (
    <div className={`flex flex-wrap ${classes}`} role="row">
      {children}
    </div>
  );
}

export default Row;
