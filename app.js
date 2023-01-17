let number = document.querySelectorAll("#number");
let pTitle = document.querySelectorAll(".p-title");
let pNumber = document.querySelectorAll(".p-number");

let counter = 0;
let technologies = [
  "Web Designing",
  "Web Development",
  "Mobile App Development",
  "Staffing",
];

for (let i = 0; i <= number.length; i++) {
  setInterval(() => {
    if (counter == 87) {
      clearInterval;
    } else {
      counter += 1;
      pTitle[i].innerText = `${technologies[i]}`;
      pNumber[i].innerText = `${counter}%`;
    }
  }, 100);
}
