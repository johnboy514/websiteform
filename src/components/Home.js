import React from "react";
import {Button, Form, Container, Row}from 'react-bootstrap';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
// import backgroundImage from "../images/backgroundpic.jpg";
import designPic from "../images/designpic.jpg";




function Home() {

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);
  const [visible11, setVisible11] = useState(false);
  const [visible12, setVisible12] = useState(false);
  const [visible13, setVisible13] = useState(false);
  const [visible14, setVisible14] = useState(false);
  const [visible15, setVisible15] = useState(false);
  const [visible16, setVisible16] = useState(false);
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const organizationRef = useRef(null);
  const briefRef = useRef(null);
  const goalRef = useRef(null);
  const styleRef = useRef(null);
  const colorRef = useRef(null);
  const brandRef = useRef(null);
  const visionRef = useRef(null);
  const featsRef = useRef(null);
  const similarRef = useRef(null);
  const contentRef = useRef(null);
  const imagesRef = useRef(null);
  const linksRef = useRef(null);
  const shareRef = useRef(null);
  const gramRef = useRef(null);
  const colorPick1Ref = useRef(null);
  const colorPick2Ref = useRef(null);
  const colorPick3Ref = useRef(null);
  const colorPick4Ref = useRef(null);
  const colorPick5Ref = useRef(null);
  const colorPick6Ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  if (nameRef.current.value === '') {
    setVisible(true);
  } if (emailRef.current.value === '') {
    setVisible1(true);
  } if (organizationRef.current.value === '') {
    setVisible2(true);
  } if (briefRef.current.value === '') {
    setVisible3(true);
  } if (goalRef.current.value === '') {
    setVisible4(true);
  } if (styleRef.current.value === '') {
    setVisible5(true);
  } if (colorRef.current.value === '') {
    setVisible6(true);
  } if (brandRef.current.value === '') {
    setVisible7(true);
  } if (visionRef.current.value === '') {
    setVisible8(true);
  } if (featsRef.current.value === '') {
    setVisible9(true);
  } if (similarRef.current.value === '') {
    setVisible10(true);
  } if (contentRef.current.value === '') {
    setVisible11(true);
  } if (imagesRef.current.value === '') {
    setVisible12(true);
  } if (linksRef.current.value === '') {
    setVisible13(true);
  } if (shareRef.current.value === '') {
    setVisible14(true);
  } if (gramRef.current.value === '') {
    setVisible15(true);
  } if (colorPick1Ref.current.value === '') {
    setVisible16(true);
  } else {
    sendMail();
    }
  };

  (function () {
    emailjs.init("lXIIIeccwD3sd6Wtl");
  })();

  function sendMail() {
    if (nameRef.current.value && emailRef.current.value) {
      var params = {
        from_name: nameRef.current.value,
        from_email: emailRef.current.value,
        reply_to: emailRef.current.value,
        organization: organizationRef.current.value,
        brief: briefRef.current.value,
        goal: goalRef.current.value,
        style: styleRef.current.value,
        color: colorRef.current.value,
        brand: brandRef.current.value,
        vision: visionRef.current.value,
        feats: featsRef.current.value,
        similar: similarRef.current.value,
        content: contentRef.current.value,
        images: imagesRef.current.value,
        links: linksRef.current.value,
        share: shareRef.current.value,
        gram: gramRef.current.value,
        color_pick1: colorPick1Ref.current.value,
        color_pick2: colorPick2Ref.current.value,
        color_pick3: colorPick3Ref.current.value,
        color_pick4: colorPick4Ref.current.value,
        color_pick5: colorPick5Ref.current.value,
        color_pick6: colorPick6Ref.current.value,
      };
      emailjs.send('service_wo1ekqg', 'template_s1uyiz6', params).then(function (res) {});
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
                      <Form.Control type="text" ref={nameRef} placeholder="Name" />
                      {visible && <div className="text-danger">Please enter your name</div>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control type="email" ref={emailRef} placeholder="Email" />
                      {visible1 && <div className="text-danger">Please enter your Email</div>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formOrg">
                      <Form.Control type="textarea" ref={organizationRef} placeholder="Company/Organization Name (if applicable)" />
                      {visible2 && <div className="text-danger">Please enter your Company/Organization</div>}
                    </Form.Group>

                    <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Project Overview:</h4>

                    <Form.Group className="mb-3" controlId="formBrief">
                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                      Briefly describe your company/organization and its purpose:
                      </h5>
                      <Form.Control as="textarea" ref={briefRef} rows={3} placeholder="Give a brief description of your buisness or organization so we can get a better idea of what you may want!" />
                      {visible3 && <div className="text-danger">Please enter your message</div>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGoal">
                      <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                        What is the primary goal of your website?:
                      </h5>
                      <Form.Control as="textarea" ref={goalRef} rows={3} placeholder="Showcase Products/Services, Generate Leads, Provide Information" />
                      {visible4 && <div className="text-danger">Please enter your message</div>}
                    </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Design Preferences:</h4>

                      <Form.Group className="mb-3" controlId="formStyle">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Describe the overall style or theme you envision for your website:
                        </h5>
                        <Form.Control as="textarea" ref={styleRef} rows={3} placeholder="What is the general mood or vibe of the site you're going for?" />
                        {visible5 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formColor">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Are there any specific color schemes:
                        </h5>
                        <Form.Control as="textarea" ref={colorRef} rows={3} placeholder="Use the color palettes below to choose the colors and also let us know if you have a scheme in mind as well for the colors." />
                        {visible6 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formColor">
                        <h5 className="text-center" style={{ color: "#000000cc", fontFamily: "Dancing Script" }}>
                          Choose your color palette
                        </h5>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <Form.Control type="color" ref={colorPick1Ref} style={{ marginRight: "5px" }} />
                          <Form.Control type="color" ref={colorPick2Ref} style={{ marginRight: "5px" }} />
                          <Form.Control type="color" ref={colorPick3Ref} style={{ marginRight: "5px" }} />
                          <Form.Control type="color" ref={colorPick4Ref} style={{ marginRight: "5px" }} />
                          <Form.Control type="color" ref={colorPick5Ref} style={{ marginRight: "5px" }} />
                          <Form.Control type="color" ref={colorPick6Ref} />
                        </div>
                        {visible16 && <div className="text-danger">Please enter your color</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBrand">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Branding guidelines to adhere to:
                        </h5>
                        <Form.Control as="textarea" ref={brandRef} rows={3} placeholder="Are there any brand requirements for the site?" />
                        {visible7 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Functionality and Features:</h4>

                      <Form.Group className="mb-3" controlId="formVision">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          List the main pages or sections you envision for your website:
                        </h5>
                        <Form.Control as="textarea" ref={visionRef} rows={3} placeholder="Home, About Us, Services, Contact, Gallery" />
                        {visible8 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formFeats">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Are there any specific features or functionalities you would like to include?:
                        </h5>
                        <Form.Control as="textarea" ref={featsRef} rows={3} placeholder="Contact Form, E-commerce, Blog" />
                        {visible9 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Competitor Analysis:</h4>

                      <Form.Group className="mb-3" controlId="formSimilar">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Provide links to websites of your competitors or similar businesses. What do you like/dislike about their websites?
                        </h5>
                        <Form.Control as="textarea" ref={similarRef} rows={3} placeholder="This step is extremely helpful for streamlining your site's build time!" />
                        {visible10 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Content:</h4>

                      <Form.Group className="mb-3" controlId="formContent">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Do you already have written content for the website, or do you need assistance with content creation?
                        </h5>
                        <Form.Control as="textarea" ref={contentRef} rows={3} placeholder="Type Yes or No for this section if yes we will get in contect to get that info!" />
                        {visible11 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formImages">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Are there any specific images or multimedia elements you want to include?
                        </h5>
                        <Form.Control as="textarea" ref={imagesRef} rows={3} placeholder="Type Yes or No for this section if yes we will get in contect to get that info!" />
                        {visible12 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <h4 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script, cursive"}}>Additional Information:</h4>

                      <Form.Group className="mb-3" controlId="formLinks">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Are there any specific websites you admire in terms of design or functionality?
                        </h5>
                        <Form.Control as="textarea" ref={linksRef} rows={3} placeholder="Please link the sites you like and reasons why!" />
                        {visible13 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formShare">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          Is there anything else you would like to share or discuss regarding your website project?
                        </h5>
                        <Form.Control as="textarea" ref={shareRef} rows={3} placeholder="Your ideas go a long way in helping us shape your site so any input or info is always appreciated!" />
                        {visible14 && <div className="text-danger">Please enter your message</div>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGram">
                        <h5 className="text-center" style={{color: "#000000cc", fontFamily: "Dancing Script"}}>
                          If you have an Instagram or any social media you feel would help be get an idea of what you like aesthetically, link it.
                        </h5>
                        <Form.Control as="textarea" ref={gramRef} rows={3} placeholder="If you don't feel like linking a social dont worry just type anything here!" />
                        {visible15 && <div className="text-danger">Please enter your message</div>}
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
