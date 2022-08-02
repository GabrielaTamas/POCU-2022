const input = document.getElementById('input');
const list = document.getElementById('list');
const btn = document.getElementById('btn');

function handleAddButton() {
    if (input.value) {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.append(li);
        input.value = '';
        const del = document.createElement('button');
        del.addEventListener('click', function() {
            li.remove();
        })
        del.innerHTML = "Delete";
        li.append(del);
    } else {
        alert('Insert text in input area!');
    }
}

btn.addEventListener('click', handleAddButton);
del.addEventListener('click', handleRemoveButton);