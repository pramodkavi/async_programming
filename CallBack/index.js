function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(data); // Invoke the callback with the fetched data
    }, 2000);
    console.log("Comming data...");

}

function displayData(data) {
    console.log("Data fetched:", data);
}

// Pass 'displayData' as a callback to 'fetchData'
fetchData(displayData);
