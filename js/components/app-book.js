Vue.component('app-book', {
    props: ['selectedModel'],
    template: `
        <section class="h-25 bg-light">
            <div class="container py-5">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col">
                        <div class="card card-registration my-2">
                            <div class="row g-0">
                                <div class="col-xl-6 d-none d-xl-block">
                                    <img src="images/book-bg.jpg" alt="Sample photo" class="img-fluid"
                                        style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                                </div>
                                <div class="col-xl-6">
                                    <div class="card-body p-md-2 text-black">
                                        <h3 class="mb-5 text-uppercase">Book Model</h3>
                                        <div id="app">
                                        <h4>Model Name: {{ model.name }}</h4>
                                        <span v-if="!formSubmitted && !model.name" class="text-danger">Please select a model</span>

                                        <a href="#details" @click="toggleDetails" class="details-btn"
                                            :class="{ 'active': showDetails }">{{ showDetails ? 'Hide Details' : 'More Details' }}</a>
                                        <transition name="fade">
                                            <div v-if="showDetails">
                                                <p>Bio: {{ model.bio }}</p>
                                                <p>Gender: {{ model.gender }}</p>
                                                <p>Height: {{ model.height }}</p>
                                                <p>Weight: {{ model.weight }}</p>
                                            </div>
                                        </transition>
                                        </div>

                                        <form @submit.prevent="submitForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <input type="text" id="firstName"
                                                            class="form-control form-control-lg" v-model="firstName" @blur="validateFirstName" :class="{ 'is-invalid': firstNameValid === false }" />
                                                        <label class="form-label" for="firstName">First name</label>
                                                        <div class="invalid-feedback">First name is required.</div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <input type="text" id="lastName"
                                                            class="form-control form-control-lg" v-model="lastName" @blur="validateLastName" :class="{ 'is-invalid': lastNameValid === false }" />
                                                        <label class="form-label" for="lastName">Last name</label>
                                                        <div class="invalid-feedback">Last name is required.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="email" id="email" class="form-control form-control-lg"
                                                    v-model="email" @blur="validateEmail" :class="{ 'is-invalid': emailValid === false }" />
                                                <label class="form-label" for="email">Email</label>
                                                <div class="invalid-feedback">Please enter a valid email address.</div>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="tel" id="phone" class="form-control form-control-lg"
                                                    v-model="phone" @blur="validatePhone" :class="{ 'is-invalid': phoneValid === false }" />
                                                <label class="form-label" for="phone">Phone</label>
                                                <div class="invalid-feedback">Please enter a valid phone number.</div>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="date" id="startDate"
                                                    class="form-control form-control-lg" v-model="startDate" @blur="validateStartDate" :class="{ 'is-invalid': startDateValid === false }" />
                                                <label class="form-label" for="startDate">Start Date</label>
                                                <div class="invalid-feedback">Start date is required.</div>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="date" id="endDate" class="form-control form-control-lg"
                                                    v-model="endDate" @blur="validateEndDate" :class="{ 'is-invalid': endDateValid === false }" />
                                                <label class="form-label" for="endDate">End Date</label>
                                                <div class="invalid-feedback">End date is required.</div>
                                            </div>

                                            <div class="d-flex justify-content-end pt-1">
                                                <button type="reset" class="btn btn-light btn-lg">Reset</button>
                                                <button type="submit" class="btn btn-warning btn-lg ms-1" >Submit</button>
                                            </div>
                                        </form>

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
            model: {},
            showDetails: false,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            startDate: '',
            endDate: '',
            firstNameValid: null,
            lastNameValid: null,
            emailValid: null,
            phoneValid: null,
            startDateValid: null,
            endDateValid: null,
            formSubmitted: false
        };
    },
    created() {
        // Parse the JSON string from the query parameter and assign it to model
        this.model = JSON.parse(this.$route.query.selectedModel);
        
    },
 computed: {
        formValid() {
            return (
                this.firstName.trim() !== '' &&
                this.lastName.trim() !== '' &&
                this.email.trim() !== '' &&
                this.phone.trim() !== '' &&
                this.startDate.trim() !== '' &&
                this.endDate.trim() !== '' &&
                this.firstNameValid === true &&
                this.lastNameValid === true &&
                this.emailValid === true &&
                this.phoneValid === true &&
                this.startDateValid === true &&
                this.endDateValid === true &&
                this.model.name
            );
        }
    },

    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        },
        validateFirstName() {
            this.firstNameValid = !!this.firstName.trim();
        },
        validateLastName() {
            this.lastNameValid = !!this.lastName.trim();
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailValid = emailRegex.test(this.email.trim());
        },
        validatePhone() {
            const phoneRegex = /^\d{10}$/;
            this.phoneValid = phoneRegex.test(this.phone.trim());
        },
        validateStartDate() {
            this.startDateValid = !!this.startDate.trim();
        },
        validateEndDate() {
            this.endDateValid = !!this.endDate.trim();
        },
        submitForm(event) {
            console.log('Form submitted');
            // Prevent the default form submission behavior
            event.preventDefault();

            if (!this.formValid) {
                console.log('Form is invalid. Please check the fields.');
                return;
            }

             // Navigate to the app-thankyou component
            this.$router.push({
                path: '/thankyou', query: {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    phone: this.phone,
                    startDate: this.startDate,
                    endDate: this.endDate
                }
            });

              // Reset form fields
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.phone = '';
            this.startDate = '';
            this.endDate = '';
            this.firstNameValid = false;
            this.lastNameValid = false;
            this.emailValid = false;
            this.phoneValid = false;
            this.startDateValid = false;
            this.endDateValid = false;
            this.formSubmitted = false;
        }
    }
});