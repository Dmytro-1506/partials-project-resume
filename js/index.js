// Function to load a partial into a specific element
function loadPartial(id, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${file}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Load partials into placeholders
loadPartial('header', './partials/header.html');
