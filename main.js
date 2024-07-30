function updateDateTime() {
  const date = new Date()
  let sec = date.getSeconds()
  let min = date.getMinutes()
  let hour = date.getHours()
  const day = date.getDate()
  const year = date.getFullYear()
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ]
  const month = months[date.getMonth()]
  hour++
  if (min < 10) {
    min = `0` + min
  }
  if (hour < 10) {
    hour = `0` + hour
  }
  if (hour > 12) {
    hour = hour - 12
  }
  if (sec < 10) {
    sec = `0` + sec
  }

  document.getElementById(
    "datetime"
  ).innerHTML = `${month} ${day} ${year} | ${hour}:${min}:${sec}`
}
setInterval(updateDateTime, 1000)
updateDateTime()

let selected = document.querySelectorAll("select")
let selectedValue = document.getElementById("Select").value

function ee() {
  axios
    .get("https://api.aladhan.com/v1/timingsByCity", { params: x })

    .then((response) => {
      console.log("response", response)
      let xx = response.data.data.timings
      shrouk.innerHTML = xx.Sunrise
      dohr.innerHTML = xx.Dhuhr
      asr.innerHTML = xx.Asr
      magreb.innerHTML = xx.Sunset
      asha.innerHTML = xx.Isha
      fajr.innerHTML = xx.Fajr
    })
}
console.log("selected", selected)
let x = {
  country: "EG",
  city: `Tanta`,
}
selected.forEach((item) => {
  item.addEventListener("click", (eo) => {
    console.log(eo.target.value)
    country.innerHTML = eo.target.value

    x = {
      country: "EG",
      city: `${eo.target.value}`,
    }
    console.log(eo.target.value)
    ee()
  })
})
ee()
