
import { Fragment } from 'react'
import './App.css'
import { InstaLogin } from './ILogin/ILogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';

function App() {
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<InstaLogin />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  )
}

export default App
