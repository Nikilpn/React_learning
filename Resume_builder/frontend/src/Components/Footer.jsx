import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C3E50" }} className='text-white mt-5'>

      <div className="container py-5">
        <div className="row">

          {/* Logo + About */}
          <div className="col-12 col-md-4 mb-4">
            <h4 className='fw-bold'>rBuilder</h4>
            <p style={{ color: "#AAAAAA" }}>Build professional resumes in minutes. Land your dream job faster with rBuilder.</p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className='fw-bold'>Quick Links</h5>
            <ul className='list-unstyled mt-3'>
              <li className='mb-2'><Link to="/" style={{ color: "#AAAAAA", textDecoration: "none" }}>Home</Link></li>
              <li className='mb-2'><Link to="/resume" style={{ color: "#AAAAAA", textDecoration: "none" }}>Resume Builder</Link></li>
              <li className='mb-2'><Link to="/about" style={{ color: "#AAAAAA", textDecoration: "none" }}>About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className='fw-bold'>Contact</h5>
            <ul className='list-unstyled mt-3' style={{ color: "#AAAAAA" }}>
              <li className='mb-2'>📧 nikhilpnnick1234@gmail.com</li>
              <li className='mb-2'>📞 +916238504386</li>
              <li className='mb-2'>📍 Kerala, India</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr style={{ borderColor: "#444444" }} />

        {/* Bottom */}
        <div className="row">
          <div className="col-12 text-center" style={{ color: "#AAAAAA" }}>
            <p className='mb-0'>© 2026 rBuilder. All rights reserved.</p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer