Vue.component('app-thankyou', {
    template: `
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header text-center bg-dark text-white">
                            <h2>Thank You for Your Booking!</h2>
                        </div>
                        <div class="card-body">
                            <p class="lead">Dear {{ firstName }} {{ lastName }},</p>
                            <p>Thank you for booking with us. Your booking details are as follows:</p>
                            <ul class="list-group mb-4">
                                <li class="list-group-item"><strong>Email:</strong> {{ email }}</li>
                                <li class="list-group-item"><strong>Phone:</strong> {{ phone }}</li>
                                <li class="list-group-item"><strong>Start Date:</strong> {{ startDate }}</li>
                                <li class="list-group-item"><strong>End Date:</strong> {{ endDate }}</li>
                            </ul>
                            <p>We will get back to you shortly with more details.</p>
                            <router-link to="/index" class="btn btn-light btn-lg btn-block">Go to Home</router-link>
                        </div>
                        <div class="card-footer text-muted text-center">
                            <p>Thank you for choosing our service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            startDate: '',
            endDate: ''
        };
    },
    created() {
        // Retrieve the query parameters
        this.firstName = this.$route.query.firstName;
        this.lastName = this.$route.query.lastName;
        this.email = this.$route.query.email;
        this.phone = this.$route.query.phone;
        this.startDate = this.$route.query.startDate;
        this.endDate = this.$route.query.endDate;
    }
});
