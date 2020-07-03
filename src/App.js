import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/UI/header';
import axios from 'axios';
import Character from './components/characters/character';
import Search from './components/UI/search';


const App = ()=> {
  const [items,setItems]=useState(['']);
  const [isLoading,setIsLoading]=useState(true);
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async ()=>{
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      // console.log(result.data);
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)} />
      <Character items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
