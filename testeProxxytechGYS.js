import { randomUUID } from 'crypto';

function transformarParaGeoJSON(input) {
  
  const latitude = parseFloat(input.GEOLOCALIZACAO.coordinates[0]);
  const longitude = parseFloat(input.GEOLOCALIZACAO.coordinates[1]);

  const geojson = {
    type: "Feature",
    properties: {
      id: randomUUID(),
      name: input.nome,
      full_address: input.full_address,
      city: input.cidade,
      contacts: input.contacts || [],
      horario: input.horario || {}
    },
    geometry: {
      type: "Point",
      coordinates: [longitude, latitude] // ordem correta
    }
  };

  return geojson;
}