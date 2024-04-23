function Footer() {
    return (       
        <footer className="text-center text-lg-start text-muted" style={{ backgroundColor: 'rgba(213, 217, 242, 1)' }}>  
          <section className="font">
            <div className="container text-center text-md-start">          
              <div className="row">             
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">              
                  <h6 className="fw-bold mb-4">
                    <i className="fas fa-star me-3 text-secondary"></i>WDB
                  </h6>
                  <p>
                  Thank you for taking your time to fill out the form and we will be back to you shortly!
                  </p>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h5 className="">Developer Links</h5>

                  <ul className="list-unstyled mb-0">

                  <li>
                    <span className="text-black">John I-M</span>
                    &nbsp;
                    <a href="https://www.linkedin.com/in/john-ifert-miller-36231126a/" className="icon-link">
                      <i className="fab fa-linkedin-in" style={{ color: 'black' }}></i>
                    </a>
                    &nbsp;
                    <a href="https://github.com/johnboy514" className="icon-link">
                      <i className="fab fa-github" style={{ color: 'black' }}></i>
                    </a>
                  </li>

                    <li>
                      <span className="text-black">Robert O</span>
                      &nbsp;
                      <a href="https://www.linkedin.com/in/robert-obernier-700b36269/" className="icon-link">
                        <i className="fab fa-linkedin-in" style={{ color: 'black' }}></i>
                      </a>
                      &nbsp;
                      <a href="https://github.com/rjo6615" className="icon-link">
                        <i className="fab fa-github" style={{ color: 'black' }}></i>
                      </a>
                    </li>

                  </ul>
                </div>      
              </div>        
            </div>
          </section>
        </footer>
    )
}

export default Footer;