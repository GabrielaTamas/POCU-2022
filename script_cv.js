function readMore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
    var div = document.querySelector(".more");
  
	if (dots.style.display === "none") {
	  dots.style.display = "block";
	  btnText.innerHTML = "Show more";
	  moreText.style.display = "none";
      div.style.bottom = "71px";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Show less";
	  moreText.style.display = "block";
      div.style.bottom = "100px";
	}
}