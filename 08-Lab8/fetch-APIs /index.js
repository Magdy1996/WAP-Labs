document.getElementById('btn1').onclick = function () {
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {console.log(data)});
}

document.getElementById('btn2').onclick = async function () {
    const response = await fetch('http://localhost:3000/books');
    const result = await response.json();
    console.log(result);
}

document.getElementById('btn3').onclick = async () => {
    const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        body: JSON.stringify({
            "title": "Our Sons",
            "ISBN": "874776537",
            "publishedDate": 1999,
            "author": " nageb Mahfouz",
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    console.log(result);
}