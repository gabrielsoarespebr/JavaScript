document.body.style.cssText = "background-color: #F3F2EF; font-family: Arial";

document.querySelector("main").style.cssText = "display: flex";

document.querySelector("form").style.cssText = "background-color: white; margin: auto; width: 20%; border-radius: 1em; margin-top: 5%; padding: 2%; text-align: center";

document.querySelector("h1").style.cssText = "color: #0a66c2; text-align: center";

document.querySelector("h2").style.cssText = "text-align: center";

document.querySelector("h3").style.cssText = "text-align: center";

document.querySelector("legend").style.cssText = "margin-bottom: 3%; text-align: center; font-weight: bold";

document.querySelector("table").style.cssText = "margin: 5% auto; width: 70%; height: 70%; border-collapse: collapse; background-color: white";

document.querySelectorAll("th").forEach(e => {
    e.style.cssText = "border: 1px solid black; height: 1em";
})

document.querySelector("#registerButton").style.cssText = "background-color: #0a66c2; color: white; margin: 1em auto 0 auto; border: none; padding: 1em; border-radius: 1em; font-weight: bold; cursor: pointer";

document.querySelector("#registerButton").addEventListener("mouseover",function(){
    document.querySelector("#registerButton").style.backgroundColor = "#4e94d9";
});

document.querySelector("#registerButton").addEventListener("mouseout",function(){
    document.querySelector("#registerButton").style.backgroundColor = "#0a66c2";
});

document.querySelectorAll("form > input").forEach(e => {
    e.style.cssText = "margin: .5em 0";
});