/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      const expC = this.teacher.experienceTeachingC;
      return expC > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}
