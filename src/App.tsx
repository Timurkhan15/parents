import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { MainPage } from './containers/MainPage/MainPage'
import { ClassList } from './containers/ClassList/ClassList'
import { Login } from './containers/Login/Login'
import { AdminPage } from './containers/AdminPage/AdminPage'
import { AddNewStudent } from './containers/AddNewStudent/AddNewStudent'
import { FinancePage } from './containers/FinancePage/FinancePage'
import { FinanceInPage } from './containers/FinancePage/FinanceInPage/FinanceInPage'
import { FinanceSpendsPage } from './containers/FinancePage/FinanceSpendsPage/FinanceSpendsPage'
import { DeleteStudentPage } from './containers/DeleteStudentPage/DeleteStudentPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/classList' element={<ClassList />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/addNewStudent' element={<AddNewStudent />}></Route>
          <Route path='/finances' element={<FinancePage />}></Route>
          <Route path='/finances/in' element={<FinanceInPage />}></Route>
          <Route path='/finances/spends' element={<FinanceSpendsPage />}></Route>
          <Route path='/deleteStudent' element={<DeleteStudentPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
