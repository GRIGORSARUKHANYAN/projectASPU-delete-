
function getContact(event) {
    // event.preventDefault(); // Prevent default form submission

    // Send POST request
    let token = localStorage.getItem("accesToken");

    fetch('http://localhost:3000/lesson', {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => {
            if (!response.ok) {
                console.log("Asdas");
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Registration successful:', data);
            // Your code here
            for (let i = 0; i < data.length; i++) {
                document.getElementById("messages").innerHTML +=
                    `
                <div class="container">
                    <h3>${data[i].title}</h3>
                    <p class="text">${data[i].text}</p>
                </div>
                <br> 
                `;
            }

            let email = document.getElementById("messages").innerHTML

            // Optionally, redirect to another page or show a success message
        })
        .catch(error => {
            console.error('Error ', error);
            // Optionally, display an error message to the user
        });
}

getContact()