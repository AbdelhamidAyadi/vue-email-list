var app = new Vue({
    el: '#root',
    data: {
        emails: [],

    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    let email = response.data.response;
                    this.emails.push(email);


                    
                });
        }

        
    },
   
});