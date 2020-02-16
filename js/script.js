const EnglishBtn = document.getElementById("English");
const ArabicBtn = document.getElementById("Arabic");
const Html = document.getElementsByTagName("html")[0];
const stylesheet = document.getElementsByTagName("link")[3]
console.log(stylesheet)
EnglishBtn.addEventListener("click",()=>{
  if(Html.getAttribute("lang") === "ar"){
    Html.setAttribute("lang","en");
    Html.setAttribute("dir","ltr");
    stylesheet.setAttribute("href","./css/bootstrap.min.css")
    ArabicBtn.classList.remove("active");
    EnglishBtn.classList.add("active")
  }
})
ArabicBtn.addEventListener("click",()=>{
    if(Html.getAttribute("lang") === "en"){
      Html.setAttribute("lang","ar");
      stylesheet.setAttribute("href","./css/bootstrap-a.css")
      Html.setAttribute("dir","rtl");
      ArabicBtn.classList.add("active");
      EnglishBtn.classList.remove("active")
    }
  })