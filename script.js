const resultsList = document.getElementById('results');
new URLSearchParams(window.location.search).forEach((value, name) => {
    const listItem = document.createElement('p');
    listItem.textContent = `${name}: ${value}`;
    resultsList.appendChild(listItem);
});

