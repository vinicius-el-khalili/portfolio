import React from 'react';
import TypedWords from './components/write-rewrite/TypedWords';

class App extends React.Component<{},{}>{
  render(): React.ReactNode {
    return(<>
    
    <div className="App">
      <TypedWords words={["much phrase","such words"]}></TypedWords>
    </div>

    </>)
  }
}

export default App;
