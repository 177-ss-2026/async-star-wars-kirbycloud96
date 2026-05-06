async function getPlanet(id) {
  const resp = await fetch(`https://swapi.info/api/planets/${id}/`);
  const data = await resp.json();
  console.info(data);
}

getPlanet(1);
