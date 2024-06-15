// Define your Vue Router routes
const routes = [
  { path: '/index', component: { template: '<app-index></app-index>' } },
  { path: '/runaway', component: { template: '<app-runaway @book-model="handleBookModel"></app-runaway>' } },
  { path: '/commercial', component: { template: '<app-commercial @book-model="handleBookModel"></app-commercial>' } },
  { path: '/fashion', component: { template: '<app-fashion @book-model="handleBookModel"></app-fashion>' } },
  { path: '/testimonial', component: { template: '<app-testimonial></app-testimonial>' } },
  { 
    path: '/book', 
    name: 'book', 
    component: {
      template: `<app-book :selectedModel="selectedModel"></app-book>`
    },
    props: true
  },
  { path: '/thankyou',  component: { template: '<app-thankyou></app-thankyou>' } },
  { path: '/testimonial', component: { template: '<div>Testimonial Component</div>' } },
  { path: '/', redirect: '/index' } // Redirect the default route to /index
];

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes

});

Vue.component('SiteNav', {
  template: `
    <div class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <router-link to="/" class="navbar-brand">
            <span>Vague</span>
          </router-link>
          <div class="" id="">
            <div class="custom_menu-btn">
              <button @click="openNav">
                <span class="s-1"></span>
                <span class="s-2"></span>
                <span class="s-3"></span>
              </button>
              <div class="overlay" id="myNav" >
                <div class="overlay-content">
                  <router-link to="/" @click.native="closeNav">Home</router-link>
                  <router-link to="/runaway" @click.native="closeNav">Runaway</router-link>
                  <router-link to="/commercial" @click.native="closeNav">Commercial</router-link>
                  <router-link to="/fashion" @click.native="closeNav">Fashion</router-link>
                  <router-link to="/book" @click.native="closeNav">Book Models</router-link>
                  <router-link to="/testimonial" @click.native="closeNav">Testimonial</router-link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  `,
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    openNav() {
      this.navOpen = !this.navOpen;
      document.getElementById("myNav").classList.toggle("menu_width", this.navOpen);
      document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style", this.navOpen);
    },
    closeNav() {
      this.navOpen = false;
      document.getElementById("myNav").classList.remove("menu_width");
      document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");
    }
  }
});

// Create a new Vue instance and pass the `router` option
new Vue({
  el: '#app',
  router,
  data() {
    return {
      selectedModel: null
    };
  },
  methods: {
    handleBookModel(model) {
      console.log('Handling book model:', model);
      this.selectedModel = model;
      this.$router.push('/book');
    }
  },
  created() {
    this.$root.$on('book-model', this.handleBookModel);
  },
  beforeDestroy() {
    this.$root.$off('book-model', this.handleBookModel);
  }
});

// overlay menu
function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(1.5258, 110.3542),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
