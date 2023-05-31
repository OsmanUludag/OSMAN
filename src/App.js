import HelloWorld from "./components/01-hello-world/hello-word";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Clock1 from "./components/05-clock1/clock1";
import Style1 from "./components/04-styles/style1"
import Style2 from "./components/04-styles/style2"
import Style3 from "./components/04-styles/style3"
import Style4 from "./components/04-styles/style4"
import Greetings from "./components/06-props1/greetings";
import ProductCard from "./components/07-props2/product-card";
import Products from "./components/07-props2/products";
import Clock2 from "./components/08-clock2/clock2";



const App = () => {
  return(

    <div>
{/*   
      <HelloWorld></HelloWorld>
      <Jsx1></Jsx1>
      <Jsx2></Jsx2>
      <Jsx3></Jsx3>
      <Jsx4></Jsx4>
      <Jsx5></Jsx5>
      <Jsx6></Jsx6>
      <Style1></Style1>
      <Style2></Style2>
      <Style3></Style3>
      <Style4></Style4>
      <Clock1></Clock1>
      <Greetings></Greetings>
      <Products></Products>
      
  */}

       <Clock2 textColor = "red" bgColor = "yellow"></Clock2>
    </div>
  )
}
export default App;