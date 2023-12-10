import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function BasicLayout() {
  return (
    <>
      <Header />
      <div style={{width:"100%",minHeight:"100vh"}}>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}
export default BasicLayout