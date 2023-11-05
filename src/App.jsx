
import { Fragment } from 'react'
import './App.css'
import { InstaLogin } from './ILogin/ILogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IHome } from './IHome/IHome';

function App() {
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<InstaLogin />} />
            <Route path='/home' element={<IHome />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  )
}

export default App
