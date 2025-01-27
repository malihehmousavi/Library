
import aks from "./assets/404.jpg"
import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    <div >
      <img src={aks} alt="" style={{ width: "80%", padding: "1rem" }} />
      <Link to="/" className="Backmenu">برگشت به صفحه اصلی</Link>
    </div>
  )
}

export default Notfound
