By Kevin Miller - Copyleft 2011

This is all my notes from a jQuery Bootcamp at Cal State Monterey Bay. If you're lucky, you might find the webpage for it at http://itcd.csumb.edu/bootcamp. This file is actually the script for the presentation, so follow along, open a cold something, and let's get crackin!

Outline
-------

1. Welcome
	- Some house-cleaning:
		- We assume you know something about HTML and CSS
		- Questions are good, but we'll have breaks every 30 min where those of you who are ahead can play what we've learned so far, while I walk around and help out.
	- Our textbook: [jQuery Fundamentals](http://jqfundamentals.com/book)
	- Dreamweaver rant
		- Many people use it, it's a good code editor, but beware it's affect on your JS
2. A (brief) history of JavaScript
	- Why you need to know JavaScript: you don't have a choice
	- No, it's not Java: Netscape & Sun
	- No, it's not Applets: Let's try to forget the "a" word
	- AJAX and the rebirth of the JS landscape
	- JSON and the discovery of a standard
3. JavaScript Intro
	- Scripting language - no compiler
	- Everything is an object (almost!)
	- Functions are objects as well (the most confusing part)
	- Let the pros describe the basics, let's look at [jQuery Fundamentals chapter two](http://jqfundamentals.com/book/index.html#chapter-2)
4. The DOM
	- Understanding the DOM is the best way to understand CSS, HTML, and jQuery
	- Ideas of parents, children, siblings, and ancestors
	- Let's tie these concepts to CSS Selectors: spaces, attributes like class and ID, child
	- Also tied into the DOM is the way the browser renders a page
		- The old browser flow:
		- The new browser flow is continuous with events triggered all the time.
5. Why jQuery is important
	- The old way: The DOM APIs suck
		- onLoad events, etc, made HTMl messy
	- The jQuery way: selectors, selectors, and more selectors!
		- Better code reuse
		- Less code
		- Separation between content and behavior, just like CSS separated content from style
6. *The basics:* Selectors
	- How selectors work
	- Practice selectors in *sandbox.html*
	- Learn your console: FireBug or Web Developer in Webkit browsers
8. *The basics:* Making objects
	- The $ object
	- Creating new objects
	- Inserting objects
	- Cloning objects
	- Other object insertion/wrapping techniques
	- Attributes 
9. *The basics:* Styling
	- The .css function
	- The .addClass and .removeClass functions
	- Dimensions and box model like .width() & .height()
10. *The basics:* Events
	- Events physical reenactment: everyone gets a card and yells when they see their event on the button on the screen
	- The basic "bind" function
	- Bind shortcuts
11. *The basics:* Effects
	- Show and Hide
	- Fade in and out
	- Slide up and down
	- Toggle	
	- Custom events with "animate"
12. AJAX
	- 

Resources
---------

Learn all you ever wanted to about how browsers render content:

####Crockford on JavaScript
>Spend like six hours with Douglas Crockford, where he talks about JavaScript, Computer Science, and everything you needed to know about this amazing and frustrating environment.
>http://yuiblog.com/crockford/
	
####jQuery Introduction
>A fourteen-year-old can get this people! Well, a very smart fourteen-year-old...
>http://www.youtube.com/watch?v=8mwKq7_JlS8

####Faster HTML and CSS: Layout Engine Internals for Web Developers
>A very interesting talk by a senior Mozilla developer about how Mozilla renders content
>http://www.google.com/url?sa=t&source=video&cd=2&ved=0CEYQtwIwAQ&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Da2_6bGNZ7bA&ei=cbCITa3QHYjQsAOrjZmEDA&usg=AFQjCNH9oLcyn0y-GxhxSh7Ubw1PVAJTXw