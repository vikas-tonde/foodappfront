import React from 'react'
import PropTypes from 'prop-types'

function HomeSlider(props) {
  return (
    <div className='container'>
        <div className="row">
          <h1 className="my-3 h1 text-center">Gallery</h1>
          <hr />
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      className="w-100 shadow-1-strong rounded mb-4"
      src="https://www.tfikidsfund.org/wp-content/uploads/2020/02/iStock-1159484173-1024x683.jpg"
      alt="Wintry Mountain Landscape"
      />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    {/* <img
      src="https://www.efsa.europa.eu/sites/default/files/styles/lg_col_12_16x9/public/news/food-donations.jpg?h=82f92a78&itok=-qOvxzSs"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    /> */}
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://www.epa.gov/sites/default/files/styles/medium/public/2015-11/manpic.jpg?itok=YnvEqbSe"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://media.istockphoto.com/photos/millennial-woman-is-taking-a-box-of-food-and-drink-at-the-food-and-picture-id1318880638?b=1&k=20&m=1318880638&s=170667a&w=0&h=DEmcjT1oIycEs7Jvq6SlkmPQOBhpX6seyUVVrtakTE8="
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>

    </div>
  )
}

HomeSlider.propTypes = {}

export default HomeSlider
