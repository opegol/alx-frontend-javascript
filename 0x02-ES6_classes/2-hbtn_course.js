export default class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string') {
			throw new TypeError('Name must be a string');
		} else if (typeof length !== 'number') {
			throw new TypeError('Length must be a number');
		} else if ((!(students instanceof Array)) ||
				(students.some(x => typeof x !== 'string'))) {
			throw new TypeError('Students must be an array of strings');
		}

		this._name = name;
		this._length = length;
		this._students = students;
	}

	get name() {
		return this._name;
	}

	get length() {
		return this._length;
	}

	get students() {
		return this_students;
	}

	set name(name) {	
		if (typeof name !== 'string') {
			throw new TypeError('Name must be a string');
		}
		this._name = name;
	}

	set length(l) {
		if (typeof l !== 'number') {
			throw new TypeError('Length must be a number');
		} 
		this._length = l;
	}

	set students(s) {
		if ((!(s instanceof Array)) &&
				(s.some(x => typeof x !== 'string'))) {
			throw new TypeError('Students must be an array of strings');
		}
		this._students = s;
	}
}


