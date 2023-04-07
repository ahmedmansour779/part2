import React from 'react';
import ComponentDidMount from './main/components/ComponentDidMount';
import FirstFetch from './main/fetch Api/FirstFetch';
import FixSearch from './main/fix search/FixSearch';
import PreviousPropsState from './main/previous props';
import GetPrevState from './main/previous props/GetPrevState';


function App() {
  return (
    <div className='container' style={{ textAlign: "center", marginTop: "1rem" }}>
      <ComponentDidMount /><hr />
      <FirstFetch /><hr />
      <PreviousPropsState /><hr />
      <FixSearch /><hr />
      <GetPrevState /><hr />
    </div>
  );
}

export default App;