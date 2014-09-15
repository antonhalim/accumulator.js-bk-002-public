---
languages: javascript
tags: functions, callbacks
---

# Accumulator

## Tests

Review the `accumulate.js` file inside the `lib` directory, and then the `accumulate-spec.js` file inside the `spec` directory. Review each of the tests, and then start implementing your solutions to make each test pass in `accumulate.js`.

## Background

For example, given the collection of numbers:

- 1, 2, 3, 4, 5

And the operation:

- square a number

Your code should be able to produce the collection of squares:

- 1, 4, 9, 16, 25

To run the specs follow these commands:
- first install the new gem to run the tests
  - `gem sources -a http://flatiron:33west26@gems.flatironschool.com`
  - `gem install jasmine-flatiron`
- to run in the command line run
  -  `jasmine-flatiron`
- to run in the browser
  - `jasmine-flatiron -b`