interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Dele",
	lastName: "Ojei",
	age: 19,
	location: "Abuja"
};

const student2: Student = {
        firstName: "Femi",
        lastName: "Musa",
        age: 21,
        location: "Abuja"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "lime";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const fnameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  fnameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(fnameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);

