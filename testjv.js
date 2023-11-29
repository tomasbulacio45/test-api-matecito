const { createApp } = Vue


createApp({
    data() {
        return {
            url: './api/datos.json',
            error: false,
            datos: []
        }
    },
    methods:{
        fetchdata(url){
            fetch(url) 
                .then(response => response.json()) 
                .then(data => {
                    console.log(data)
                    this.datos = data.mates
                
                }
                );

        }
    },
    created(){
        this.fetchdata(this.url)
    }

}).mount('#app')