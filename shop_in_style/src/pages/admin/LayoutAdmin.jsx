import { Outlet } from "react-router-dom"
import HeaderAdmin from "../../components/admin/common/HeaderAdmin";
import SiderbarMenuAdmin from "../../components/admin/common/SiderbarMenuAdmin";
import FooterAmin from "../../components/admin/common/FooterAmin";

const LayoutAdmin = () => {
  return (
    <>
    <HeaderAdmin/>
     <div className="container-fluid">
       <div className="row">
         {/* SIDEBAR MENU  */}
       <SiderbarMenuAdmin/>
         {/* MAIN CONTENT */}
         <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
          {/* <Chart/> */}
          <Outlet/>

          
          <FooterAmin/>
         </main>
       </div>
     </div>
   </>
//    <>
//    <Outlet/>
//    </>
  )
}

export default LayoutAdmin