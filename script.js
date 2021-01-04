let TOTAL_COMMITS = 0;
let TOTAL_DAYS = 0;
let AVERAGE = 0;
let ARRAY_DAY_COMMIT = [];

//digamos que a media seja 15 1-5,5-10,10-15,15+
// AVERAGE = 15;
// 1-5 if(0<ARRAY_DAY_COMMIT[index]<(AVERAGE-(AVERAGE*0,6666666)))
// 5-10 if((AVERAGE-(AVERAGE*0,6666666))<ARRAY_DAY_COMMIT[index]<(AVERAGE-(AVERAGE*0,3333333)))
// 10-15 if((AVERAGE-(AVERAGE*0,3333333))<ARRAY_DAY_COMMIT[index]<AVERAGE)
// 15+ if(ARRAY_DAY_COMMIT[index]>AVERAGE)

const updateColors = () => {
  const arrayOfDays = document.getElementById("wrapper").childNodes;
  //console.log((AVERAGE - (AVERAGE * 0,6)));
  [...arrayOfDays].forEach((element, index) => {
    if (ARRAY_DAY_COMMIT[index] === 0) {
      return element.removeAttribute("class");
    }
    if (
      0 < ARRAY_DAY_COMMIT[index] &&
      ARRAY_DAY_COMMIT[index] <= (AVERAGE - (AVERAGE * 0,6))
    ) {
      element.removeAttribute("class");
      console.log("low-commit")
      return element.classList.add("low-commit");
    }
    if (
      AVERAGE - (AVERAGE * 0,6) <= ARRAY_DAY_COMMIT[index] &&
      ARRAY_DAY_COMMIT[index] <= AVERAGE - (AVERAGE * 0,3)
    ) {
      element.removeAttribute("class");
      console.log("average-commit")
      return element.classList.add("average-commit");
    }
    if (
      AVERAGE - (AVERAGE * 0,3) <= ARRAY_DAY_COMMIT[index] &&
      ARRAY_DAY_COMMIT[index] <= AVERAGE
    ) {
      element.removeAttribute("class");
      console.log("high-commit")
      return element.classList.add("high-commit");
    }
    if (ARRAY_DAY_COMMIT[index] > AVERAGE) {
      element.removeAttribute("class");
      console.log("more-than-average-commit")
      return element.classList.add("more-than-average-commit");
    }
    element.removeAttribute("class");
    return element.classList.add("red");
  });
};

document.getElementById("myBtn").addEventListener("click", function () {
  const commits = parseInt(document.querySelector("#inpt").value);
  TOTAL_COMMITS += commits;
  ARRAY_DAY_COMMIT.push(commits);
  TOTAL_DAYS += 1;
  var newElement = document.createElement("div");

  var element = document.getElementById("wrapper");
  element.appendChild(newElement);
  updateColors();

  AVERAGE = Math.floor( TOTAL_COMMITS / TOTAL_DAYS);

  console.log(TOTAL_COMMITS, TOTAL_DAYS, AVERAGE);
});
