
import SideNavbar from "./sideBar";
import RightSide from "./rightSide"
import Footer from "./whiteFooter";


const Layout = ({ children }) => {
  return (
    <>
      <div className="grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-4 ">
        <div className="lg:col-span-1 md:col-span-1 sm:col-span-4"><SideNavbar /></div>
        <div className="lg:col-span-4 md:col-span-3 sm:col-span-4"><main >{children}</main></div>
        <div className="lg:col-span-2 md:col-start-2 md:col-span-2 sm:col-span-4"><RightSide /></div>
      </div>
      <Footer />
    </>
  );
}
// Hook




export default Layout;
