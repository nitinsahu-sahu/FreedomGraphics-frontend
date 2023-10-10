import React from 'react'
import { Link } from 'react-router-dom'

function Trusted() {
  return (
    <div className='row home' style={{ marginTop: "5%", marginBottom: "5%", backgroundColor: "#eceff4" }}>
      <div className='col-sm-12 col-md-12 col-lg-12 pt-4'>
        <h3>Trusted By 50+ Companies</h3>
      </div>
      <div className='col-sm-6 col-md-12 col-lg-12 d-flex justify-content-around py-5'>
        <div className='slide'>
          <Link to="https://corp-smart.com/">
            <img src="./company-logo/corp-smart-logo.png" alt='corpsmart' />
          </Link>
        </div>
        <div className='slide'>
          <Link to="https://magehire.com/">
            <img src="./company-logo/magehire-logo.png" alt='magehire' />
          </Link>
        </div>
        <div className='slide'>
          <Link to="http://diradharti.com/">
            <img src="./company-logo/DiraDharti-logo.png" alt='diradhrti' />
          </Link>
        </div>
        <div className='slide'>
          <Link to="https://corp-smart.com/">
            <img src="./company-logo/skipstone-logo.jpg" alt='skipstone' />
          </Link>
        </div>
        <div className='slide'>
          <Link to="https://corp-smart.com/">
            <img src="./company-logo/wrexim-infotech-logo.png" alt='wi' />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Trusted
