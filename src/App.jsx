// // import './App.css'
//import Pin from './Components/Pin'
//import Modal from './Components/Modal'
//import ModalAnPin from './Components/ModalAnPin'
import FinalBoard from './Components/FinalBoard'
import Login from './Pages/Login'
import Header from './Components/Header'
import Maimboard from './Components/Maimboard'
import unsplash from './api/unsplash'
function App() {

  const getImages = (term) =>{
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term

      }
    })
    
  }

  const onSearchSubmit = (term) =>{
    console.log("on search submit", term)
    getImages(term)

  }
  
  
  return (
   <>
     <Header onSubmit={onSearchSubmit}/>
     <Maimboard/>

   </>
   
  )
}

export default App
