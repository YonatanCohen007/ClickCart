<template>
    <div class="container">
    <div>
        insert a number / + / =
        <b></b>
        <div>
            <input id="txtName"  v-model="input" type="text">
        </div>
        <div>
            <button type="button" @click="getInput()">Press To Send The Character</button>
        </div>
        {{jsonState}}
    </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {

        data(){
          return{
            exrcCounter: 1,
            jsonState: "   -| 1 |-   ",
            input: "",
            firstNumber: "",
            secondNumber: "",
            result: 0,
            checkTheOrderOfCalculation: 0,
            
          }  
        },
        components:{
          
        },

        computed: {
          
            // searched(){
            //     let regexp = new RegExp(this.pattern);
            //     return this.products.filter(prod => regexp.test(prod.name));
            // }
        },

        methods: {
            getInput() {
                // let regexp = new RegExp(this.input);
                this.calculateNextState(this.input, this.input)
                this.input = "";
            },
            calculateNextState(jsonState, input){
                let CheckInput = input;

                if (!(isNaN(CheckInput)))
                {
                   if(this.checkTheOrderOfCalculation == 0)
                   {
                        this.firstNumber += CheckInput;
                        this.jsonState += CheckInput;
                   } 
                   else if (this.checkTheOrderOfCalculation == 1)
                   {
                       this.jsonState += CheckInput;
                        this.secondNumber += CheckInput;
                   }
                    
                }
                else if (CheckInput === "=") 
                {
                     if (this.checkTheOrderOfCalculation == 1) 
                     {
                        this.jsonState += CheckInput;
                       this.result =  parseInt(this.firstNumber) +  parseInt(this.secondNumber);
                       this.firstNumber = "";
                       this.secondNumber = "";
                       this.jsonState += String(this.result);
                       this.result = 0;
                       this.exrcCounter++;
                       this.jsonState += "  -|   "
                       this.jsonState += String(this.exrcCounter);
                       this.jsonState += "   |-  ";
                       this.checkTheOrderOfCalculation = 0;
                       
                    }
                }
                else if (CheckInput === "+")
                {
                     if (this.checkTheOrderOfCalculation == 0)
                     {
                         this.jsonState += CheckInput;
                         this.checkTheOrderOfCalculation = 1;
                     }
                }
                else 
                {
                    console.log("Check ur input and try again");
                }
            }
        },
        
        mounted(){
            
        }
    }

</script>