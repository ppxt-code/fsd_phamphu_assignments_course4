import React from 'react';
import Timer from './Timer';
import HookExamples from './HookExamples';
import Flight from './Flight';
import DataStructure from './DataStructure';
import DataStructure2 from './DataStructure2';

function App() {
  return (
    <div>
      <h2>Assessment 21/09/26</h2>
      <DataStructure2/><br/>
      <h2>Assessment 20/09/26</h2>
      <DataStructure/><br/>
      <h2>Assessment 16/08/26</h2>
      <Flight/>
      <h2>Assessment 01/08/26</h2>
      <HookExamples /><br/>
      <h2>Assessment 26/07/26</h2>
      <Timer /><br/>
      <h2>Assessment 25/07/26</h2>
      <Products /><br/>
      <h2>Assessment 19/07/26</h2>
      <h1>Resume</h1>
      <Objective />
      <Education />
      <Skills />
    </div>
  );
}
// Assessment 19/07/26 :
function Objective() {
  return (<div><br/><h2>Objective</h2><p>To become a successful fullstack developer proficient in modern web technologies.</p>
  <p>To contribute to the development of innovative web applications.</p></div>);
}
function Education() {
  return (<div><br/><h2>Education</h2><p>Master in Scientific Calculus</p><p>Master in Statistical Physics</p></div>);
}
function Skills() {
  return (<div><br/><h2>Skills</h2><ul><li>HTML/CSS/JavaScript</li><li>Java</li><li>C++</li></ul></div>);
}
// Assessment 25/07/26 :
function Product(props) {
  return (<div style={{ border: "1px solid white", padding: "10px", margin: "10px"}}>
    <h3>{props.product.productName}</h3>
    <p>Price: ${props.product.price}</p>
    <p>Brand: {props.product.brand}</p>
    <p>Colors: {props.product.colors.join(", ")}</p>
    <p>Discount: {props.product.discount * 100}%</p>
  </div>);
}
class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = { count: props.quantity };
    this.increment = this.increment.bind(this);
  }
  render() {
    return (<div>
      <button onClick={this.increment}>+</button>
      <span style={{ margin: "0 10px" }}>{this.state.count}</span>
      <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
    </div>);
  }
  increment() {
    this.setState({count: this.state.count +1});
  }
}
class Products extends React.Component {
  products = 
       [{id:1, productName:"Mouse", price:200, quantity:10, brand:"Logitech", colors:["Black", "White"], discount:0.1},
        {id:2, productName:"Keyboard", price:150, quantity:15, brand:"Corsair", colors:["Black", "RGB"], discount:0.15},
        {id:3, productName:"Monitor", price:300, quantity:5, brand:"Dell", colors:["Black"], discount:0.2}];
  render() {
    return (<table><tbody>
      {this.products.map((product, index)=>
            (<tr key={index}><td><Product product={product} /></td><td><Counter quantity={product.quantity} /></td></tr>))}
            </tbody></table>);
  }
}

export default App;