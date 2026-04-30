import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section style={{
        width: "100%", overflowX: "hidden", height: "450px",
        backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",
        backgroundSize: "cover", backgroundAttachment: "fixed"
      }}>
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 shadow border py-5 rounded my-5 text-center">
            <h4>Designed to get hired.</h4>
            <p>Your skills, your story, your next job — all in one.</p>
            <Link to={"/resume"}>
              <button className='btn btn-primary'>MAKE YOUR RESUME</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>


      <section>
        <h1 className='text-center p-5'>Tools</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-12 col-md-6">
            <img className='w-75 ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
          </div>
        </div>
      </section>


      <section style={{ width: "100%", overflowX: "hidden", height: "450px", backgroundImage: "url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>

      </section>

      <section className='p-5'>
  <h1 className='text-center'>Testimony</h1>
  <div className="row align-items-center mt-4">

    {/* Left text side */}
    <div className="col-12 col-md-6">
      <h4>Trusted by professionals worldwide.</h4>
      <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
      <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
      <p>Join thousands of job-seekers who've fast-tracked their careers with a résumé that truly stands out.</p>
    </div>

    {/* Right image grid side */}
    <div className="col-12 col-md-6">
      <div className="row">
        <div className="col-3"><img src="https://randomuser.me/api/portraits/women/1.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/women/2.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/men/2.jpg" className='w-100 mb-3' alt="" /></div>

        <div className="col-3"><img src="https://randomuser.me/api/portraits/women/3.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/men/3.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/men/4.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/men/5.jpg" className='w-100 mb-3' alt="" /></div>

        <div className="col-3"><img src="https://randomuser.me/api/portraits/women/4.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/women/5.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/men/6.jpg" className='w-100 mb-3' alt="" /></div>
        <div className="col-3"><img src="https://randomuser.me/api/portraits/men/7.jpg" className='w-100 mb-3' alt="" /></div>
      </div>
    </div>

  </div>
</section>

    </>
  )
}

export default LandingPage