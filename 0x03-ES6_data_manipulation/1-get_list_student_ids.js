export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.map((x) => x.id);
}
