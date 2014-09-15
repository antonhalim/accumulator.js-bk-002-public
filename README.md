---
languages: javascript
tags: functions, callbacks
---

# Accumulator
## Getting Started

- Run `npm install`

## Tests

Review the `accumulate.js` file inside the `lib` directory, and then the `accumulate.spec.js` file inside the `spec` directory. Review each of the tests, and then start implementing your solutions to make each test pass in `accumulate.js`.

Run `grunt watch` then edit your files. Grunt will watch for changes. Grunt
will only run tests that start with `it`. When you finish passing a test,
remove the `x` from `xit` to convert it to a runnable test.

## Background

For example, given the collection of numbers:

- 1, 2, 3, 4, 5

And the operation:

- square a number

Your code should be able to produce the collection of squares:

- 1, 4, 9, 16, 25

## Restrictions

Keep your hands off that collect/map/fmap/whatchamacallit functionality
provided by your standard library!
Solve this one yourself using other basic tools instead.

Elixir specific: it's perfectly fine to use `Enum.reduce` or
`Enumerable.reduce`.
