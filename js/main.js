window.onload = function () {
    const form = document.getElementById("calories-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const weight = document.getElementById("weight").value;
      const height = document.getElementById("height").value;
      const age = document.getElementById("age").value;
      const activityLevel = document.getElementById("activity-level").value;
  
      console.log("Gender:", gender);
      console.log("Weight:", weight);
      console.log("Height:", height);
      console.log("Age:", age);
      console.log("Activity Level:", activityLevel);
  
      // Aquí puedes agregar la lógica para calcular las calorías y actualizar la UI
       //utilizar la formula de benedict
        function calculateCalories(gender, weight, height, age, activityLevel) {
            let bmr;

            if (gender === "male") {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }

            let calories;
            switch (activityLevel) {
                case "sedentary":
                    calories = bmr * 1.2;
                    break;
                case "light":
                    calories = bmr * 1.375;
                    break;
                case "moderate":
                    calories = bmr * 1.55;
                    break;
                case "active":
                    calories = bmr * 1.725;
                    break;
                case "very-active":
                    calories = bmr * 1.9;
                    break;
                default:
                    calories = bmr;
            }

            return calories;
        }

        const calories = calculateCalories(gender, weight, height, age, activityLevel);
        console.log("Calories:", calories);
        const resultBox = document.querySelector(".calories-result .output-box");
        resultBox.textContent = calories.toFixed(2);
    });


  };