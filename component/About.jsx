import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/dist/client/image'

function About(props) {
  return (
    <section className="about_section layout_padding" id='about_section'>
      <div className="container  ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="img-box">
              <Image src="/images/slider-img2.png" width="500px" s height="400px" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About Us
                </h2>
              </div>
              <p>
                A food bank is a non-profit, charitable organization that distributes food to those who have difficulty purchasing enough to avoid hunger, usually through intermediaries like food pantries and soup kitchens. Some food banks distribute food directly with their own food pantries.
              </p>
                <div id='aboutUsMore' style={{display: 'none'}}>
                 <p> St. Mary's Food Bank was the world's first food bank, established in the US in 1967. Since then, many thousands have been set up all over the world. In Europe, which until recently had little need for food banks due to extensive welfare systems, their numbers grew rapidly after the global increase in the price of food which began in late 2006, and especially after the financial crisis of 2007–2008 began to worsen economic conditions for those on low incomes.
                  The growth of food banks has been welcomed by commentators who see them as examples of an active, caring citizenship. Other academics and commentators have expressed concern that the rise of foodbanks may erode political support for welfare provision. Researchers have reported that in some cases food banks can be inefficient compared with state-run welfare.
                  </p>
                </div>
              <a  onClick={()=>{
                
                  $("#aboutUsMore").toggle();
                
              }}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {}

export default About
