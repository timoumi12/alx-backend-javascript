export default function createReportObject(employeesList) {
  return {
    allEmployees: employeeList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
