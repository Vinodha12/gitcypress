// loop
// for loop
    // It repeats a certain set of instruction repeatedly until a certain condition is met

        // syntax
            // for (initialization;condition;iteration)
                for(var i=0;i<=5;i++){
                    console.log(i);
                    
                } //console.log(i); //if we give after for loop condition it will print flase statement.

                for(var j=5;j>=0;j--){
                    console.log(j);
                    
                            }

             // String Loop
                    var str="Lakshman"  
                    // for(k=0;k<str.length;k++){
                    //     console.log(str[k]);
                        
                    // }

                    for(n=str.length;n>=0;n--){
                        console.log(str[n]);
                        
                    }
                     
            //String for loop   
                var a="lakshman"
                var u=""
                for(var i=0;i<a.length;i++){
                    u+=a[i]
                    // console.log(u);
                    
                }    console.log(u);
            //Reverse String using loop
                var o=""
                for(var j=a.length-1;j>=0;j--){
                    o+=a[j]

                }    
                    console.log(o);
            //While
                //Entry level condition checking
                    var count=0
                    var v=""
                    while(count<=5){
                        v+=count
                        count++
                    }  console.log(v);
                                   
            //do while
                //Exit level condition checking
                    var t=5
                            do{
                               console.log(t);
                                 t++                                                                                                                       
                            }
                            while(t<=5)

           //for loop Even and odd number
            for(var i=1;i<=50;i++){
                if(i%2==0){
                    console.log(i+ "is even number");
                    
                }
                else{
                    console.log(i+ "is odd number");
                    
                }
            } 
            //other format to print even and odd number in same line
                    var even=""
                    var odd=""
                    for(var i=1; i<=50;i++){
                        if(i%2==0){
                            even+= i+","
                        }
                    else{
                        odd+=i+","
                    }
                    }
            console.log("even numbers are:" +even);
            console.log("Odd numbers are:" +odd);
            
            