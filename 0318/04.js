const API = "https://jsonplaceholder.typicode.com/users"

async function getUsers() {
    const rawData = await fetch(API)
    const users = await rawData.json()
    users.forEach( (f) => {
        console.log(f.name);
    });
}

getUsers()