// Code goes here!
class Department {
    static fiscalYear = 2020;
    /* private id: string;
    private name: string; */
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        //this.id = id
        //this.name = name
    }

    static createEmployee(name: string) {
        return { name: name }
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmploye(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }

}

class ITDepartment extends Department {
    public admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");

    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please Pass a valid value!");

        }
        this.addReport(value)
    }


    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmploye(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }


}




const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max']);

it.describe();
it.addEmploye('Max');
it.addEmploye('Manu');
it.printEmployeeInformation();
console.log(it)

const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Year end Report'
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport)
accounting.printReports();
accounting.addEmploye('Max');
accounting.addEmploye('Manu');

console.log(accounting)


/* const accountingCopy = { name: 's', describe: accounting.describe };
accountingCopy.describe(); */