function Footer() {
    return (       
        <footer className="text-center text-lg-start bg-white text-muted">  
          <section className="font">
            <div className="container text-center text-md-start mt-5">          
              <div className="row mt-3">             
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">              
                  <h6 className="fw-bold mb-4">
                    <i className="fas fa-star me-3 text-secondary"></i>WebDevBoyz
                  </h6>
                  <p>
                  Thank you for taking your time to fill out the form and we will be back to you shortly!
                  </p>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Info</h6>
                  <p><i className="fas fa-home me-3 text-secondary"></i> Marshall, NC 28753, US</p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    wild.bergamot.gardening@gmail.com
                  </p>
                </div>      
              </div>        
            </div>
          </section>
        </footer>
    )
}

export default Footer;