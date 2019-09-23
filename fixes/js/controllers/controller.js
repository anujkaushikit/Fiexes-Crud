window.addEventListener('load', bind);

// function init() {
//     document.addEventListener('load', bind);
// }
function bind() {
    document.querySelector('#add').addEventListener('click', addQuestion);
}
function addQuestion() {
    var question = new Question();
    for (let key in question) {
        question[key] = document.querySelector('#' + key).value;
    }
    operation.add(question);
    printQuestion(question);
}
function printQuestion(question) {
    var tbody = document.querySelector('#questionprintingarea');
    var tr = tbody.insertRow();
    var index = 0;
    for (let key in question) {
        let td = tr.insertCell(index);
        td.innerText = question[key];
        index++;

    }
    let td = tr.insertCell(index);
    td.appendChild(createIcon('https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png'));
    td.appendChild(createIcon('https://image.flaticon.com/icons/png/128/61/61456.png')); 

}
