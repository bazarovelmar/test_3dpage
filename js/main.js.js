function check() {
    let form = document.getElementsByName("file")
    if (form[0].checked) {
        show("slt")
    }
     if (form[1].checked) {
        show("plgx")
    }
}

function show(file_form) {                                   // Появление формы при заданном типе файла
    let slt_form = document.getElementById("stl_form");
    let plgx_form = document.getElementById("plgx_form");
    fileType = document.getElementById("upload")
    
    if (file_form == "slt") {
        plgx_form.style.display = "none";
        slt_form.style.display = "block";
        fileType.setAttribute("accept", ".STL")
    }
    
    if (file_form == "plgx") {
        slt_form.style.display = "none";
        plgx_form.style.display = "block";
        fileType.setAttribute("accept", ".PLGX")
    }
    let block = document.getElementById("block");
    block.style.visibility = "visible";
}

function material_check(elem) {                                // Проверка того, что пользователь выбрал свой вариант материала
    
    let mat = elem.options[elem.selectedIndex].value;
    let comment = document.getElementById("comment");
    
    if (mat == "9") 
        comment.setAttribute("required", "");
    else
        comment.removeAttribute("required");    
}


/* $(function() {
  document.getElementById('ajax-contact-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "contact.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
        if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger("reset");
        }
      }
    }
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(f));
  }, false);
 
});

*/