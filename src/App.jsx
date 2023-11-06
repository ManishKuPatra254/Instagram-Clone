
import { Fragment, useEffect } from 'react'
import './App.css'
import { ILogin } from './ILogin/ILogin';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IHome } from './IHome/IHome';
import { ISignUp } from './ISignUp/ISignUp';
import { useSelector } from 'react-redux';
import { auth } from './Firebase/Firebase';
import { useDispatch } from 'react-redux';
import { logInUser, loadingSetUser } from './UserStoreFeatures/UserStoreFeatures';

function App() {

  const user = useSelector((state) => state.data.user)
  // console.log(user);

  const dispathch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUsers => {
      if (authUsers) {
        dispathch(logInUser({
          uid: authUsers.uid,
          username: authUsers.displayName,
          email: authUsers.email,
        })
        );
        dispathch(loadingSetUser(false))
      }
      else {
        console.log('User not logged in')
      }
    })
  }, [])


  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {
              !user ? (
                <Route path='/' element={<Navigate to={'/home'} />} />
              ) : (
                <Fragment>
                  <Route path='/' element={<ILogin />} />
                  <Route path='/signup' element={<ISignUp />} />
                </Fragment>
              )}
            <Route path='/home' element={<IHome />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  )
}

export default App
