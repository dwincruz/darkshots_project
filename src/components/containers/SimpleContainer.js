const SimpleContainer = ({ mainSection, leftSection, rightSection }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 my-3">{leftSection ?? ""}</div>
        <div className="col-6 my-3">{rightSection ?? ""}</div>
        <div className="col-12">{mainSection ?? ""}</div>
      </div>
    </div>
  );
};
export default SimpleContainer;
