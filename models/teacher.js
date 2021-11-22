class Teacher {
  constructor({
    id,
    first_name,
    last_name,
    courses,
    education,
    about
  }){
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.courses = courses
    this.education = education
    this.about = about
  }
}

module.exports = Teacher;
