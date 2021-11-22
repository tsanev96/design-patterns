// loc 397

// FIRST METHOD
// BEFORE: all classes are tightly coupled
export class CompanyBefore {
  createSoftware() {
    const designer = new Designer();
    const programmer = new Programmer();
    const tester = new Tester();

    console.log("creating software before");

    designer.designArchitecture();
    programmer.writeCode();
    tester.testCode();
  }
}

class Designer {
  designArchitecture() {
    console.log("design the architecture");
  }
}

class Programmer {
  writeCode() {
    console.log("write code");
  }
}

class Tester {
  testCode() {
    console.log("test code");
  }
}

const companyBefore = new CompanyBefore();
companyBefore.createSoftware();

//////////////////////

/**
 * This is for both second and third method
 */
abstract class Employee {
  abstract doWork(): void;
}

class DesignerAfter extends Employee {
  doWork() {
    console.log("design the architecture");
  }
}

class ProgrammerAfter extends Employee {
  doWork() {
    console.log("write code");
  }
}

class TesterAfter extends Employee {
  doWork() {
    console.log("test code");
  }
}

class ArtistAfter extends Employee {
  doWork() {
    console.log("do art");
  }
}

// SECOND METHOD
// AFTER: polymorphism helped us simplify the code, but the rest of the Company class still depends on the concrete employee classes.
class CompanyAfter {
  employees = [new DesignerAfter(), new ProgrammerAfter(), new TesterAfter()];
  createSoftware() {
    console.log("creating software after");
    for (const employee of this.employees) {
      employee.doWork();
    }
  }
}

const companyAfter = new CompanyAfter();
companyAfter.createSoftware();

// THIRD METHOD
// BEST
// AFTER:the primary method of the Company class is independent from concrete employee classes. Employee objects are created in concrete company subclasses.
/**
 * Factory Method pattern
 */
abstract class CompanyBest {
  employees = this.getEmployees();
  abstract getEmployees(): Employee[];
  createSoftware() {
    console.log("creating software after best");
    for (const employee of this.employees) {
      employee.doWork();
    }
  }
}

class GameDevCompany extends CompanyBest {
  getEmployees() {
    return [new DesignerAfter(), new ArtistAfter()];
  }
}

class OutsorcingCompany extends CompanyBest {
  getEmployees() {
    return [new ProgrammerAfter(), new TesterAfter()];
  }
}

const gameDevCompany = new GameDevCompany();
gameDevCompany.createSoftware();

const outsorcingCompany = new OutsorcingCompany();
outsorcingCompany.createSoftware();
