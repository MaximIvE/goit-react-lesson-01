import Painting from './components/painting';
import data from './data';
import './App.css';




function App() {
  return ( 
    <div>
      <Painting 
        
        title={data[0].title} 
        price={data[0].price} 
        authorUrl={data[0].author.url} 
        authorTag={data[0].author.tag}
      />

      <Painting 
        url={data[1].url} 
        title={data[1].title} 
        price={data[1].price} 
        authorUrl={data[1].author.url} 
        
      />

      <Painting 
        url={data[2].url} 
        title={data[2].title} 
        price={data[2].price} 
        authorUrl={data[2].author.url} 
        authorTag={data[2].author.tag}
      />
    </div>
  );
}

export default App;

