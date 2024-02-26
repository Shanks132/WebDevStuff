//component are written as functions always with start with capital letter
//app component is exported  and rendered iin the index.jsx
import {useState} from 'react' //all useXXX functions are hooks
//hooks should can only be called in react fucntions


import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

import { CoreConcepts } from './components/CoreConcepts.jsx';
import { Header } from './components/Header.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';


//State-This concept is all about registering variables,you could say, that are handled by React and that are updated with help of a function


function App() {
  // 1. hooks always on top level of the react function
  // 2. only call hooks in the inside of a component funtion
  // const [selectedTopic, setSelectedTopic] = useState('components');
  
  const [selectedTopic, setSelectedTopic] = useState();
  // 2 elements are returned 

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    // which button selected
    // console.log("selected " + selectedButton)
    // console.log(selectedTopic)
  }
  let tabContent =  <p>Please select a topic</p>
  if(selectedTopic){
    tabContent=(<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
    </div>);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcepts key={conceptItem.title} {...conceptItem}/>
              ))  }
          

            {/* 
            <CoreConcepts title="Components" 
            description="Core Building block of the UI"
            image={componentsImg} />

            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />

            <CoreConcepts
              {...CORE_CONCEPTS[1]} />
              {/* This is called the spread operator which will just split the given object into
              its subsequent parts /*}

            <CoreConcepts
              {...CORE_CONCEPTS[2]} />
           */}
            
          </ul>
        </section>

        <h2>Time to get started!</h2>
        <section>
          <h2>Examples</h2>
          <menu className="menu">
            <TabButton isSelected={(selectedTopic==='components')} onSelect={()=>handleSelect('components')}>Components</TabButton>

            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>

            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>

            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
        
        {/* {!selectedTopic &&  <p>Please select a topic</p>}
        {selectedTopic ? (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
        </div>
        ): null} */}
        {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
