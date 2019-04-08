var input = ['value',window.location.search.substring(2)]
document.getElementById("demo1").innerHTML = input.value;

var url = window.location.search.substring(1);
document.getElementById("demo2").innerHTML = "<a href='"+url+"'>About</a>";






document.getElementById("demo3").innerHTML = 5;
document.getElementById("demo4").innerHTML = "<a href='/about.html'>About</a>";
//document.getElementById("demo5").innerHTML = escapeHTML`<a href='${url}'>About</a>`;
