const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Successful")
    }, 1000)
});

async function getData() {
    const response = await promise;
    console.log(response)
}
getData();

fetch("")
    .then(res => res.json())
    .then(data => console.log(data))

async function getUser() {
    const res = await fetch("");
    const user = await res.json();

    const res2 = await fetch(`https://www.example.com/${user.id}`);
    const products = res2.json();
    console.log(products);
}
getUser();