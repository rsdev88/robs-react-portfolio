import React, {useEffect} from 'react'
import {useDispatch} from "react-redux"
import Hero from "./components/Hero/Hero"
import Intro from "./components/Intro/Intro"
import AppSections from "./components/AppSections/AppSections"
import Footer from "./components/Footer/Footer"
import { setApplicationsList } from './redux/applicationsList'
import appDataJSON from "./appData.json"

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setApplicationsList(appDataJSON.applications))
  }, [])

  return (
    <>
      <Hero />
      <Intro/>
      <AppSections/>
      <Footer />
    </>
  )
}

export default App
