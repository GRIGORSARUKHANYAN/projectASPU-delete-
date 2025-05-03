
function login(event) {
    event.preventDefault(); 

    const formData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            console.log("Asdas");
            let error = document.getElementById("error").innerHTML="email or password is invalid"
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Registration successful:', data);
        localStorage.setItem("accesToken", data.accessToken);
        window.location.href = "./welcome.html";
    })
    .catch(error => {
        console.error('Error ', error);

    });
}




function createLEsson(event) {
  let token = localStorage.getItem("accesToken");
  event.preventDefault();

  // Get form data
  const formData = {
    title: document.getElementById("title").value,
    text: document.getElementById("text").value,
  };

  fetch("http://localhost:3000/lesson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,

    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      (document.getElementById("title").value = null),
        (document.getElementById("text").value = null)
    })
    .catch((error) => {
      console.error("Error ", error);
    });
}




function contact(event) {
  event.preventDefault(); 

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    text: document.getElementById("text").value,
  };

console.log(formData);

  fetch("http://localhost:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      (document.getElementById("email").value = null),
        (document.getElementById("text").value = null),
        (document.getElementById("name").value = null),
        console.log(" successful:", data);
    })
    .catch((error) => {
      console.log("formData");

      console.error("Error ", error);
    });
}























