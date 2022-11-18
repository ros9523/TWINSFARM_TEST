import "./App.css";
import Form from "./components/Form";
import Logo from "./images/Logo.png";
import Images from "./images/Images.png";

function App() {
  return (
    <div className="App">
      <img className="App_logo" src={Logo} />
      <div className="App_Elements">
        <Form></Form>
        <img className="App_image" src={Images} />
      </div>
    </div>
  );
}

export default App;
