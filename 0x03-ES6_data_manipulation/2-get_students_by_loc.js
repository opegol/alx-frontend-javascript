export default function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.filter((x) => x.location === city);
}
