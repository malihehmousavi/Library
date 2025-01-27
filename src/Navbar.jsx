import { Link, Outlet } from "react-router-dom"


const Navbar = () => {
  return (
    <div >
      <p className="text-center fs-1 p-3 mb-2 bg-secondary text-white border border-4">کتابخانه دل</p>
      <div className="Navbar">
<Link to="./books">کتابها</Link>
<Link to="./about">درباره ما</Link>
<Link to="./contact">تماس با ما</Link>

</div>
<hr />
<div style={{paddingRight : "40px" , fontSize : "30px"}}>
<Outlet ></Outlet>
    </div>
    </div>
  )
}
 
export default Navbar
