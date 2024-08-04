import './App.css';
import { Calculator } from './components/Calculator' 


function App() {
  return (
    <div className="App container-fluid">
      <div className = "row appRow">
        <div className = "col-8 readmeContainer">
          <div className = "textContainer">
            <h1 className = "readMeHeader">React Calculator</h1>
            <p>This is a calculator component I made to practice React. This is a part of a larger project I'm working on, but I decided to split it off into its own thing because I think that other people could find some use in it.</p>
            <h2>List of Features:</h2>
            <ul>
              <li>All 4 basic operations</li>
              <li>Percentage Button</li>
              <li>Exponents!</li>
              <li>Lightweight</li>
              <li>Can be used as a solo component in a project</li>
            </ul>
            <h1 className = "readMeHeader">Notes For Use</h1>
            <p>If you want to use this in your own project, download the components file found in the GitHub and then use it's respective tag. This component uses Bootstrap styling</p>
          </div>         
        </div>
        <div className = "calculatorContainer col-4">
          <h1 className = "calcText">Working Model :)</h1>
          <Calculator />
        </div>
      </div>
      
    </div>
  );
}

export default App;

