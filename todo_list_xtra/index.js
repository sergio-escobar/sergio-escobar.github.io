$("#form1").submit(function (e) {
    e.preventDefault();
    console.log("form submitted")

    var todo_input = document.getElementById("todo-input");

    var todo_text = todo_input.value;
    addNewItem(todo_text);
    todo_input.value = ""; 
});

function addNewItem(todo_text) {

    var todo_card = document.createElement("div");
    todo_card.classList.add("todo_card");

    var todo_text_elem = document.createElement("p");
    todo_text_elem.innerHTML = todo_text;
    todo_card.appendChild(todo_text_elem);
    document.getElementById("container").appendChild(todo_card);
  
    $('body').css("background");

    todo_card.addEventListener("click", function () {
        var todo_card_id = String(Math.random())
        todo_card.id = todo_card_id;
        document.getElementById(todo_card_id).remove()
    });
}