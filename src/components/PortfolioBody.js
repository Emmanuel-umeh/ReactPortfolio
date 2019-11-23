import React, {Component} from 'react'
import '../assets/css/Portfolio.css'
import '../assets/css/animate.css'
import '../assets/css/media-queries.css'



export default class PortfolioBody extends Component{
    render(){
      return(
        <div className="top-content">
      <div className="row no-gutters">
        <div className="col">
          <div id="carousel-example" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./assets/images/1.jpg" className="d-block w-100" alt="img1" />
                <div className="carousel-caption">
                  <h1 className="wow fadeInLeftBig">Carousel Template with Bootstrap 4</h1>
                  <div className="description wow fadeInUp">
                    <p>
                      This is a free Carousel template made with the Bootstrap 4 framework.
                      Check it out now. Download it, customize and use it as you like!
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/assets/images/logo.png" className="d-block w-100" alt="img2" />
                <div className="carousel-caption">
                  <h1 className="wow fadeInLeftBig">This is Slide 2 of our Carousel</h1>
                  <div className="description wow fadeInUp">
                    <p>
                      You can download this free template on <a href="https://azmind.com" target="_blank">AZMIND</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/img/backgrounds/3.jpg" className="d-block w-100" alt="img3" />
                <div className="carousel-caption">
                  <h1 className="wow fadeInLeftBig">This is Slide 3, the Last One</h1>
                  <div className="description wow fadeInUp">
                    <p>
                      After you download it, you can customize and use it as you like. That's great!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    }
  }