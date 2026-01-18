// 🔹 Email Reputation Check
function checkEmail() {
    const email = document.getElementById("email").value;
    const apiKey = "8b6cf262ff504d1ca1ee235ea7b8cf67";
    const url = "https://emailreputation.abstractapi.com/v1/";

    document.getElementById("emailResult").innerText = "Checking...";

    fetch(`${url}?api_key=${apiKey}&email=${email}`)
        .then(response => response.json())
        .then(data => {
            if (data.email_deliverability.status === "deliverable") {
                document.getElementById("emailResult").innerText =
                    "✅ Email is deliverable";
            } else {
                document.getElementById("emailResult").innerText =
                    "❌ Email is NOT deliverable";
            }
        })
        .catch(() => {
            document.getElementById("emailResult").innerText =
                "⚠️ Error checking email";
        });
}

// 🔹 Weather Check
function checkWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "2d932e0c34e29da5988a0942c74be895";
    const url = "https://api.openweathermap.org/data/2.5/weather";

    document.getElementById("weatherResult").innerText = "Checking...";

    fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerText =
                    `🌤️ ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
            } else {
                document.getElementById("weatherResult").innerText =
                    "❌ City not found or API error";
            }
        })
        .catch(() => {
            document.getElementById("weatherResult").innerText =
                "⚠️ Error fetching weather";
        });
}

// 🔹 Load Students Data
function loadStudents(facultyCode) {
    // AJAX Request
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json", true);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var data = JSON.parse(this.responseText);

                // Get selected faculty
                var faculty = data[facultyCode];
                var outputDiv = document.getElementById("output");

                // Clear previous output
                outputDiv.innerHTML = "";

                if (faculty) {
                    // Faculty name
                    var h3 = document.createElement("h3");
                    h3.textContent = faculty.name;
                    outputDiv.appendChild(h3);

                    // Departments list
                    var ul = document.createElement("ul");
                    faculty.departments.forEach(function(dept){
                        var li = document.createElement("li");
                        li.textContent = dept;
                        ul.appendChild(li);
                    });

                    outputDiv.appendChild(ul);
                } else {
                    outputDiv.textContent = "No data found for this faculty!";
                }

            } else {
                console.error("Failed to load JSON. Status:", this.status);
            }
        }
    };

    xhttp.send();
}

// 🔹 Example standalone email check (can be removed or kept as reference)
function checkEmailStandalone() {
    const url = 'https://emailreputation.abstractapi.com/v1/';
    const apiKey = '8b6cf262ff504d1ca1ee235ea7b8cf67';
    const email = 'it22030@mbstu.ac.bd';

    fetch(`${url}?api_key=${apiKey}&email=${email}`)
      .then(response => response.json())
      .then(data => {
        if (data.email_deliverability.status === 'deliverable') {
          console.log('The email is deliverable');
        } else {
          console.log('The email is not deliverable');
        }
      });
}