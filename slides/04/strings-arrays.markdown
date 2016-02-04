---
layout: slides
title: "Strings and Arrays"
---

<section markdown="block" class="intro-slide">
# {{ page.title }}

### {{ site.course_number}}-{{ site.course_section }}

<p><small></small></p>
</section>

<section markdown="block">
## These Methods You Talk About Sound Intriguing 

### Let's take a look at some more methods!

* [Strings have a bunch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2 )
* [Arrays do too](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_array_instances)
</section>


<section markdown="block">
## Some Useful String Methods

__Note that these methods don't change the original string that they're called on:__ &rarr;

* [split([separator][, limit])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - splits a String object into an array of strings by separating the string into substrings - default is one element of original string if no separator is specified. &rarr;
* [toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) and [toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) - um... self explanatory? &rarr;
* [slice(beginSlice[, endSlice])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) 
	* extracts a section of a string and returns a new string starting at index, beginSlice, and going to end of string or up to, but not including endSlice <code>"racecar".slice(1, 4)</code> &rarr; <code>'ace'</code>
	* negative values for both parameters are ok (treated as length + index value): <code>"racecar".slice(0, -1)</code> &rarr; <code>'raceca'</code>
* [replace(regexp\|substr, newSubStr\|function[, flags])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) - returns a new string with some or all matches of a pattern replaced by a replacement (both substrings and regexes work) &rarr;
</section>

<section markdown="block">
## Some Useful Array Methods

__These methods *modify* the array that they're called on!__ &rarr;

* [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - removes and returns the last element from the array 
* [push(element1, ..., elementN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - adds one or more elements to the end of an array and __returns the new length__ of the array
* [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - reverses the order of the elements of an array — the first becomes the last, and the last becomes the first.
* [sort([compareFunction])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 
	* sorts the elements of an array in place and returns the array (default sort is by unicode code point value)
	* <code>compareFunction(a, b)</code> &rarr; <code>return</code> <code>-1</code>, <code>0</code>, or <code>1</code>
* [splice(index, howMany[, element1[, ...[, elementN]]])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
	* adds and/or removes elements from an array, starting at <code>index</code>... and removing <code>howMany</code> elements
	* __returns spliced elements as array__
	* negative <code>index</code> - begin that many elements from end
</section>

<section markdown="block">
## And Even More Array Methods

__These don't mutate the array that they're called on.__ &rarr;

* [slice(index, howMany[, element1[, ...[, elementN]]])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) -  returns a shallow copy of a portion of an array into a new array object
	* called with no arguments - copies entire array (start at index 0, end at last element)
* [join([separator = ','])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - joins all elements of an array into a string using separator (default is comma)
* [forEach(callback[, thisArg])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - calls a function for each element in the array
* [every(callback[, thisArg])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) -  tests whether all elements in the array pass the test implemented by the provided function
</section>

<section markdown="block">
### Looping Over Arrays

Errrr. It looks like there are a lot of ways to do this. __What are they (there are three, and one of 'em is the old classic.__ &rarr;

* use a for loop
* use the forEach method
* use the every method
{:.fragment}

<br>
__Which one should we use?__ &rarr;
{:.fragment}

* the classic <code>for</code> loop is actually the fastest (though, for some engines, you'll have to cache the length!?)
* <code>forEach</code> and every are a little bit closer to what you're actually doing (_more expressive_)
	* though using a callback / dealing with scoping may be tricky
	* can't break out of <code>forEach</code>
	* can break out of <code>every</code> by returning <code>false</code> (you have to return <code>true</code> on every iteration, though)
{:.fragment}

</section>

<section markdown="block">
### Looping Over Arrays Part 1

Loop over <code>nums = [1, 2, 3, 4];</code> and print out double the value of every element. __Do this three ways__ &rarr;

<pre><code data-trim contenteditable>

// with classic for loop and length caching
for(var i = 0, cachedLength = nums.length; i < cachedLength; i++) {
	console.log(nums[i] * 2);
}
nums.every(doubleItLessThanThree);
</code></pre>
{:.fragment}
</section>

<section markdown="block">
### Looping Over Arrays Part 2

<pre><code data-trim contenteditable>
// with forEach (define callback first)
var doubleIt = function(x) {
	console.log(x * 2);
}
nums.forEach(doubleIt); 
</code></pre>

<pre><code data-trim contenteditable>
// with forEach (define callback first)
// with every and simulating break (define callback first)
var doubleItLessThanThree = function(x) {
	if (x >= 3) {
		return false;
	}
	console.log(x * 2);
	return true;
}

nums.every(doubleItLessThanThree);
</code></pre>
</section>

<section markdown="block">
## Again,With More Anonymous Functions

<pre><code data-trim contenteditable>
// with forEach
nums.forEach(function(num, i) {
	console.log(num * 2);
});

// with every and simulating break
nums.every(function(num, i) {
	if (num >= 3) {
		return false;
	}
	console.log(num * 2);
	return true;
});
</code></pre>
</section>

<section markdown="block">
## Arrays are Mutable

Arrays are really just objects. Sooo this example should look familiar.  __What will this print out?__ &rarr;
<pre><code data-trim contenteditable>
a = [1, 2, 3]
b = a;
b.push(4);
console.log(a);
</code></pre>

<pre><code data-trim contenteditable>
[1, 2, 3, 4]
</code></pre>
{:.fragment}

(We can use the slice method to copy an Array instead of _aliasing_: <code>a.slice()</code>) 
{:.fragment}
</section>

<section markdown="block">
## Arguments Object

When a function is called, it gets an __arguments__ in its context, along with its defined parameters (and __this__, but we'll talk about that later).


<pre><code data-trim contenteditable>
var f = function() {
    // btw... ok - I get the funny coercion rules now
    console.log("number of args " + arguments.length);
    for (var i = 0, j = arguments.length; i < j; i++) {
        console.log(arguments[i]);
    }
};
f(1, 2, 3);

</code></pre>

</section>

<section markdown="block">
## Arguments Object Continued

* Array like, but not an Array (__let's see__ &rarr;)
* you can index into it
* you can get it's length
* you can loop over it
* no methods, like slice
* how might you do required and optional arguments?
* {:.fragment} loop over arguments, but start at appropriate index

</section>
{% comment %}
<section markdown="block">
## An Exercise

__Write a function called <code>humanReadableArray</code>:__ &rarr;

* it takes __one argument__, an __Array called items__, and it __returns a string__ representation of the Array 
*  the string representation of the Array is... 
	* an empty string if the incoming Array is empty: <code>[]</code> &rarr; <code>""</code>
	* the only item in the Array if the Array has just one element: <code>["Alice"]</code> &rarr; <code>"Alice"</code> 
	* item 1 and item 2 combined by using "and" if the Array has 2 elements: <code>["Alice","Bob"]</code> &rarr; "Alice and Bob"
	* all items separated by commas, with the last element joined with "and" (with a serial comma, of course!): <code>["Alice","Bob","Carol"]</code> &rarr; "Alice, Bob, and Carol" 

<br>
[By the way, who are Alice and Bob?](http://en.wikipedia.org/wiki/Alice_and_Bob)
</section>
{% endcomment %}
