// Question 2:
// Write a program which will take OS name and version from the user separated by a space. Then
// log the OS name and version on the console.
// Input: "Android 9"
// Output: The OS name is Android and version is 9

input = "Windows 10"
mylist= input.split(" ");

console.log (`The OS name is ${mylist[0]} and version is ${mylist[1]}`)