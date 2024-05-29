let array = [];

function updateArrayDisplay() {
    document.getElementById('arrayDisplay').innerHTML = `Array: [${array.join(', ')}]`;
}

function pushElement() {
    const value = document.getElementById('pushInput').value;
    if (value !== "") {
        array.push(value);
        document.getElementById('pushInput').value = '';
        updateArrayDisplay();
    } else {
        alert("Please enter a value to push.");
    }
}

function popElement() {
    if (array.length > 0) {
        array.pop();
        updateArrayDisplay();
    } else {
        alert("Array is empty.");
    }
}

function shiftElement() {
    if (array.length > 0) {
        array.shift();
        updateArrayDisplay();
    } else {
        alert("Array is empty.");
    }
}

function unshiftElement() {
    const value = document.getElementById('unshiftInput').value;
    if (value !== "") {
        array.unshift(value);
        document.getElementById('unshiftInput').value = '';
        updateArrayDisplay();
    } else {
        alert("Please enter a value to unshift.");
    }
}
