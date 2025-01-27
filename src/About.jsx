
import aks from "./assets/aboutme.jpg"

// in index.js or App.js  
// import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div>
            <img src={aks} alt=""   className="rounded mx-auto d-block"  style={{ width: "80%" }} />
            <hr />
            <div className="text-success text-center">
            <p >/ما همه روزه از ساعت 7 الی 21 درخدمت هستیم./</p>
           
      </div>
    
    </div>
  )
}

export default About
