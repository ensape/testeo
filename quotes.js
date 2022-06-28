const quotes = []
let nextId = 0

function list() {
  return quotes
}

function create(text, author) {
  const quote = { id: nextId, text, author }
  quotes.push(quote)
  nextId++

  return quote
}

module.exports = { list, create }