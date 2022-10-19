const OpenPopUp = document.getElementById('open_pop_up');
const ClosePopUp = document.getElementById('pop_up_close');
const PopUp = document.getElementById('pop_up');
const vuz_doc = document.getElementById("university");
const fac_doc = document.getElementById("faculty");
    
   




        async function getResponce(){
            
            
            let responce = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=b89cw-2IE8e6HSPyO8zSXOjEIv71UvsDhRBCR1gkh6lT-k2135_rYFDRmAbzVskhJDc8_WABmj67YKx7yYKJiySpL_I9ogn2m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPl8lSlWHemkV6ZqeQPP4215q2SRG_paC61rc0ScP01KpoD3UnnT1ntZWwz1_JhFapuysVsbuBeId0TLq9w6ptbVoVs1IT-z7A&lib=M4C_ZogAjNXLhWJNbPgO-j8Ve6tFvFPmZ")

            let content = await responce.json();
            OpenPopUp.addEventListener('click',function(e){
            let vuz = vuz_doc.options[vuz_doc.selectedIndex].text;

                
                let fac = fac_doc.options[fac_doc.selectedIndex].text;

                let score = document.getElementById("scores").value;

                let key;

               
                for (key in content.results)
                {   
                    if(content.results[key].Vuz==vuz && content.results[key].Faculty==fac )
                    {
                        let result=Math.round((100*score/content.results[key].Scores));
                        document.getElementById("chances").innerHTML = (Math.round((100*score/content.results[key].Scores))).toString() + "%";
                    // alert((Math.round(100*score/content.results[key].Scores)).toString()+"%");
                    // if(result>80)
                    // {
                    //     document.getElementById("chances").innerHTML = "Шансы на поступление" + result.toString() + "%";
                    // }
                    }
                    

                    
                    }
                    PopUp.classList.add('active');
                })
                }
                

            
    
            

            

            
           
            
        
        
        
    
   
                   
        getResponce();
        // OpenPopUp.addEventListener('click',function(e){
        //         getResponce();
                
                
                
                
            

        // })
        ClosePopUp.addEventListener('click',function(){
                PopUp.classList.remove('active');
            })
            

   
 