Test test

# Lowbar - Collections, Functions and Language

## Goals

1. Continue practicing test-driven development (TDD) - both the process and the tools you'll be using to do it from now until the end of the course (and beyond).
2. Get an 'inside view' of one of the most heavily used JavaScript libraries, [lodash](https://lodash.com/) (50m downloads on NPM last month).
3. Lay the foundations for understanding the functional style of programming that JS lends itself so well to.

## Tasks

On this sprint we'll implement lowbar.js, our own version of the popular utilities library lodash.js. The methods you should implement are listed below, but feel free to implement any others you find interesting if you finish.

_Do not use higher-order native array methods such as `map`, `filter`, `reduce`, `forEach` in your implementation_ so you can gain a deeper understanding of how these methods work behind the scenes.

You should be heavily referencing the [lodash](https://lodash.com/docs/4.17.4/) documentation to understand how your functions should work.

The following are the names of the lodash functions that you should aim to implement your own versions of using TDD. Note that some of these names will look familiar, but you need to check the documentation as they may offer additional functionality.

- `identity` - **Note: this function and the tests have already been written for you**
- `fromPairs`
- `times`
- `map`
- `filter`
- `forEach`
- `invert`
- `zip`
- `fill`
- `find`

## Advanced Tasks

Sometimes mock functions of our own creation do not allow us to capture and assert the behaviours we need to. Luckily, there are frameworks that have created their own mock functions with additional behaviour that we can use in our code. Take a look at [this supplementary lecture](https://youtu.be/4My60UEhPCc) about how we can utilise `Jest Mock Functions`

You _may_ need to use these [Jest Mock Functions](https://jestjs.io/docs/mock-functions) to test your implementation of the methods below!

The docs should always be your first point of call for information but the [notes](https://notes.northcoders.com/courses/js-fundamentals/testing-higher-order-functions) could be useful and you have an extra `testing-side-effects.md` file in this repo too!

- `sample`
- `shuffle`
- `chunk`
- `intersection`
- `remove`
- `reduce`

## Super Advanced Tasks

- Pick some more lodash functions yourself (from the `Arrays` or `Collections` sections of their documentation) to re-implement with TDD.
