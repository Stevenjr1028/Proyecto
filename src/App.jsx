import Header from './Components/Header'
import Maimboard from './Components/Maimboard'
import unsplash from './api/unsplash.js'
import { useState } from 'react'
import { useEffect } from 'react'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [pines, setNewPins] = useState([])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term

      }
    })

  }

  

  const onSearchSubmit = (term) => {
    console.log("on search submit", term)
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pines,
      ]

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    })



  }

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pines = ["car", "cats", "lions", "dogs", "ocean", "tokyo", "ramen"];

    pines.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      )
    })
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    })
  }

  useEffect(() => {
    getNewPins();
  }, []);


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registro/>} />
        <Route path="/inicio" element={
         
          <Maimboard pines={pines} />

        } />
   </Routes>
    </BrowserRouter>

      

    </>

  )
}

export default App
