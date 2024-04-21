import Header from './Components/Header'
import Footer from './Components/Footer'
import Loading from "./Components/Loading/Loading";
import { useState,useEffect } from "react";
import Home from './Components/Home/Home'
function App() {
  const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);
    },[])

  return (
    <>
     {isLoading ? <Loading /> :
     (  <>
       <Header />
       <Home/>
       <Footer/>
        </>
     )}
    
          
    </>
  );
}

export default App;
