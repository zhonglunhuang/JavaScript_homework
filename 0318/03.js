const API = "https://jsonplaceholder.typicode.com/users"
const reqParams = {
    url : API
}
const req = new XMLHttpRequest(reqParams.url)
const list = document.querySelector(".list")
// console.log(typeof(fetch(API)));
// console.log(typeof(req.responseText));
// let a = fetch(API) 
//     .then((resp) => {
//         return resp.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("faillllll" + err);
//     })


req.addEventListener("load",() => {
    // console.log(typeof(req.responseText));
    const resp = JSON.parse(req.responseText)
    console.log(typeof(resp));
    const ul = document.createElement("ul")
    console.log(resp);
    resp.forEach((user) => {
        const li = document.createElement("li")
        li.textContent = user.name
        ul.appendChild(li)
    });
    console.log("ok");
    document.querySelector("body").appendChild(ul)
})

;
req.open("GET",API)
req.send()

