export function addPerson(name) {
  return { type: "addPerson", payload: name };
}

export function updatePersonsCount() {
  return {
    type: "updatePersonsCount",
  };
}

export function candidateStatus(registationId, name) {
  return {
    type: "candidateUpdate",
    payload: {
      date: new Date(),
      statusType: "Active",
      id: registationId,
      name: name,
    },
  };
}
// export function day() {
//   return { type: "candidateUpdate" };
// }
