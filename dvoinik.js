
document.querySelector("#submit").onclick = function(){
    

let vuz_doc = document.getElementById("university");
let vuz = vuz_doc.options[vuz_doc.selectedIndex].text;

let fac_doc = document.getElementById("faculty");
let fac = fac_doc.options[fac_doc.selectedIndex].text;

let scores = document.getElementById("scores").value;

let link ="https://script.googleusercontent.com/macros/echo?user_content_key=x7bWpOcfF2o6ZnEPS95xsZtoNAUQjpO2somSOe-8tPQA58ihR01e39Lww0pHAVym6uXNt1T6heXJu-a5IFxSDUC2KolhDFTIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNtyXkuHBUcEQ7beSFEPGkSQF--HUwWibh_wk0dVCRdnP-EWkvjvz0AW0C6pIj1shuO1u-MH7qSh8bt1ioZmymLcGI7lhJ_ZLw&lib=M4C_ZogAjNXLhWJNbPgO-j8Ve6tFvFPmZ"

$.getJSON(link, function(data) {
    // JSON result in `data` variable
    });

    
result = (data["vuz"]["faculty"]["scores"]/scores)*100 ;
    alert("результат")
}
  