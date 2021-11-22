class Course {
  constructor({
    id,
    name,
    price,
    currency,
    duration,
    periodicity,
    level,
    groups,
    description_short,
    description_full,
    full_img_url,
    thumbnail_img_url
  }){
    this.id = id
    this.name = name
    this.price = price
    this.currency = currency
    this.duration = duration
    this.periodicity = periodicity
    this.level = level
    this.groups = groups
    this.description_short = description_short
    this.description_full = description_full
    this.thumbnail_img_url = thumbnail_img_url
    this.full_img_url = full_img_url
  }
}

module.exports = Course
