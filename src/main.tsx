import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {ShowData} from './routes/showData.tsx'
import Parent from './propdrilling/parent.tsx'
import { UserProvider } from './userContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/showData" element={<ShowData />} />
          <Route path="/propdrill" element={<Parent />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)

