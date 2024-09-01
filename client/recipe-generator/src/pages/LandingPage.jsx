// import React from 'react';
// import ReactDOM from 'react-dom';
// import "../css/LandingPage.css";

// function App() {
//     return (
//       <div>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <title>Smart Recipe Generator</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
//         <style dangerouslySetInnerHTML={{__html: "\n        \n    " }} />
//         <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid" style={{backgroundColor: '#F5DEB3'}}>
//             <a className="navbar-brand" href="#" style={{fontFamily: 'cursive', fontWeight: 'bolder'}}>
//               <img src="pics/SRG.png" alt="" height={60} width={60} />
//               Smart Recipe Generator</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <li className="nav-item">
//                   <a href="#services" className='a'>Our Services</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 </li>
//                 <li className="nav-item">
//                   <a href="#team" className='a'>About Us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 </li>
//                 <li className="nav-item">
//                   <a href="#reach" className='a'>Reach Us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 </li>
//               </ul>
//             </div>
//             <br /><br />
//           </div></nav>
//         {/*-*/}
//         <div className="container">
//           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-indicators">
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
//             </div>
//             <div className="carousel-inner">
//               <div className="carousel-item active" data-bs-interval={1000}>
//                 <img src="pics/banner1.jpg" className="d-block w-100" alt="..." height="670px" width="700px" />
//               </div>
//               <div className="carousel-item" data-bs-interval={1000}>
//                 <img src="pics/banner2.jpg" className="d-block w-100" alt="..." height="670px" width="700px" />
//               </div>
//               <div className="carousel-item" data-bs-interval={1000}>
//                 <img src="pics/banner3.jpg" className="d-block w-100" alt="..." height="670px" width="700px" />
//               </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon" aria-hidden="true" />
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//               <span className="carousel-control-next-icon" aria-hidden="true" />
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//         {/*-*/}
//         <div className="services">
//           <center>
//             <h2 style={{backgroundColor: '#F5DEB3'}} id="services">
//               Our Services
//             </h2>
//             <br />
//           </center>
//           <div className="container">
//             <div className="row">
//               <div className="card" style={{width: '18rem'}}>
//                 <img src="pics/serv1.png" className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">Ingredient Input</h5>
//                   <p className="card-text">
//                     Users can enter the ingredients they have at home.
//                     Provide a user-friendly interface with an auto-suggest feature to help users input ingredients easily.
//                   </p>
//                 </div>
//               </div>
//               <div className="card" style={{width: '18rem', marginLeft: '10px', marginRight: '10px'}}>
//                 <img src="pics/serv2.png" className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">Recipe Generation</h5>
//                   <p className="card-text">
//                     The website will search its database to find recipes that can be made with the given ingredients.
//                     Include a matching algorithm that suggests recipes based on ingredient availability (e.g., partial matches, exact matches).
//                   </p>
//                 </div>
//               </div>
//               <div className="card" style={{width: '18rem', marginLeft: '10px', marginRight: '10px'}}>
//                 <img src="pics/serv3.png" className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">Recipe Details</h5>
//                   <p className="card-text">
//                     Once a recipe is found, provide detailed instructions, cooking time, and serving size.
//                     Option to view alternative recipes if additional ingredients are available.
//                   </p>
//                 </div>
//               </div>
//               <div className="card" style={{width: '18rem', marginLeft: '10px', marginRight: '10px'}}>
//                 <img src="pics/serv4.png" className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">Nutrition Information</h5>
//                   <p className="card-text">
//                     Provide nutritional information for each recipe, potentially integrating with a third-party API for accurate data.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <br /><br />
//         </div>
//         {/* <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>*/}
//         {/**/}
//         <div className="team">
//           <center>
//             <h2 style={{backgroundColor: '#F5DEB3'}} id="team">
//               About Us
//             </h2>
//           </center>
//           <div className="container">
//             <br />
//             <div className="row">
//               <div className="col-md-12 bg-white offset-md-0">
//                 <div className="about-content">
//                   <center>
//                   <h1>Welcome to Smart Recipe Generator</h1>
//                 </center>
//                 <br />
//                 Our Story <br />
//                 Our journey began with a simple question: "What if cooking could be easier, faster, and more enjoyable for everyone?" &nbsp; &nbsp; Our team of foodies and developers came together to create a web application that would make cooking easier, faster, and more enjoyable. We drew inspiration from the world's cuisines, cooking techniques, and dietary preferences to create a platform that caters to diverse tastes and needs. <br /><br />
//                 How it works <br />
//                     Our smart recipe generator uses machine learning algorithms to analyze your preferences, dietary requirements, and cooking habits to suggest personalized recipes. Simply input your ingredients, cooking time, and preferences, and our app will generate a tailored recipe for you.  <br /><br />
//                     Our Mission <br />
//                     At Smart Recipe Generator, we aim to empower home cooks, professional chefs, and food enthusiasts to explore new flavors, reduce food waste, and cook with love. Join our community today and start cooking smarter, not harder!
//                     we're passionate about revolutionizing the way you cook. Our smart recipe generator is designed to inspire creativity, simplify meal planning, and make cooking a joyful experience for everyone. <br /><br />

