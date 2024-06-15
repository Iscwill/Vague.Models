Vue.component('app-testimonial', {
    template: `
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
                <img src="images/tF1.jpg" alt="">
              </div>
              <div class="detail-box">
                <h4>Minim Valett</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla nemo voluptates nisi voluptatibus ullam similique tempore sapiente sint autem ratione ex nihil cupiditate exercitationem, quo, ipsa modi? Autem, veniam!

                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="box">
              <div class="img-box">
                <img src="images/tM1.jpg" alt="">
              </div>
              <div class="detail-box">
                <h4>Minim Valett</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla nemo voluptates nisi voluptatibus ullam similique tempore sapiente sint autem ratione ex nihil cupiditate exercitationem, quo, ipsa modi? Autem, veniam!

                </p>
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
  `,
});
