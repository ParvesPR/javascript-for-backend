async function getData() {
    try {
        // undefined.find();
        const user = new Error("Email already exist");
        throw user;
    } catch (error) {
        errorHandler(error)
    }
};
getData();

function errorHandler(error) {
    const { name, message, stack } = error;
    console.log(name, message);
    //  logger.error({
    //     name,
    //     message,
    //     stack
    //  })
}

console.log("done!");