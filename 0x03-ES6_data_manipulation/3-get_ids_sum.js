export default function getStudentsIdSum(studentsList) {
  return studentsList.reduce((tot, x) => tot + x.id, 0);
}
