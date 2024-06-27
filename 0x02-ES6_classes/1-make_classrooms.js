import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
	let r1 = new ClassRoom(19);
	let r2 = new ClassRoom(20);
	let r3 = new ClassRoom(34);
	return [r1, r2, r3];
}
