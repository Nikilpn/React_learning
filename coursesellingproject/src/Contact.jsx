import React from 'react'
function Contact() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img style={{width:"100%"}} src="https://www.go.ooo/img/bg-img/Login.jpg" alt="" />
          </div>
          <div className="col-6 mt-5">
            <form action="" className="shadow p-5">
              <div className="mb-3">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Contact</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Message</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <button className="btn btn-success">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact