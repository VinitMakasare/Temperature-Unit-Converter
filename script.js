const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;
    console.log(numberTemp);


    const tempSelected = document.getElementById('tempdiff');
        const valueTemp = tempdiff.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);
    
    
    const celToFah = (cel) =>{
        let farhenides = Math.round((cel * 9/5)+32);
        return farhenides;
    }
    
    const fehToCel = (fehr) =>{
        let celcius = Math.round((fehr - 32) *5/9);
        return celcius;
    } 
    
    let result;
    
    if(valueTemp =='cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= ` = ${result} °FARHENIDES`;
    }else{
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= ` = ${result} °CELCIUS`;
    }
}
    
    
    











// }