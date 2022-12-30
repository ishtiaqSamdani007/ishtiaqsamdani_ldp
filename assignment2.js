async function getData(uId) {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 4000);
    });
    return promise;
}


const emailGET = async () => {
    const email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

console.log("start");
emailGET();
