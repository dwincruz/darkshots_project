import InputField from "../../../components/forms/InputField";
import ThemeHeaders from "../../../components/textHeaders/ThemeHeaders";
const Index = () => {
  const contactContent = {
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "10%",
    position: "relative",
  };
  const textHeading = "We love to hear from you";
  return (
    <div className="row align-items-center" style={contactContent}>
      <div className="col-12 mb-5">
        <ThemeHeaders title={textHeading} />
      </div>
      <div className="col-12  m-auto">
        <form className="row align-items-center">
          <div className="col-lg-5">
            <InputField name="name" type="text" />
          </div>
          <div className="col-lg-5">
            <InputField name="email" type="email" />
          </div>
          <div className="col-lg-10">
            <InputField name="message" type="text" />
          </div>
          <div className="col-lg-10">
            <button
              className="btn btn-sm btn-light rounded-0 float-end"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
