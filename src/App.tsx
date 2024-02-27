import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { MainPage } from './containers/MainPage/MainPage'
import { ClassList } from './containers/ClassList/ClassList'
import { Login } from './containers/Login/Login'
import { AdminPage } from './containers/AdminPage/AdminPage'
import { FinancePage } from './containers/FinancePage/FinancePage'
import { FinanceInPage } from './containers/FinancePage/FinanceInPage/FinanceInPage'
import { FinanceSpendsPage } from './containers/FinancePage/FinanceSpendsPage/FinanceSpendsPage'
import { DeleteStudentPage } from './containers/AdminPage/DeleteStudentPage/DeleteStudentPage'
import { AddNewStudent } from './containers/AdminPage/AddNewStudent/AddNewStudent'
import { AddNewInSum } from './containers/AdminPage/AddNewInSum/AddNewInSum'
import { AddNewSpend } from './containers/AdminPage/AddNewSpend/AddNewSpend'

function App() {

  return (
    <BrowserRouter basename='/'>
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
          <Route path='/addNewInSum' element={<AddNewInSum />}></Route>
          <Route path='/addNewSpend' element={<AddNewSpend />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
