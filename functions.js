
// funtions
        //funtion statement or decleration
            function box(){
                console.log("Vinodha P");
                
            } 
            box()
        //  Arrow function
                // sybtax ()=>{}
                    var aa=()=>{console.log("Vinodha SP");
                    }
                    aa()
         // parameter
                 function par(x){
                    console.log(x);
                 }   
                 par("Hello")
                //  retun keyword

                function re(y){
                    return y
                }
                console.log(re("Hello World"));
        // funtion experssion
                var tt=function(){
                    console.log("This is funtion experssion");
                    
                } 
                tt() //We have to call the variable in next line of closed flower bracket otherwise it shows error

        // immediate invoke function
          var arrr=      (function(P){
                    console.log(P);
                    
                })(55) //If we hide the other functions then after only it will run without error otherwise it will throw a error.
                // So we can assign to one variable means it will allow to run without error.
        // first class function
                function bigbox(x){
                    return x
                }
                function smallbox(y){
                    console.log(y(66));
                    
                }

                smallbox(bigbox)