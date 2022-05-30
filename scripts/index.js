// Add the coffee to local storage with key "coffee"
// let api = `https://masai-mock-api.herokuapp.com/coffee/menu`

let menu = document.getElementById("menu")

async function getCoffee(){
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

    let res = await fetch(url)

    let data = await res.json()
    data = data.menu.data
    console.log(data)
    append(data)
}
getCoffee()

function append(data)
{
    data.map(function(el){
        let div1 = document.createElement("div")
        div1.setAttribute("class","coffee")
        
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
        btn.innerText = "Add To Bucket"
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click",function(){
            addtocart(el)
        })


        div1.append(img,title,price,btn)

        document.getElementById("menu").append(div1)

       })
let cartArr = []
       function addtocart(el){
        // alert("item added to cart")
        cartArr.push(el)
        localStorage.setItem("coffee",JSON.stringify(cartArr))
       let count = document.getElementById("coffee_count")
       count.innerText = cartArr.length
       console.log(count)
       }
}