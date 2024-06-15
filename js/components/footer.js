Vue.component('site-footer', {
  template: `
    <div class="footer_section">
       <div class="container">
          <div class="row">
            <div class="col-md-4 footer-col">
              <div class="footer_content">
                <h4>Reach at...</h4>
                <div class="contact_link_box">
                  <a href=""><i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span></a>
                  <a href=""><i class="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +99 99999999</span></a>
                  <a href=""><i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>vague@gmail.com</span></a>
                </div>
              </div>
            </div>
            <div class="col-md-4 footer-col">
              <div class="footer_detail">
                <a href="" class="footer-logo">
                  Vague
                </a>
                <p>Experience the epitome of elegance and professionalism with Vague. We offer a diverse selection of models and services to cater to your unique needs. Contact us today for bookings and inquiries.</p>
              </div>
            </div>
            <div class="col-md-4 footer-col">
              <div class="map_container">
                <div class="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-info">
            <p>&copy; <span id="displayYear"></span>All Rights Reserved By
            <a href="#">VAGUE</a></p>
          </div>
        </div>
    </div>
   
  `,
  mounted() {
    // Call the myMap function from main.js
    myMap();
  }
});

new Vue({
  el: '#footer'
});
