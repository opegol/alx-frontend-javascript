export default function updateStudentGradeByCity(stList, city, newGrades) {
  const flatNewGrades = [];
  for (const item of newGrades) {
    flatNewGrades.push(item.studentId);
    flatNewGrades.push(item.grade);
  }
  return stList
    .filter((x) => x.location === city)
    .map((y) => {
      const elem = y;
      const idx = flatNewGrades.indexOf(elem.id);
      const grade = idx === -1 ? 'N/A' : flatNewGrades[idx + 1];
      elem.grade = grade;
      return elem;
    });
}
