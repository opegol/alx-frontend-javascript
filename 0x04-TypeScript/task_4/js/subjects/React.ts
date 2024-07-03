/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const expR = this.teacher.experienceTeachingReact;
      return expR > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}
