
// script.js
// Link para o arquivo CSS personalizado
const linkToStyles = document.createElement("link");
linkToStyles.rel = "stylesheet";
linkToStyles.href = "styles.css";
document.head.appendChild(linkToStyles);

// Prompt functions for the questions
document.getElementById("question1").addEventListener("click", function() {
  Swal.fire({
    title: "What is BMI?",
    text: "BMI stands for Body Mass Index. It is a measure that relates a person's weight to their height and is commonly used to assess body weight and health.",
    icon: "success",
    confirmButtonColor: "#0B666A",
    confirmButtonText: "OK"
  });
});

document.getElementById("question2").addEventListener("click", function() {
  Swal.fire({
    title: "Why is BMI important for health?",
    text: "BMI is important for health because it helps identify whether a person is underweight, normal weight, overweight, or obese. It can be a predictor of health risks such as cardiovascular diseases, diabetes, and hypertension.",
    icon: "success",
    confirmButtonColor: "#0B666A",
    confirmButtonText: "OK"
  });
});

document.getElementById("question3").addEventListener("click", function() {
  Swal.fire({
    title: "How to calculate BMI?",
    text: "To calculate BMI, divide your weight in kilograms by your height in meters squared. The formula is: BMI = weight (kg) / height^2 (m²).",
    icon: "success",
    confirmButtonColor: "#0B666A",
    confirmButtonText: "OK"
  });
});

document.getElementById("question4").addEventListener("click", function() {
  Swal.fire({
    title: "What are the BMI categories?",
    html: `
      <ul>
        <li>Underweight (BMI &lt; 18.5)</li>
        <li>Normal weight (18.5 ≤ BMI &lt; 24.9)</li>
        <li>Overweight (25 ≤ BMI &lt; 29.9)</li>
        <li>Obesity Class I (30 ≤ BMI &lt; 34.9)</li>
        <li>Obesity Class II (35 ≤ BMI &lt; 39.9)</li>
        <li>Obesity Class III (BMI ≥ 40)</li>
      </ul>
    `,
    icon: "success",
    confirmButtonColor: "#0B666A",
    confirmButtonText: "OK"
  });
});

// Restante do seu código JavaScript
// ...






// BMI calculation function
document.getElementById("calculate-btn").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    const bmi = weight / (height * height);
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)} (${getBMICategory(bmi)})`;
});









// clear button
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").textContent = "";
});

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else if (bmi < 34.9) {
        return "Obesity Class I";
    } else if (bmi < 39.9) {
        return "Obesity Class II";
    } else {
        return "Obesity Class III";
    }
}
