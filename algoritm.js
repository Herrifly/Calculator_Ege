
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
            
            let count = 0;
           
            for (key in content.results)
            {   
                count+=1;
                if(content.results[key].Vuz==vuz && content.results[key].Faculty==fac )
                {
                   
                    if (content.results[key].Scores == 0){
                        document.getElementById("chances").innerHTML = "100%" ;
                        document.getElementById("recommendations").innerHTML = "Платное обучение";
                        break;

                    }
                    let result = Math.round((100*score/content.results[key].Scores));
                    if(result>90){
                    document.getElementById("chances").innerHTML = result.toString() + "%";
                    document.getElementById("images").src="images/image1.png" ;
                    document.getElementById("recommendations").innerHTML = "Ты поступишь!";
                    }
                    else if(result>80)
                    {
                        document.getElementById("chances").innerHTML = result.toString() + "%";
                        document.getElementById("images").src="images/image2.png" ;
                        document.getElementById("recommendations").innerHTML = "Скорее всего, ты поступишь";
                    }
                    else if(result>70)
                    {
                        document.getElementById("chances").innerHTML = result.toString() + "%";
                        document.getElementById("images").src="images/image3.png" ;
                        document.getElementById("recommendations").innerHTML = "Поставь себе в план Б";
                    }
                    else if (result<70)
                    {
                        document.getElementById("chances").innerHTML = result.toString() + "%";
                        document.getElementById("images").src="images/image4.png" ;
                        document.getElementById("recommendations").innerHTML = "Мало перспектив";
                    }
                    PopUp.classList.add('active');
                    break;
                }
                
                

                
            }
                if (count == 30 && vuz != "РЭУ"){
                    alert("Проверьте вуз и факультет, таких данных нет");
                }
            }) 
            
        }
            

        

        

        

        
       
        
    
    
    


getResponce();   

            
            
            
            
        


    ClosePopUp.addEventListener('click',function(){
            PopUp.classList.remove('active');
        })
        

       
     


    

 