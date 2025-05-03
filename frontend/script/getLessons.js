function getContact(event) {
    let token = localStorage.getItem("accesToken");

    fetch('http://localhost:3000/lesson', {
        method: 'GET',
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
            for (let i = 0; i < data.length; i++) {
                document.getElementById("lessons").innerHTML +=
                    `
                <div class="lesson-card">
                    <div class="lesson-header">
                        <h3 class="lesson-title">${data[i].title}</h3>
                        <span class="lesson-date">${new Date().toLocaleDateString()}</span>
                    </div>
                    <p class="lesson-text">${data[i].text}</p>
                </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error ', error);
        });
}

getContact();
