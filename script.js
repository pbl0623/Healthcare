document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user input values
    const name = document.getElementById("name").value;
    const bloodPressure = parseFloat(document.getElementById("bloodPressure").value);
    const sugarLevel = parseFloat(document.getElementById("sugarLevel").value);
    const heartbeat = parseInt(document.getElementById("heartbeat").value);

    // Get health advice
    const advice = getHealthAdvice(bloodPressure, sugarLevel, heartbeat);

    // Display results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<h2>Hello, ${name}!</h2>` + advice.join('<br>');
});

function getHealthAdvice(bloodPressure, sugarLevel, heartbeat) {
    const advice = [];

    // Blood Pressure Advice
    if (bloodPressure < 90) {
        advice.push("Your blood pressure is too low. Please consult a healthcare provider.");
    } else if (bloodPressure > 120) {
        advice.push("Your blood pressure is high. Consider lifestyle changes and consult a doctor.");
    }

    // Sugar Level Advice
    if (sugarLevel < 70) {
        advice.push("Your sugar level is too low. Please eat something sweet and consult a doctor if symptoms persist.");
    } else if (sugarLevel > 130) {
        advice.push("Your sugar level is high. Monitor your diet and consult a healthcare provider.");
    }

    // Heartbeat Advice
    if (heartbeat < 60) {
        advice.push("Your heartbeat is lower than normal. Please consult a healthcare provider.");
    } else if (heartbeat > 100) {
        advice.push("Your heartbeat is higher than normal. Consider relaxation techniques and consult a doctor if it persists.");
    }

    if (advice.length === 0) {
        advice.push("All your readings are within the normal range. Keep up the good health!");
    }

    return advice;
}
