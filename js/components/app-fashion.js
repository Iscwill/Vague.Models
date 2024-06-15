Vue.component('app-fashion', {
  template: `
    <section id="team" class="pb-5">
      <div class="container">
        <h5 class="section-title h1">Fashion Models</h5>
        <div class="form-group">
          <label for="genderFilter">Filter by Gender:</label>
          <select id="genderFilter" class="form-control" v-model="selectedGender">
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4" v-for="model in filteredModels" :key="model.name">
            <div class="image-flip">
              <div class="mainflip flip-0">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p><img class=" img-fluid" :src="model.image" alt="card image"></p>
                      <h4 class="card-title">{{ model.name }}</h4>
                      <p class="card-text">{{ model.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Bio</h4>
                      <p class="card-text">{{ model.bio }}</p>
                      <p class="card-text">Gender: {{ model.gender }}</p>
                      <p class="card-text">Height: {{ model.height }}</p>
                      <p class="card-text">Weight: {{ model.weight }}</p>
                      <!-- Use vanilla JavaScript to handle button click -->
                      <button @click="handleBookButtonClick(model)" class="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      models: [],
      selectedGender: ''
    };
  },
  computed: {
    filteredModels() {
      if (this.selectedGender) {
        return this.models.filter(model => model.gender === this.selectedGender);
      } else {
        return this.models;
      }
    }
  },
  created() {
    fetch('resources/fashion.json')
      .then(response => response.json())
      .then(data => {
        this.models = data;
      })
      .catch(error => console.error('Error fetching the data:', error));
  },
  methods: {
    handleBookButtonClick(model) {
      console.log('Navigating to book:', model);
      // Use Vue Router's push method to navigate to the book page
      this.$router.push({ name: 'book', query: { selectedModel: JSON.stringify(model) } });
    }
  }
});
