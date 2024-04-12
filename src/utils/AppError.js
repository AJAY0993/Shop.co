class AppError extends Error {
  constructor(statusCode, message) {
    super(message)
    this.status = statusCode < 500 ? 'failed' : 'error'
  }
}
