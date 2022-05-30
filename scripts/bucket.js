// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucket = JSON.parse(localStorage.getItem("coffee")) || []
append(bucket)
console.log(bucket)

function append(bucket){

    bucket.map(function(el,index){

        let div1 = document.createElement("div")

        let img = document.createElement("img")
        img.setAttribute("src",el.image)
        // img.setAttribute("id","image")
        img.style.height = "100px";
        img.style.width = "100px"
        

        let title = document.createElement("h3")
        title.innerText = el.title

        let price = document.createElement("h3")
        price.innerText = el.price

        let btn = document.createElement("button")
        btn.innerText = "REMOVE"
        btn.setAttribute("id","remove_coffee")

        btn.addEventListener("click",function(){
            
            bucket.splice(index,1)
            localStorage.setItem("coffee",JSON.stringify(bucket))
            window.location.reload()

        })

        div1.append(img,title,price,btn)
        document.getElementById("bucket").append(div1)
    })
}

let total_sum = 0;
for(let i=0; i<bucket.length; i++)
{
    total_sum += bucket[i].price
    document.getElementById("total_amount").innerText = "Total"+" "+total_sum
}