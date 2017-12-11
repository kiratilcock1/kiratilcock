var scrollpos = window.scrollY;
var header = document.getElementById("header");
var contactbutton = document.getElementById("contactbutton");

function add_class_on_scroll() {
  header.classList.add("header-color");
}
function remove_class_on_scroll() {
  header.classList.remove("header-color");
}
function button_add() {
  contactbutton.classList.add("button-outline");
}
function button_remove() {
  contactbutton.classList.remove("button-outline");
};

window.addEventListener('scroll', function(){
    scrollpos = window.scrollY;
    if(scrollpos > 150){
        add_class_on_scroll();
        button_add();
    }
    else {
        remove_class_on_scroll();
        button_remove();
    }
    console.log(scrollpos);
});
