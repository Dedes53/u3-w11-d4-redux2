import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import FavouriteList from './components/FavourieList'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouriteList />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
