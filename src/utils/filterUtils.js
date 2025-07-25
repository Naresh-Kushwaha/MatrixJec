export function filterProfessors(professors, searchQuery) {
  const lowerQuery = searchQuery.toLowerCase();
  return professors.filter((prof) =>
    prof.name.toLowerCase().includes(lowerQuery) ||
    prof.department.toLowerCase().includes(lowerQuery)
  );
}
