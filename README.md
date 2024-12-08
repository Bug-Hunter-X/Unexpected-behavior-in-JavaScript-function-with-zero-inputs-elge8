# Unexpected Behavior in JavaScript Function with Zero Inputs

This repository demonstrates a subtle bug in a JavaScript function that handles zero inputs. The function is intended to return 0 if either input is 0, but it also returns 0 when both inputs are 0, which might not be the expected behavior.

## Bug Description

The `myFunction` function is designed to divide two numbers. However, it returns 0 if either input is 0, and it also returns 0 if both inputs are 0, which could lead to unexpected results in certain scenarios.

## Solution

The solution involves adding a check to explicitly handle the case where both inputs are 0, throwing an error to indicate that division by zero is not allowed in this specific situation.
