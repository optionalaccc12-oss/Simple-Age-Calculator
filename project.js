function DOB() {
    const dobInput = document.getElementById('dob').value;

    
    if (dobInput === "") {
        alert("Please select your Date of Birth");
        return;
    }


    const currentDate = new Date();

    const dob = new Date(dobInput);

    let age = currentDate.getFullYear() - dob.getFullYear();
  const ageResult = document.getElementById("ageResult");
    ageResult.style.display = "inline";  
    ageResult.value = "Your age is " + age;
}

