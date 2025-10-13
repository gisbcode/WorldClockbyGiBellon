
document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    let newYorkElement = document.querySelector("#new-york");
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = `${newYorkTime.format(
      "h:mm:ss"
    )} <small>${newYorkTime.format("A")}</small>`;

    let londonElement = document.querySelector("#london");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = `${londonTime.format(
      "h:mm:ss"
    )} <small>${londonTime.format("A")}</small>`;

    let saoPauloElement = document.querySelector("#sao-paulo");
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloTimeElement = saoPauloElement.querySelector(".time");
    let saoPauloTime = moment().tz("America/Sao_Paulo");

    saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM Do YYYY");
    saoPauloTimeElement.innerHTML = `${saoPauloTime.format(
      "h:mm:ss"
    )} <small>${saoPauloTime.format("A")}</small>`;

  }

  updateTime();
  setInterval(updateTime, 1000);
});
