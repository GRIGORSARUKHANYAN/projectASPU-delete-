
function getContact(event) {
    // event.preventDefault(); // Prevent default form submission

    // Send POST request
    let token = localStorage.getItem("accesToken");

    fetch('http://localhost:3000/contact', {
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
            console.log(data);
            
            console.log('Registration successful:', data);
            // Your code here
            for (let i = 0; i < data.length; i++) {
                document.getElementById("contacts").innerHTML +=
                `
                <div class="message-card">
                    <div class="message-name">${data[i].name}</div>
                    <div class="message-email">${data[i].email}</div>
                    <div class="message-text">${data[i].text}</div>
                </div>
                `;
            
            }

            let email = document.getElementById("contacts").innerHTML

            // Optionally, redirect to another page or show a success message
        })
        .catch(error => {
            console.error('Error ', error);

        });
}

getContact()