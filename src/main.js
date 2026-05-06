async function getPlanet(id) {
  const resp = await fetch(`https://swapi.info/api/planets/${id}/`);

  if (!resp.ok) {
    console.error(`Request failed: ${resp.status}`);
    return;
  }

  const data = await resp.json();
  console.info(data);
}

getPlanet(999);
