const API = "https://jsonplaceholder.typicode.com/users"
const reqParams = {
    url : API
}
const req = new XMLHttpRequest(reqParams.url)
const list = document.querySelector(".list")

let a = fetch(API) 
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("faillllll" + err);
    })
console.log(a);


// req.addEventListener("load",() => {
//     const resp = JSON.parse(req.responseText)
//     const ul = document.createElement("ul")
//     // console.log(resp);
//     resp.forEach((user) => {
//         const li = document.createElement("li")
//         li.textContent = user.name
//         ul.appendChild(li)
//     });
//     console.log("ok");
//     document.querySelector("body").appendChild(ul)

// })

req.open("GET",API)
req.send()

