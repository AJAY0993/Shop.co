class ApiFeatures {
  constructor(query, queryString) {
    this.query = query
    this.queryString = queryString
  }

  filter() {
    const ignoredFields = ['page', 'limit', 'sort', 'select']
    const queryObj = { ...this.queryString }
    ignoredFields.forEach((field) => delete queryObj[field])
    let queryString = JSON.stringify(queryObj)
    queryString = queryString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    )
    this.query = this.query.find(JSON.parse(queryString))
    return this
  }

  sort() {
    let sortBy = ''
    if (this.queryString.sort) {
      sortBy = this.queryString.sort.replace(',', ' ')
    } else {
      sortBy = '-createdAt'
    }
    this.query = this.query.sort(sortBy)
    return this
  }

  limit() {
    let select = ''
    if (this.queryString.fields) {
      this.queryString.fields.replace(',', ' ')
    } else {
      select = '-__v'
    }
    this.query = this.query.select(select)
    return this
  }

  paginate() {
    const page = this.queryString.page || 1
    const limit = this.queryString.limit || 6
    const skip = (page - 1) * limit
    this.query.find().skip(skip).limit(limit)
    return this
  }
}

module.exports = ApiFeatures
