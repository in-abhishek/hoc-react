import './App.css';
import MyComponentWithValidation from './component/WithPropsValidation';
import Mycomponent from './component/Mycomponent';

const MyComponentWithValidationInstance = MyComponentWithValidation(Mycomponent);
function App() {
  return (
    <div className="App">
      <h1>HOc Component</h1>
      <MyComponentWithValidationInstance  text="Hello, World!"/>
      
    </div>
  );
}

export default App;
