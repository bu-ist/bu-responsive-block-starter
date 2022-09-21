/**
 * Frontend JavaScript for a block.
 *
 * By default, this code will only run on the frontend of the site.
 * Optionally, this can be imported in your edit function so it also
 * runs in the editor.
 *
 * You may check if you are currently in the editor by checking for
 * wp.editor. If it exists, you're in the editor. If it doesn't,
 * you're in the frontend of the site.
 *
 * @see https://codex.wordpress.org/Javascript_Reference/wp
 */

/**
 * Variables which don't depend on page content can be declared
 * outside of a function.
 *
 * Tip: If you need to make sure something exists on the page,
 * declare your variable inside a function.
 */
const hello = "Hello from the starter block! Here is a list of paragraphs on this page.";

/**
 * Write your code here!
 *
 * Tip: you can write as many functions as you like, and you can
 * call other functions from the functions you write.
 */
function messageMe() {
	const paragraphs = document.querySelectorAll( 'p' );
	console.log( hello );
	console.log( paragraphs );
}

/**
 * Call any functions which should run on page load here.
 * You can call functions that you write above here.
 * For example, this function calls messageMe to show
 * a log in your browser console.
 *
 * Tip: Try to keep your functions small, well-defined, and reusable.
 * Don't write code directly in this function except to call another function.
 */
const onload = function() {
	//messageMe();
}

/**
 * Call any functions which should run when the page initializes here.
 * This can run before everything is loaded. You probably don't want
 * to edit this in most cases.
 */
const init = function() {
	document.addEventListener( "DOMContentLoaded", onload );
}

export default init();
