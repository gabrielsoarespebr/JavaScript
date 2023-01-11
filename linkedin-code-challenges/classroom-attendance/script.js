const classroom = ["Alysson", "Mylena", "Alice", "Bernardo", "Carlos", "Daiane", "Eduardo"];

function getClassroom(classroom, hasTeacherAssistant) {
    if (hasTeacherAssistant) {
        const [teacher, teacherAssistant, ...students] = classroom;
        console.log(`Teacher: ${teacher}\nTeacher Assistant: ${teacherAssistant}\nStudents: ${students.join(", ")}`);
    }
    else {
        const [teacher, ...students] = classroom;
        console.log(`Teacher: ${teacher}\nStudents: ${students.join(", ")}`);
    }
}

getClassroom(classroom, false);