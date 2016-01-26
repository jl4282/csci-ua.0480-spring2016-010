---
layout: slides
title: Coercion (Revisited), Casting, Undefined, and Some Style
---
<section markdown="block" class="intro-slide">
# {{ page.title }}

### {{ site.course_number}}-{{ site.course_section }}

</section>

<section markdown="block">
## Coercion Rules

__What are the values that result from the following expressions?__&rarr;

<pre><code data-trim contenteditable>
"5" + 5
false + 5
undefined + 5
"10" > 5
NaN > 5
undefined > 5
</code></pre>

The results: 
{:.fragment}

* <code>"55"</code>
* <code>6</code>
* <code>NaN</code>
* <code>true</code>
* <code>false</code>
* <code>false</code>.
{:.fragment}

<br>
How do we know? We can read the [ECMA](http://es5.github.io/#x11.6.1) [Script](http://es5.github.io/#x9.3) [Specifications](http://es5.github.io/#x11.8)!
{:.fragment}

</section>

<section markdown="block">
## Ugh That's Kind of Crazy

### A quick summary of all of that automatic conversion business.

* __when adding values__
	* if either of the values is a string, coerce the other to perform string concatenation
	* otherwise convert both sides to numbers (if they aren't already) and perform addition
* __when comparing values with &lt;__
	* try to convert both sides to numbers first, so that comparison can be easily performed
	* if either operand is NaN, the result is False
* __when it doubt, check the spec__ (or, of course [SO](http://stackoverflow.com/questions/14687876/how-do-the-javascript-relational-comparison-operators-coerce-types) it)
</section>

<section markdown="block">
## Equality

As you know, this automatic type conversion continues on with <code>==</code>...

__How do we get out of this mess? (without having to remember a series of obscure rules)__ &rarr;


* one way is to use triple equals - <code>===</code> (we've gone over this before!)
* another way is to just explicitly _cast_ your operand(s) to minimize surprises
{:.fragment}
</section>

<section markdown="block">
## Casting

We can use __object contructors__ to cast from one type to another: 

* constructors wrap their primitive types in an object (we'll discuss objects later)
* when asked for a value, these objects usually yield the value of their primitive type
* however, we should probably avoid these for the time being; they're a bit complicated
* for example... try this!

<pre><code data-trim contenteditable>
Boolean(false)
new Boolean(false)
Boolean(new Boolean(false))
new Boolean(new Boolean(false))

// WHAT!? (sad face)
</code></pre>

__Let's not deal with the intricacies of using new, not using new, objects vs primitives, etc. ... for now__
</section>

<section markdown="block">
## Casting Continued

Another option is to use some of the __operators__ that we learned to coax JavaScript into doing a predictable automatic conversion for us:

* __convert to a boolean__
	* use _not_ twice (negate the not, but preserve the type conversion)
	* <code>!!"hello"</code>
* __convert to a number__
	* use unary <code>+</code>
	* <code>+"5"</code>
	* <code>+"hello"</code>
* __convert to a string__
	* just add an empty string to it
	*  <code>5 + ""</code>

<br>
See [this page](http://bonsaiden.github.io/JavaScript-Garden/#types.casting) on type casting.
</section>

