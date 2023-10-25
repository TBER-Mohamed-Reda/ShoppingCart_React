import { useEffect } from 'react';
import { useState } from 'react';
type Product = {
  id: number;
  quantity: number;
};
const useLocalStorage=(key:string,initialValue:Product[])=>{
  const [value,setValue]=useState(()=>{
    try{
      const storedValue=localStorage.getItem(key);
      return  storedValue?JSON.parse(storedValue):initialValue;
    }
    catch(error){
      console.error("Error loading data from local storage:", error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  },[key,value]);
    return[value,setValue];
}
export default useLocalStorage;