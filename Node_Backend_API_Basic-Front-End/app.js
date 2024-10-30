console.log("Connected");

const btn = document.getElementById('btn');
const output = document.getElementById('output')

btn.addEventListener("click", () => {
    console.log("clicked");

    fetch('http://localhost:8000/1')
        .then((response) => response.json())
        .then((data) => {
            console.log(`Name is ${data.user.name}.`)
            output.innerHTML = (`Name is ${data.user.name}.`)
        })
        .catch((error) => {
            console.error('Error:', error)
        })
})