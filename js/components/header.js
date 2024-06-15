Vue.component('site-nav', {
  template: `
    <div class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <router-link to="/" class="navbar-brand">
            <span>Vague</span>
          </router-link>
          <div class="" id="">
            <div class="custom_menu-btn" @click="toggleNav>
              <button>
                <span class="s-1"></span>
                <span class="s-2"></span>
                <span class="s-3"></span>
              </button>
              <div class="overlay" id="myNav" :class="{ 'menu_width': navOpen }>
                <div class="overlay-content">
                  <router-link to="/" @click="closeNav">Home</router-link>
                  <router-link to="/runaway" @click="closeNav">Runaway</router-link>
                  <router-link to="/commercial" @click="closeNav">Commercial</router-link>
                  <router-link to="/book" @click="closeNav">Book Models</router-link>
                  <router-link to="/testimonial" @click="closeNav">Testimonial</router-link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  `,
  name: 'SiteNav'
});
