export const filterItems = ({ items, filters }) => {
  return items.filter((item) => {
    let name = true;
    let province = true;
    let municipality = true;
    let actor = true;
    let activity = true;
    let withContact = true;

    if (filters.name != "") {
      name = item.name.toLowerCase().includes(filters.name);
    }
    if (filters.province != "Todas las provincias") {
      province = filters.province === item.province;
    }
    if (filters.municipality != "Todos los municipios") {
      municipality = filters.municipality === item.municipality;
    }
    if (filters.actor != "Todos los actores económicos") {
      actor = filters.actor === item.actor;
    }
    if (filters.activity != "Todas las actividades") {
      activity = item.sectors.includes(filters.activity);
    }
    if (filters.withContact) {
      withContact = item.phoneList.length > 0 || item.mailList.length > 0;
    }
    return name && province && municipality && actor && activity && withContact;
  });
};
