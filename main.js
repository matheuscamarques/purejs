
document.addEventListener("DOMContentLoaded", main)
function main() {
    let page = new Pagina(document);
    page.load();

}

class Pagina {
    /**
     * 
     * @param {Document} RefDocument 
     */
    constructor(RefDocument) {
        this.inputs = {};
        this.texts = {};
        this.body = {};
        this.conteiner = {};
        this.document = RefDocument;
        this.body = this.document.getElementsByTagName("body").item(0);
    }

    init() {

    }

    load() {
        this.init();
        this.loadConteinerTop();
    }

    loadConteinerTop() {
        /**
         * 
         * @param {Document} document 
         */
        let Conteiner = function (document) {
            this.div = document.createElement("div");
            this.p = document.createElement("p");;
            this.input = document.createElement("input");
            this.input1 = document.createElement("input");
            this.span = document.createElement('span');


            this.soma = function () {
                return (this.input.value * 1 + this.input1.value * 1);
            }

          
            //Inicialização
            this.init = () => {
                this.input.value = 0;
                this.input1.value = 0;
                
                let myRef = this;
                this.input.addEventListener('input',function(){
                    myRef.span.textContent = "Total: " + myRef.soma();
                });
                this.input1.addEventListener('input',function(){
                    myRef.span.textContent = "Total: " + myRef.soma();
                });

                


                this.p.textContent = "Calcula soma:";
                this.span.textContent = "Total: " + this.soma();
                this.div.appendChild(this.p);
                this.div.appendChild(this.input);
                this.div.appendChild(this.input1);
                this.div.appendChild(this.span);


                return this.div;
            }

        };
        this.body.appendChild((new Conteiner(this.document)).init());

    }

    makeConteinerTop() {

    }

    makeConteinerMedium() {

    }

    makeConteinerFooter() {

    }
}