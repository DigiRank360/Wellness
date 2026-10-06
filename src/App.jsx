import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Reviews from './pages/Reviews'
import Ayurveda from './pages/services/Ayurveda'
import Gym from './pages/services/Gym'
import PoolPartiesAndGroup from './pages/services/PoolPartiesAndGroup'
import SwimmingPool from './pages/services/SwimmingPool'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services/ayurveda" element={<Ayurveda />} />
        <Route path="services/gym" element={<Gym />} />
        <Route path="services/swimming-pool" element={<SwimmingPool />} />
        <Route path="services/pool-parties-and-group" element={<PoolPartiesAndGroup />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
