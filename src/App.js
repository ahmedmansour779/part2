import React from 'react';
import ComponentDidMount from './main/components/ComponentDidMount';
import FirstFetch from './main/fetch Api/FirstFetch';
import PreviousPropsState from './main/previous props';

function App() {
  return (
    <div className='container' style={{ textAlign: "center", marginTop: "1rem" }}>
      <ComponentDidMount /><hr />
      <FirstFetch /><hr />
      <PreviousPropsState /><hr />
    </div>
  );
}

export default App;