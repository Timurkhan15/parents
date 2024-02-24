import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { MainPage } from './containers/mainPage/MainPage'
import { ClassList } from './containers/ClassList/ClassList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/classList' element={<ClassList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
