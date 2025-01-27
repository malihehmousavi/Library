
import aks from "./assets/download.png"
import { Link } from "react-router-dom"


const Contact = () => {
    return (
        <div >
            <img src={aks} alt="" className="rounded mx-auto d-block" style={{ width: "80%" }} />
            <hr />
            <div className="text-success text-center">
                <p >آدرس:خیابان رضا13-کوچه یاسمین-پلاکـ313</p>
                <span>تماس:  </span>
                <Link to="/" >05133137333</Link>

                <p>ایمیل:
                    <Link to="/" >bookrr@yahoo.com</Link></p>
                <p>تلگرام:
                    <Link to="/" >@bookrr</Link> </p>
                {/* <FontAwesomIcon icon={}></> */}
            </div>
        </div>
    )
}


export default Contact