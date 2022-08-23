// Javascript Promise have 3 states
// pending
// resolved
// rejected

const myPromise = new Promise((resolve, reject) => {
    const user = { id: 1 };
    if (!user) {
        reject("Something went wrong!!")
    }
    else (
        setTimeout(() => {
            resolve("Successfully got data")
        }, 1000)
    )
});

// HANDLE MULTIPLE PROMISE
const userId = [1, 2, 3, 4, 5];
let data = [];
for (let i = 0; i < userId.length; i++) {
    const id = userId[i];
    data.push(myPromise)
}
Promise.all(data).then(res => {
    console.log(res)
})
// consume promise
myPromise
    .then(res => console.log("found in then", res))
    .catch(err => console.log("found in catch", err))