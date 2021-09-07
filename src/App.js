import React,{useState,useEffect} from 'react';
import axios from 'axios';
//axios returns promise /// to promise k liye await use karte h ///
import Header from './components/ui/Header';
import Search from './components/ui/Search';

import CharacterGrid from './components/characters/CharacterGrid';

import './App.css';
//sync ka kya kaam hota h na wo .then wala likhna km kar deta h iske alawa kuch nhi ....
const App = () => {
  const [items,setItem]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
     // console.log(result.data);
      setItem(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q) }/>
      <CharacterGrid isLoading={isLoading} items={items} />
    
    </div>
  );
}

export default App;
