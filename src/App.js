import React from "react";
import Button from "./shared/button.js";


function App() {
  const props = {id:"id", func:{name:"stuff", innertext:"I am a button!",info:{info1:null, info2:null}, args:{arg1:null, arg2:null}}};
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.<br/>
          <Button props={props} />
          {/*Here's a <Button id="test!" function ="stuff" info="{JSON: 'JSON'}" innertext="text"/>*/}
        </p>
      </header>
    </div>
  )
}


export default App;