import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import { Home, Edit, Compose, Navbar, Post, Footer, LandingPage } from './utils/exports'

const AppContent = () => {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      {!isLandingPage && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blogs/new' element={<Compose />} />
          <Route path='/compose' element={<Compose />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/posts/:id/edit' element={<Edit />} />
          <Route path='/about' element={<Home />} />
        </Routes>
      </main>

      {!isLandingPage && <Footer />}
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
