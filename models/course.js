class Course {
  constructor({
    id,
    name,
    price,
    currency,
    duration,
    periodicity,
    groups,
    description_short,
    description_full
  }){
    this.id = id
    this.name = name
    this.price = price
    this.currency = currency
    this.duration = duration
    this.periodicity = periodicity
    this.groups = groups
    this.description_short = description_short
    this.description_full = description_full
  }
}

module.exports = Course
