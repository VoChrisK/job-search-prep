## JS forEach method 
* According to the mdn web docs: “There is no way to stop or break a forEach() loop other than by throwing an exception. So return statements will not stop the loop.

## JS Slice vs Splice
* Slice returns a shallow copy of a new array while splice mutates the contents of the array in place

## JS Closures and Global Variables 
* Global variables may not reset for each test cases, so closures can be used to mimic global variables

## Passing by reference using arrays and objects 
* This will allow us to “return” additional variables in a function. Passing by value using primitive values (i.e. numbers, strings) will not work

## Heap Problems
* One approach to solving heap problems is to think the opposite. If you need to return k minimum values, then use a maxHeap, and vice versa.

## Using Objects as keys in JS
* You need to use a Map JS data structure to be able to use objects as keys. If you try to add an object as a key in an object, then it will show up as “[object Object]”.
* Good Leetcode problem for the Map data structure: https://leetcode.com/problems/copy-list-with-random-pointer/description/

## Looping in JS
* For of is used for iterable data structures like arrays, strings, etc.
* For in is used for objects

## Sorting in JS
* To sort a string alphabetically (Group Anagrams for example), sort() without passing a callback works.