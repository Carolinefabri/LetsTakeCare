// Prompt functions for the questions
document.getElementById("question1").addEventListener("click", function() {
    alert("BMI stands for Body Mass Index. It is a measure that relates a person's weight to their height and is commonly used to assess body weight and health.");
});

document.getElementById("question2").addEventListener("click", function() {
    alert("BMI is important for health because it helps identify whether a person is underweight, normal weight, overweight, or obese. It can be a predictor of health risks such as cardiovascular diseases, diabetes, and hypertension.");
});

document.getElementById("question3").addEventListener("click", function() {
    alert("To calculate BMI, divide your weight in kilograms by your height in meters squared. The formula is: BMI = weight (kg) / height^2 (m²).");
});

document.getElementById("question4").addEventListener("click", function() {
    alert("BMI categories are used to classify individuals based on their BMI values. The categories are: underweight (BMI < 18.5), normal weight (18.5 ≤ BMI < 24.9), overweight (25 ≤ BMI < 29.9), obesity class I (30 ≤ BMI < 34.9), obesity class II (35 ≤ BMI < 39.9), and obesity class III (BMI ≥ 40).");
});

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

// Clear button event
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
