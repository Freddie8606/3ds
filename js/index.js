//Conexón de Vue y Axios
const vm = new Vue({
    el: '#app',
    mounted(){
        this.cargarDepartamentos();
    },
    data: {
        departamentos:[]
    },
    methods: {
        cargarDepartamentos(){
            axios.get('https://randomuser.me/api/?results=500').then((respuesta) =>
            //axios.get('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json').then((respuesta) =>
            {
                console.log(respuesta);
                //this.departamentos = respuesta.data.test;
                this.departamentos = respuesta.data.results; 
            });
        }
    },
    computed: {

    }
});