fetch("https://reqres.in/api/users", {

method: 'POST',
body: JSON.stringify({
    "name": "mark",
    "job": "coffee maker",
    "favourite color": "yellow"
    }),
    headers: {
    'Content-Type': 'application/json'
    } })
    .then(response => response.json())
    .then(data => {
    console.log(data)
})