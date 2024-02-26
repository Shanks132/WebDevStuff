import { useState, Fragment } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Tabs from './components/Tabs.jsx'


function App() {
  console.log('APP COMPONENT EXECUTING');
  return (
    <Fragment> 
      {/* can also use <> and </> instead of fragment in newer project builds  */}
    
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
      </Fragment>
  );
}

export default App;
