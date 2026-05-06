const output = document.querySelector("#output");
const select = document.querySelector("#sw-select");

select.addEventListener("change", async (event) => {
  const category = event.target.value;
  if (!category) return; // guard clause — user picked the placeholder

  //loading state

  output.textContent = `Loading ${category}...`;

  const resp = await fetch(`https://swapi.info/api/${category}/`);

  if (!resp.ok) {
    output.textContent = `Something went wrong. Status: ${resp.status}`;
    return;
  }

  const data = await resp.json();
  console.info(data);
  output.textContent = `Loaded ${data.length} results.`;
});
