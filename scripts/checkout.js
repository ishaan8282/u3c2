document.getElementById("order-form").addEventListener("submit",checkout)

function checkout(event){
    event.preventDefault()
    alert("Your order is accepted")

    setTimeout(function(){
     alert("Your order is being Prepared ")
    },3000)

    setTimeout(function(){
        alert("Your order is being packed ")
    },8000)

    setTimeout(function(){
        alert("Your order is out for delivery ")
    },10000)

    setTimeout(function(){
        alert("order delivered")
    },12000)
}