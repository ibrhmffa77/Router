import React from 'react'
import './About.scss'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <div className="about">
           <div className="about__text">
            <h2>About us</h2>
            <p><a href="">Home/About us</a></p>
           </div>
        </div>
        <section>
            <div className="see">
                <div className="see__one">
                      <img src="https://preview.colorlib.com/theme/ithost/img/section-title-icon.png" alt="" />
                      <p>THE BEST OUT THERE</p>
                      <h2>See our features</h2>
                      <input type="searc" id='inp' placeholder='Enter your websites name'/>
                      <button>Search</button>
                </div>
                <div className="see__two">

                </div>
            </div>
        </section>
    </div>
  )
}

export default About