//                     Join Our Community <br />
//                     Sign up today and start cooking smarter, not harder! Share your favorite recipes, cooking tips, and connect with fellow foodies. Together, let's make cooking a joyful and creative experience for everyone. <br /><br /><br />
                   
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <br /><br />
//         {/**/}
//         <div className="reach">
//           <center>
//             <h2 style={{backgroundColor: '#F5DEB3'}} id="reach">
//               Reach Us
//             </h2>
//           </center>
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.175135209826!2d76.65720287561291!3d30.516086474689597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1721073593372!5m2!1sen!2sin" width={1500} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
//         </div>
//         <div className="foot">
//           <div className="footer-container" style={{backgroundColor: '#F5DEB3'}}>
//             <div className="footer-logo-description">
//               <img src="pics/SRG.png" alt="Smart Recipe Generator" />
//               <p>Your go-to platform for discovering and connecting with top influencers.</p>
//               <h3> @Abhishek Bansal</h3>
//               <h5>Copyright</h5>
//             </div>
//             <div className="footer-quick-links">
//               <h4>Quick Links</h4>
//               <ul>
//                 <li><a href="#home" className='a'>Home</a></li>
//                 <li><a href="#services" className='a'>Our Services</a></li>
//                 <li><a href="#team" className='a'>Our Team</a></li>
//                 <li><a href="#reach" className='a'>Reach Us</a></li>
//               </ul>
//             </div>
//             <div className="footer-social-contact">
//               <h4>Follow Us</h4>
//               <div className="social-icons">
//                 <a href="https://www.facebook.com/"><img src="pics/fb.png" alt="Facebook" width={35} height={35} /></a>
//                 <a href="https://x.com/ABHISHE29765812"><img src="pics/twitter.jpeg" alt="Twitter" width={35} height={35} /></a>
//                 <a href="https://www.instagram.com/"><img src="pics/insta.jpg" alt="Instagram" width={35} height={35} /></a>
//                 <a href="www.linkedin.com/in/abhishek-bansal-002b6326b/"><img src="pics/linkedin.png" alt="LinkedIn" width={35} height={35} /></a>
//               </div>
//               <h4>Contact Us</h4>
//               <p>Email: abhi2004bansal@gmail.com</p>
//               <p>Phone: +(91) 7528092645</p>
//             </div>
//             <div className="footer-newsletter">
//               <h4>Newsletter</h4>
//               <p>Stay updated with the latest influencer trends and tips. Subscribe to our newsletter!</p>
//               <form action="#">
//                 <input type="email" placeholder="Your Email" />
//                 <button type="submit">Subscribe</button>
//               </form>
//             </div>
//           </div>
//           <div className="footer-bottom" style={{backgroundColor: '#F5DEB3'}}>
//             <div className="testimonials-slider">
//               {/* Testimonials content here */}
//             </div>
//             <div className="awards-certifications">
//               {/* Awards icons here */}
//             </div>
//             <div className="legal-links">
//               <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Cookie Policy</a>
//             </div>
//             <p>© 2024 SmartRecipeGenerator.in All Rights Reserved.</p>
//             <a href="#home" className='a' style={{width: '40px', height: '40px'}}>↑</a>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   export default App;











