import React, {lazy, useEffect, Suspense} from 'react'
import {useDispatch} from "react-redux"
import Hero from "./components/Hero/Hero"
import Intro from "./components/Intro/Intro"
import { setApplicationsList } from './redux/applicationsList'
import appDataJSON from "./appData.json"
const AppSections = lazy(() => import("./components/AppSections/AppSections"))
const Footer = lazy(() => import("./components/Footer/Footer"))

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setApplicationsList(appDataJSON.applications))
  }, [])

  return (
    <>
      <Hero />
      <Intro/>
      <Suspense fallback={"Loading..."}>
        <AppSections/>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
