import './App.css';
import SampleSchema from './schema/schema.json';
import Group from './Components/GroupComponent/Group';
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const GlobalData = () => useContext(GlobalContext);

function App() {
  const baseExpFormat = {
    rules: [],
    combinator: "and",
    not: false,
    scoring_rule: "group",
    score: 90
  }

  const [finalExpression, setFinalExpression] = useState(baseExpFormat);

  useEffect(()=>{
  },[])

  function updateFinalExpression(expObj, id){
    if(expObj && id >= 0){
      const updatedExp = {...finalExpression};
      updatedExp.rules[id] = expObj;
      console.log("Before Final Update:", finalExpression);
      // setFinalExpression(updatedExp);
    }
  }

  return (
    <div className="App">
      <GlobalContext.Provider value={{updateFinalExpression, baseExpFormat, SampleSchema}}>
        <Group />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
