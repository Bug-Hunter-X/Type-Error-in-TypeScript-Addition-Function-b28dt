# Type Error in TypeScript Addition Function

This repository demonstrates a common type error in TypeScript: passing a string argument to a function expecting a number.

## Bug

The `add` function is defined to take two numbers as input and return their sum. However, the code calls `add` with a string, causing a type error.

## Solution

The solution involves type checking the input parameters, or using type assertion to convert the string to a number before the addition.