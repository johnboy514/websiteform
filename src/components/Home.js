import React from "react";
import {Button, Form, Container, Row}from 'react-bootstrap';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
// import backgroundImage from "../images/backgroundpic.jpg";
import designPic from "../images/designpic.jpg";




function Home() {

  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const address = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.current.value === '') {
      setVisible(true);
    } if (email.current.value === '') {
      setVisible2(true);
    } if (message.current.value === '') {
      setVisible1(true);
    } if (address.current.value === '') {
      setVisible3(true);
    } else {
      sendMail();
    }
  };

  (function () {
    emailjs.init("lXIIIeccwD3sd6Wtl");
  })();

  function sendMail() {
    if (name.current.value && email.current.value && email.current.value) {
      var params = {
        from_name: name.current.value,
        from_email: email.current.value,
        reply_to: email.current.value,
        message: message.current.value,
        address: address.current.value,
      };
      emailjs.send('service_wo1ekqg', 'template_jff3baf', params).then(function (res) {});
      alert("Thank you for sending a message!");
      window.location.reload(false);
    } else {
      alert('Failed to send message');
    }
  };

  const pageStyle = {
    backgroundImage: 'url(' + designPic + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '750px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fefae0',
  };

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  return (
    <div className="backgroundcolor">
    <div style={pageStyle}>
      <section className="font">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="mb-5 mb-lg-0 mt-5 slideInLeft" style={{ backgroundColor: 'rgba(213, 217, 242, 1)' , border: "solid" , borderColor: "#283618" }}>
                <h1 className="my-5 display-3 fw-bold ls-tight" style={{ color: 'black' }}>
                  Website <br />
                  <span style={{ color: 'black' }}>Builder</span>
                </h1>
                <p style={{ color: "#000000cc", fontSize: "20px" }}>
                Hello and welcome to our questionaire for building your website. 
                Please take your time and answer the questions below to help us get an idea of what you want for your website!
                </p>
              </div>
            <center className='mt-5'>
              <div className="mb-5 mb-lg-0 slideInRight">
                <div className="requestQuoteCard" style={{ 
                      maxWidth: '800px', 
                      maxHeight: '', 
                      backgroundColor: 'rgba(213, 217, 242, 1)', // Adjust the alpha value (0.7 in this example)
                      border: '2px solid #000000cc', 
                    }}>                     
                  <div className="card-body py-5 px-md-">
                  <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Contact Information:</h4>
                    <Form onSubmit={handleSubmit} className="px-3">
                      <Form.Group className="mb-3 pt-3" controlId="formName">
                        <Form.Control type="text" ref={name} placeholder="Name" />
                        {visible && <div className="text-danger">Please enter your name</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="email" ref={email} placeholder={"Email"} pattern="^\S+@\S+\.(com|net|edu|org|gov)$" title="Please enter a valid email address ending with .com" />
                        {visible2 && <div className="text-danger">Please enter your Email</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formOrg">
                        <Form.Control type="textarea" ref={message} placeholder={"Company/Organization Name (if applicable)"}  title="Company/Organization Name (if applicable)" />
                        {visible2 && <div className="text-danger">Please enter your Company/Organization</div>}
                      </Form.Group>

                    <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Project Overview:</h4>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Briefly describe your company/organization and its purpose:</h5>
                      <Form.Group className="mb-3" controlId="formBrief">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Briefly describe your company/organization and its purpose:"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>What is the primary goal of your website? (e.g., showcase products/services, generate leads, provide information):</h5>
                      <Form.Group className="mb-3" controlId="formGoal">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="What is the primary goal of your website? (e.g., showcase products/services, generate leads, provide information):"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Design Preferences:</h4>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Describe the overall style or theme you envision for your website:</h5>
                      <Form.Group className="mb-3" controlId="formStyle">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Describe the overall style or theme you envision for your website"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Are there any specific color schemes:</h5>
                      <Form.Group className="mb-3" controlId="formColor">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Are there any specific color schemes"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Branding guidelines to adhere to:</h5>
                      <Form.Group className="mb-3" controlId="formBrand">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Branding guidelines to adhere to"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Functionality and Features:</h4>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>List the main pages or sections you envision for your website (e.g., Home, About Us, Services, Contact):</h5>
                      <Form.Group className="mb-3" controlId="formVision">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="List the main pages or sections you envision for your website (e.g., Home, About Us, Services, Contact)"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Are there any specific features or functionalities you would like to include? (e.g., contact form, e-commerce, blog):</h5>
                      <Form.Group className="mb-3" controlId="formFeats">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Are there any specific features or functionalities you would like to include? (e.g., contact form, e-commerce, blog)"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Competitor Analysis:</h4>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Provide links to websites of your competitors or similar businesses. What do you like/dislike about their websites?</h5>
                      <Form.Group className="mb-3" controlId="formSimilar">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Provide links to websites of your competitors or similar businesses. What do you like/dislike about their websites?"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Content:</h4>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Do you already have written content for the website, or do you need assistance with content creation?</h5>
                      <Form.Group className="mb-3" controlId="formContent">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Do you already have written content for the website, or do you need assistance with content creation?"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Are there any specific images or multimedia elements you want to include?</h5>
                      <Form.Group className="mb-3" controlId="formImages">
                      <Form.Control as="textarea" ref={message} placeholder="Yes/No"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Additional Information:</h4>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Are there any specific websites you admire in terms of design or functionality?</h5>
                      <Form.Group className="mb-3" controlId="formLinks">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Please link the sites you like and reasons why!"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>Is there anything else you would like to share or discuss regarding your website project?</h5>
                      <Form.Group className="mb-3" controlId="formShare">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="Is there anything else you would like to share or discuss regarding your website project?"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>If you have an instagram or any social media you feel would help be get an idea of what you like aesthetically link it</h5>
                      <Form.Group className="mb-3" controlId="formGram">
                      <Form.Control as="textarea" ref={message} rows={3} placeholder="If you have an instagram or any social media you feel would help be get an idea of what you like aesthetically link it"/>
                        {visible1 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <div style={{ borderBottom: '2px solid #acd0ff' }}></div>
                      
                      <div className="d-flex justify-content-center mt-3"> {/* Center the button */}
                        <Button className="button-pop-out" style={{ backgroundColor: '#acd0ff', color: 'black' }} type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              </center>
            </div>
          </div>
        </div>
      </section>
    </div>
 <section className='mt-5'>
 </section>
  <center>
  <Container>
  <Row className="d-flex flex-wrap justify-content-center">
    </Row>
  </Container>
  </center>
  </div>
  )
}


export default Home;
