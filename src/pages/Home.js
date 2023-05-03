import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ data }) => {
  return (
    <>
      <div id="body">
        <h2 className="text-center">Courses</h2>
        <div className="container">
          <div className="row">
            {
              data.map((item) => (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <img className="img-fluid mb-4" src={item.src} />
                  <h4><Link to='/details'>{item.title}</Link></h4>
                  <p>{item.des}</p>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Home