import React from 'react';
import TypedWords from './components/write-rewrite/TypedWords2';

class App extends React.Component<{},{}>{
  render(): React.ReactNode {
    return(<>
    
    <div className="App">

      <TypedWords></TypedWords>
    </div>

    </>)
  }
}

export default App;
