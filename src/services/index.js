export const getStudents = () => {
  return fetch('http://localhost:8080/api/student').then((res) => res.json());
};
export const getClassrooms = () => {
  return fetch('http://localhost:8080/api/classroom').then((res) => res.json());
};
export const getCourses = () => {
  return fetch('http://localhost:8080/api/course').then((res) => res.json());
};
export const getDepartments = () => {
  return fetch('http://localhost:8080/api/department').then((res) =>
    res.json()
  );
};
export const getFaculties = () => {
  return fetch('http://localhost:8080/api/faculty').then((res) => res.json());
};
export const getInstructors = () => {
  return fetch('http://localhost:8080/api/instructor').then((res) =>
    res.json()
  );
};

export const getTTable = () => {
  return fetch('http://localhost:8080/api/timetable/max').then((res) =>
    res.json()
  );
};
