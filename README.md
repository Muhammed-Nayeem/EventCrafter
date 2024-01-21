# EventPlanner
`EventPlanner` - This is the project I've build. This project is based on Events Planner company that actually work on various events planning and hosting them. Project specification is given below:

### Tools and Technologies
---
I'm using this tools and tech to build this project :

- `React.js` - To make the dynamic UI design.
- `React Router` - To make dynamic Route and Navigation.
- `Tailwind CSS` - Styling purpose.
- `Dais UI` - Pre built and styled component.
- `Firebase` - For Authentication.
- `React PropTypes, React Rating, Swiper.js, React Icons, React Hot Toast` - Some packages are using for working purpose.

### Features
---
- `Booking` : An user can booked an Event.
- `Booked Events` : An user will shown his/her booked Events.
- `Details` : An user can see the Event Details before Booked an Event.
- `Account Creation` : An user can Register / Create an account with Email and Password.
- `Sign In or Login` : An user can Sign In / Login by Email and Password.
- `Social Login Authentication` : An user can Sign In / Sign Up with Google Account.
- `Validation` : Users Password and Email validity check.
- `Password Reset` : Users can reset their password if they've forget their password.
- `User Profile` : In here an user will shown his/her all information.

### Project Is Live At Firebase
---
__`EventPlanner`__ - [Show Live Site](https://event-planner-ec23.web.app/)

---
<br/>
<br/>

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <i>Correct Answer is option - A</i>
In this program - First define a variable named "greeting"; then store an empty object to this "greeting" variable. So, final value of this variable is an empty Object.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <i>Correct Answer is option - C</i>
In this program A function named "sum" has taken two parameters and return their sum. But when the argument is passed to this function there is not type check is it number or not. So, user give first argument a number and second argument a string. We know that in string "+" is used to concatenate tow string. So, In that case sum function "implicitly" concatenate this two parameters and return "12".

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <i>Correct Answer is option - A</i>
In this program define a array named "food" and store some fruits in it.  
And also define an object named "info" with key, value. and info object key "favoriteFood" value is assigned from "food" array's 1st element. Then "info" object key favoriteFood is updated by "🍝" . So, "info" object is updated. But the "food" array remains with this `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <i>Correct Answer is option - B</i>
We know everything in javascript happens inside in Execution context. And it has two phases:  

- Memory Component __or__ Variable Environment
- Thread Of Execution __or__ Code Execution

So, when this code is running, A Global Execution Context has created and The two mentioned phases also created, First of all the program run top to bottom for 'Memory Component/Variable Environment' to collect the variable and store them in this phase. So here define a function named "sayHi()" will be stored in Memory phase with key, value pair like:  
`sayHi : Store the function itself here`  
Then again the whole code is running top to bottom for 'Thread Of Execution/Code Execution' and starting the execution in that case found a "console.log(sayHi())" with function invoked. And when the function invoked whole Execution Context process is creating. So, In that case "sayHi" function has one parameter called "name". First of all in 'Memory Component' store with key, value pair like:  
`name : undefined` - for variable undefined keyword will be stored.  
Then "Code Execution Phase" trying to set the value of 'name' variable which is in local variable environment. But user doesn't pass any argument when sayHI() function invoked. So, In code execution phase name variable will be stored with undefine value and return the result where the function invoked and the whole Execution Context will be close off.

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <i>Correct Answer is option - C</i>
We know about Truthy and Falsy values in Javascript. Falsy values are `0, -0, 0n, "", undefined, NAN, null adn document` !  
And Truthy value is that which is carrying value in it. You can assume that without any of the Falsy values rest of values are Truthy Value.  

So, In this program an array named "nums" store with [0, 1, 2, 3] this values. Here you can see that one Falsy Value is present in this array and it is 0. And another variable named "count" is define with 0 value in it.  

An Array method called forEach is running on "nums" array and it will run based on the truthy value and increase/sum the "count" value. But here the first value is 0 in nums array and it is falsy value so first execution will skip and count value still 0. And rest of the values are Truthy value in "nums" array [1, 2, 3]. The forEach loop will play again and find all the truthy value and count value will added up with initial value 1, and the final count value is 3.

</p>
</details>
