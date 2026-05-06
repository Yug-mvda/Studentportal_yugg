function displayData() {

    // Taking Input Values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;

    let college = document.getElementById("college").value;
    let branch = document.getElementById("branch").value;
    let semester = document.getElementById("semester").value;
    let cgpa = document.getElementById("cgpa").value;

    // Displaying Values
    document.getElementById("showName").innerText = name;
    document.getElementById("showAge").innerText = age;
    document.getElementById("showEmail").innerText = email;
    document.getElementById("showCity").innerText = city;

    document.getElementById("showCollege").innerText = college;
    document.getElementById("showBranch").innerText = branch;
    document.getElementById("showSemester").innerText = semester;
    document.getElementById("showCGPA").innerText = cgpa;
}