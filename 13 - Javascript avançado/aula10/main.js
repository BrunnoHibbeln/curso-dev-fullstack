const Main = {

    init: function() {

        this.cacheSelectors()
        this.loadXML()
    },
    
    cacheSelectors: function() {
        this.$container = document.querySelector('#container')
    },

    loadXML: function() {
        
        const self = this  
        const xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function(){

            if(this.readyState == 4 && this.status == 200){

                const response = JSON.parse(this.responseText)

                let html = ''

                for(let responses of response){
                    html += `
                        <h2>${responses.title}</h2>
                        <img src="${responses.url}">
                    `
                }
                self.$container.innerHTML = html
            }
        }

        xhttp.open('GET','https://jsonplaceholder.typicode.com/photos', true)
        xhttp.send()
    },
}   

Main.init()