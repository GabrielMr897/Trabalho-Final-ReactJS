import balacobanner from "../../assets/balacobanner.png"
import balacobanner2 from "../../assets/balacobanner2.png"
import balacobanner3 from "../../assets/balacobanner3.png"
import next from "../../assets/proximo.png"
import prev from "../../assets/anterior.png"
import "./Home.css"
export const Slide = () => {



    return(
        <div id="carouselExampleInterval" className="carousel slide w-90" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src={balacobanner} className="d-block w-90" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={balacobanner2} className="d-block w-90" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={balacobanner3} className="d-block w-90" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}