import React from 'react';
import "../css/LandingPage.css";
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Smart Recipe Generator</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{backgroundColor: '#F5DEB3'}}>
                    <a className="navbar-brand" href="/" style={{fontFamily: 'cursive', fontWeight: 'bolder'}}>
                        <img src={require("../images/pics/SRG.png")} alt="" height={60} width={60} />
                        Smart Recipe Generator
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/services" className='a'>Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className='a'>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className='a'>Reach Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={1000}>
                            <img src={require("../images/pics/banner1.jpg")} className="d-block w-100" alt="..." height="670px" width="700px" />
                        </div>
                        <div className="carousel-item" data-bs-interval={1000}>
                            <img src={require("../images/pics/banner2.jpg")} className="d-block w-100" alt="..." height="670px" width="700px" />
                        </div>
                        <div className="carousel-item" data-bs-interval={1000}>
                            <img src={require("../images/pics/banner3.jpg")} className="d-block w-100" alt="..." height="670px" width="700px" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="services">
                <center>
                    <h2 style={{backgroundColor: '#F5DEB3'}} id="services">Our Services</h2>
                </center>
                <div className="container">
                    <div className="row">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={require("../images/pics/serv1.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ingredient Input</h5>
                                <p className="card-text">Users can enter the ingredients they have at home. Provide a user-friendly interface with an auto-suggest feature to help users input ingredients easily.</p>
                            </div>
                        </div>
                        {/* <Link to='/generate'> */}
                        <div className="card" style={{width: '18rem', marginLeft: '10px', marginRight: '10px'}}>
                            <img src={require("../images/pics/serv2.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Recipe Generation</h5>
                                <p className="card-text">The website will search its database to find recipes that can be made with the given ingredients. Include a matching algorithm that suggests recipes based on ingredient availability (e.g., partial matches, exact matches).</p>
                            </div>
                        </div>
                        {/* </Link> */}
                        <div className="card" style={{width: '18rem', marginLeft: '10px', marginRight: '10px'}}>
                            <img src={require("../images/pics/serv3.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Recipe Details</h5>
                                <p className="card-text">Once a recipe is found, provide detailed instructions, cooking time, and serving size. Option to view alternative recipes if additional ingredients are available.</p>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem', marginLeft: '10px', marginRight: '10px'}}>
                            <img src={require("../images/pics/serv4.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Nutrition Information</h5>
                                <p className="card-text">Provide nutritional information for each recipe. Include calories, protein, fats, and other essential nutrients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team">
          <center>
            <h2 style={{backgroundColor: '#F5DEB3'}} id="team">
              About Us
            </h2>
          </center>
          <div className="container">
            <br />
            <div className="row">
              <div className="col-md-12 bg-white offset-md-0">
                <div className="about-content">
                  <center>
                  <h1>Welcome to Smart Recipe Generator</h1>
                </center>
                <br />
                Our Story <br />
                Our journey began with a simple question: "What if cooking could be easier, faster, and more enjoyable for everyone?" &nbsp; &nbsp; Our team of foodies and developers came together to create a web application that would make cooking easier, faster, and more enjoyable. We drew inspiration from the world's cuisines, cooking techniques, and dietary preferences to create a platform that caters to diverse tastes and needs. <br /><br />
                How it works <br />
                    Our smart recipe generator uses machine learning algorithms to analyze your preferences, dietary requirements, and cooking habits to suggest personalized recipes. Simply input your ingredients, cooking time, and preferences, and our app will generate a tailored recipe for you.  <br /><br />
                    Our Mission <br />
                    At Smart Recipe Generator, we aim to empower home cooks, professional chefs, and food enthusiasts to explore new flavors, reduce food waste, and cook with love. Join our community today and start cooking smarter, not harder!
                    we're passionate about revolutionizing the way you cook. Our smart recipe generator is designed to inspire creativity, simplify meal planning, and make cooking a joyful experience for everyone. <br /><br />

                    Join Our Community <br />
                    Sign up today and start cooking smarter, not harder! Share your favorite recipes, cooking tips, and connect with fellow foodies. Together, let's make cooking a joyful and creative experience for everyone. <br /><br /><br />
                   
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        {/**/}
            <div className="container-fluid footer" style={{backgroundColor: '#F5DEB3'}}>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-logo-description">
                            <img src={require("../images/pics/SRG.png")} alt="Footer Logo" />
                            <p>Smart Recipe Generator aims to help users make the most out of the ingredients they have at home by suggesting recipes.</p>
                        </div>
                        <div className="footer-quick-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/" className='a'>Home</a></li>
                                <li><a href="/about" className='a'>About Us</a></li>
                                <li><a href="/services" className='a'>Services</a></li>
                                <li><a href="/contact" className='a'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-social-contact">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <a href="https://www.facebook.com" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                                <a href="https://twitter.com" aria-label="Twitter"><i className="fa-brands fa-twitter" /></a>
                                <a href="https://www.instagram.com" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                            </div>
                        </div>
                        <div className="footer-newsletter">
                            <h4>Subscribe to our Newsletter</h4>
                            <form>
                                <input type="email" placeholder="Enter your email" aria-label="Email" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Smart Recipe Generator. All rights reserved.</p>
                        <div className="legal-links">
                            <a href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</a>
                            <a href="/terms-of-service" aria-label="Terms of Service">Terms of Service</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;