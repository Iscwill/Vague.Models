Vue.component('app-index', {
    template: `
  <div>
    <!-- slider section -->
    <section class="slider_section position-relative">
      <div class="slider_bg_box">
        <img src="images/index-top.jpg" alt="">
      </div>
      <div class="slider_bg"></div>
      <div class="container">
        <div class="col-md-6 ml-auto">
          <div class="detail-box">
            <h1>Welcome To <br>Vague</h1>
            <p>Discover elegance and professionalism with Vague Models. Our curated selection embodies sophistication and
              style,
              perfect for fashion shows, commercials, and events. Choose Vague Models for a seamless, memorable
              experience.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End of slider section -->
    
    <!-- Special section -->
    <section class="spcl_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="detail_container">
              <div class="detail-box">
                <img src="images/s1.png" alt="">
                <h5>Exclusive Models</h5>
                <p>Explore our exclusive selection of models, each embodying sophistication and charm.</p>
    
              </div>
              <div class="detail-box">
                <img src="images/s2.png" alt="">
                <h5>Premium Services</h5>
                <p>Experience excellence in service. Our team is dedicated to providing you with the highest quality
                  experience.</p>
    
              </div>
              <div class="detail-box">
                <img src="images/s3.png" alt="">
                <h5>Extensive Variety</h5>
                <p>Explore our diverse range of models and services, tailored to meet your unique needs.</p>
              </div>
    
            </div>
          </div>
          <div class="col-md-6 col-lg-5 ml-auto">
            <div class="img-box">
              <img src="images/spcl-img.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of special section -->
    
    <!-- about section -->
    <section class="about_section layout_padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="img-box">
              <img src="images/about-img.jpg" alt="">
    
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2>About Us</h2>
              </div>
              <p>Welcome to Vague, where beauty meets professionalism. Our diverse selection of models embodies
                sophistication and charm,
                ready to bring your vision to life. Experience our unmatched professional service and choose from a wide
                range of models
                and services tailored to meet your needs. Partner with us and discover the Vague difference in the world
                of fashion and
                modeling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of about us page -->
    
    <!-- Testimonial section -->
    <section class="client_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>What says our client</h2>
        </div>
        <div class="carousel slide" id="carouselExampleControls" data-ride:="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="box">
                <div class="img-box">
                  <img src="images/tF1.jpg" alt="testimonial1">
                </div>
                <div class="detail-box">
                  <h4>Karonalyn Pyrus </h4>
                  <p>Amazing experience with Vague! The models are top-notch and the service is exceptional. Can't wait to
                    work with them again!</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="box">
                <div class="img-box">
                  <img src="images/tM1.jpg" alt="testimonial2">
                </div>
                <div class="detail-box">
                  <h4>Shahsiol Dhistand</h4>
                  <p>Working with Vague was a pleasure! Their models are professional and the whole booking process was
                    seamless. Highly
                    recommend!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel_btn-box">
            <a href="#carouselExampleControls" class="carousel-control-prev" role="button" data-slide="prev">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
              <span class="sr-only">Previous</span>
            </a>
            <a href="#carouselExampleControls" class="carousel-control-next" role="button" data-slide="next">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- end of client section -->
    
    <!-- book section -->
    <section class="about_section layout_padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="img-box">
              <img src="images/book_now.jpg" alt="">
    
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2>Book Our Model Now</h2>
              </div>
              <p>Elevate your project with our professional and talented models. Each of our models brings a unique style and presence, ensuring your vision comes to life with elegance and charisma. From fashion shoots to commercial campaigns, our models are prepared to exceed your expectations. Don't wait—secure the perfect model for your next project now and experience the difference!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of about us page -->
  </div>
 
  `,
});
