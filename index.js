

const btn = document.getElementById('btn')
const advice = document.getElementById("advice")
const advice_id = document.getElementById("advice_id")
btn.addEventListener('click' , async () =>{
     
    

    
    try{
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        advice.textContent = data.slip.advice
        advice_id.textContent = data.slip.id
    }catch(error){
        advice.textContent = "Check Your Network & try again"
    }

     
          
    
})