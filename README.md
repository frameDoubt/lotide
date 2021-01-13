# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @branwwright/lotide`

**Require it:**

`const _ = require('@branwwright/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns value of first index of an array
* `tail()`: returns an array of all the values of a given index, except its first value
* `middle()`: returns an array with middle index(es), depending on the length of the arrat
* `assertArraysEqual()`: prints to console whether if given arrays are equal
* `assertEqual()`: used to compare the equality of given primitive values prints result of assertion
* `eqArrays()`: return boolean of equality of given arrays