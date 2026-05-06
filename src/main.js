const output = document.querySelector("#output");
const select = document.querySelector("#sw-select");

select.addEventListener("change", async (event) => {
  const category = event.target.value;
  if (!category) return; // guard clause — user picked the placeholder

  //loading state

  output.textContent = `Loading ${category}...`;

  try {
    const resp = await fetch(`https://swapi.info/api/${category}/`);

    if (!resp.ok) {
      output.textContent = `Something went wrong. Status: ${resp.status}`;
      return;
    }

    const data = await resp.json();
    const html = data
      .map((item) => `<li>${item.name ? item.name : item.title}</li>`)
      .join("");

    output.innerHTML = `<ul>${html}</ul>`;
  } catch (error) {
    console.error(error);
    output.textContent = `An error has occurred: ${error.message}`;
  }
});
