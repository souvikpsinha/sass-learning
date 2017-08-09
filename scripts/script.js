function addList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("get-data").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ul-test").appendChild(li);
  }
  document.getElementById("get-data").value = "";



  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}






/*

function addList(){
    var lit = document.createElement("li");
        lit.setAttribute("id", "view" );
        document.getElementById("ul-test").appendChild(lit);


    var x = document.getElementById("get-data").value;
    document.getElementById("view").innerHTML = x;
    //var t = document.createTextNode(inputValue);
    //document.getElementById("view").appendChild(t);

    if (x == ""){
        alert("Please fill you Note!");
    }else{
        document.getElementById("get-data").value = "";
    }
    
}

*/