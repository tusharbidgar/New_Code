import logo from './logo.svg';
import './App.css';
import ComponentA, { NamedComponentA } from './Component/ComponentA';


function App() {
  return (
    <>
    <div>
      <h1>React Nested Components Assignment</h1>
      <ComponentA />
      {/* Using named export */}
      <NamedComponentA />
    </div>
    </>
  );
}

export default App;
