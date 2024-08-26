import './App.css'
import HomeView from './views/HomeView'
import FormView from './views/FormView'
import ListView from './views/ListView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheHeader from './components/TheHeader/TheHeader'
import TheFooter from './components/Footer/TheFooter'


function App() {

  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/form" element={<FormView />} />
        <Route path="/list" element={<ListView />} />
      </Routes>
      <TheFooter />
      <Routes>
        <Route path="/contact" element={<FormView />} />
        <Route path="/privacyPolitics" element={<ListView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
