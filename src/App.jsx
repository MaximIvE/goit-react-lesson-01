import PaintingList from './components/PaintingList';
import Section from './components/Section.jsx'
import data from './data';
import './App.css';

function App() {
  return ( 
    <div>
      
      <Section title="Топ недели">
        <PaintingList items={data}/>
        <PaintingList items={data}/>
      </Section>
      <Section title="123"/>
      <Section>
        <PaintingList items={data}/>
      </Section>
    </div>
  );
}

export default App; 

