---
layout: slides
title: Objects Addendum
---
<section markdown="block" class="intro-slide">
# {{ page.title }}

### {{ site.course_number}}-{{ site.course_section }}

<p><small></small></p>
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
