/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const expJ = this.teacher.experienceTeachingJava;
      return expJ > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}
