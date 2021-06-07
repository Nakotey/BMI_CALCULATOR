const button = document.querySelector(".bmi_button");
const reset = document.querySelector(".bmi_reset");


const para = document.querySelector(".bmi_para");
let weightInput = document.querySelector(".bmi_weight");
let heightInput = document.querySelector(".bmi_height");


para.style.fontSize = '200%';


calculateBMI = ()=> {
    let weight = weightInput.value;
    let height = heightInput.value;
    let bmi = Math.round(weight / (height ** 2));
  
    if(bmi <= 0 || bmi === Infinity){
      para.textContent = "Please enter valid values."
    }else if (bmi < 18.5) {
      para.textContent = "Your BMI is " + bmi + ", so you are underweight."
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      para.textContent = "Your BMI is " + bmi + ", so you have a normal weight."
    } else {
      para.textContent = "Your BMI is " + bmi + ", so you are overweight."
  }
}

button.addEventListener("click", calculateBMI);

buttonReset = () => {
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");
   
    weight.value = "";
    height.value = "";
    para.textContent = "";
}

reset.addEventListener("click", buttonReset);

