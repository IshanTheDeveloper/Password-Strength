const inputs = document.querySelector("#input");
const lowercase = document.querySelector("#lc");
const uppercase = document.querySelector("#uc");
const number = document.querySelector("#num");
const symbol = document.querySelector("#symbol");
const characters = document.querySelector("#chars");
const strengths = document.querySelector("#strength");

const inputfuction = () => {
  const str = inputs.value;
  console.log(str.length);
  if (str[str.length - 1] >= "A" && str[str.length - 1] <= "Z") {
    uppercase.style.color = "green";
  } else if (str[str.length - 1] >= "a" && str[str.length - 1] <= "z") {
    lowercase.style.color = "green";
  } else if (str[str.length - 1] >= "0" && str[str.length - 1] <= "9") {
    number.style.color = "green";
  }
  if (
    str[str.length - 1] == "!" ||
    str[str.length - 1] == "@" ||
    str[str.length - 1] == "#" ||
    str[str.length - 1] == "$" ||
    str[str.length - 1] == "%" ||
    str[str.length - 1] == "^" ||
    str[str.length - 1] == "&" ||
    str[str.length - 1] == "*"
  ) {
    symbol.style.color = "green";
  }
  characters.innerText = str.length;
  if (str.length <= 7) {
    strengths.innerText = "Weak";
  } else if (str.length >= 8 && str.length <= 11) {
    strengths.innerText = "Moderate";
  } else if (str.length >= 12 && str.length <= 14) {
    strengths.innerText = "Strong";
  } else if (str.length >= 15) {
    strengths.innerText = "Very Strong";
  }
};
inputs.addEventListener("keyup", inputfuction);
