/*
LESSON 1: REACT CONCEPTS
A. Components
A component is one isolated piece of interface. For example in a typical ecommerce homepage you might find the Sidebar component, and the Product List component, and the Header component. 
They can in turn composed of components themselves, so you could have a list of Product components, each for every Product, and each with its own peculiar properties.

React makes it very simple: In React everything is a component.
There are 2 ways to define a component in React.
function (stateless) component: 
- they simply receive props, and props are received as object
- they return html syntax as JSX
- they are stateless (does not contain state)
- they are much more reusable
*/
const SingleProduct = (props) => {
	return (
		<section>
			<Nav />
			<PageTitle />
			<SearchBar />
			<div className="">
				<Sidebar />
				<ProductList />
			</div>
			<div>
				<h1>Product name {props.name}</h1>
				<p>Product description</p>
				<p>Product price</p>
			</div>
			<div>
				<h4>Commentor </h4>
				<p>This is a very nice product and I recommend it for everyone to use</p>
			</div>
			<div>
				<h4>Commentor </h4>
				<p>This is a very nice product and I recommend it for everyone to use</p>
			</div>
			<div>
				<h4>Commentor </h4>
				<p>This is a very nice product and I recommend it for everyone to use</p>
			</div>
		</section>
	)
}
/*
class (stateful) components:
- they have a state object
- state object can be updated with setState
- the state can be initialized in the constructor
- access lifecycle methods
*/
import React, { Component } from 'react'
class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn: false
		}
	}
	render() {
		if(isLoggedIn === false){
			return <Login />
		}
		return (
			<div>
				<h1>Product name</h1>
				<p>Product description</p>
				<p>Product price</p>
			</div>
		)
	}
}
/*
// component nesting
The power of React mostly is in the ability to nest components.
*/
const CommentList = reactCreateClass({
	render: function() {
		return (
			<div className="commentList">
				Hello, world! I am a CommentList.
			</div>
		);
	}
});

const CommentForm = reactCreateClass({
render: function() {
	return (
		<div className="commentForm">
			Hello, world! I am a CommentForm.
		</div>
		);
	}
});

var CommentBox = reactCreateClass({
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

/*
B. JSX
JSX is a technology that was introduced by React.
Although React can work completely fine without using JSX, it's an ideal technology to work
with components.
At first, you might think that using JSX is like mixing HTML and JavaScript (and also some CSS).
But this is not so, because what you are really doing when using JSX syntax is writing a
declarative syntax of what a component UI should be. And you're describing that UI not using strings, but instead using JavaScript, which allows you to do many things.
*/
const element = <h1>Hello, world!</h1>
const myClass = 'string'
const element = <h1 id={myClass}>Hello, world!</h1>
/*
A browser cannot execute JavaScript files containing JSX code. They must be first
transformed to regular JS. By doing a process called transpiling. 
To every JSX line, a corresponding plain JavaScript alternative is available, and that's what the JSX code is transpiled to.
Transpilation is done with Babel, which is the default option when running create-react-app, so if you used create-react-app to set up your React project as we did, everything is already running under the hood for you. If you didn't use create-react-app you need to setup Babel yourself.
JSX accepts any kind of JavaScript mixed into it. But whenever you need to add some JS, just put it inside curly braces {} .
*/
const paragraph = 'A paragraph'
	ReactDOM.render(
		<div id="test">
			<h1>A title</h1>
			<p>{paragraph}</p>
		</div>,
	document.getElementById('myapp')
)
/*
You need to close all tags
<br> MUST be written as <br/>
camelCase is the new standard
onchange => onChange
onclick => onClick
onsubmit => onSubmit
class becomes className
<h1 class="product-title"> becomes <h1 className="product-title">
for becomes htmlFor
style attribute no longer accepts strings
it now accepts an object. Properties should be defined as objects
The CSS values you write in JSX are slightly different from plain CSS:
property names are camelCased
values are just strings
you separate each tuple with a comma
The render() function can only return a single node, so if you want to return 2 siblings, just need to add a parent. You can put them in a div tag 



C. PROPS
Props are a way to pass information into a React component. Props can be of any type including functions - these are sometimes referred to as callbacks.
Props are arguments passed into React components.
In JSX, props are passed with the attribute syntax. The attribute name is purely up to you as a developer. Meaning you can call it whatever you want to call it.
In other words, props are like function arguments in JavaScript and attributes in HTML.
*/
<MyComponent userID={123} />
// when we now render MyComponent this is how we use the prop
// in class component: use the this keyword
render() {
	return (
		<span>The user's ID is {this.props.userID}</span>
	)
}
// functional component
return (
	<span>The user's ID is {props.userID}</span>
)

/*
It's important to define all props, their types, and where applicable, their default value:
MyComponent.propTypes = {
	someObject: React.PropTypes.object,
	userID: React.PropTypes.number.isRequired,
	title: React.PropTypes.string
};
MyComponent.defaultProps = {
	someObject: {},
	title: 'My Default Title'
}
prop someObject is optional, but the prop userID is required. If you fail to provide userID to
MyComponent, at runtime the React engine will show a console warning telling you that the required prop was not provided.


D. STATE 
[Creating the state Object,
Using the state Object,
Changing the state Object]
React components has a built-in state object.
The state object is where you store property values that belongs to the component
The state object can contain as many properties as you like
When the state object changes, the component re-renders
The state object is initialized in the constructor
Refer to the state object anywhere in the component by using the this.state.propertyname syntax
*/
import React, { Component } from 'react' 
class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	tuition: "paid",
    	completed: false
    }
  }
  changeState = () => {
    this.setState({completed: true});
  }
  render() {
    return (
      <div>
        <h1>My Student tuition is {this.state.tuition}</h1>
        <p>Completed status: {this.state.completed}</p>
        <button
          type="button"
          onClick={this.changeState}
        > Change State
        </button>
      </div>
    );
  }
}

/*
To change a value in the state object, use the this.setState() method.
When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).
Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).


E. Declarative
Case one: You tell the browser exactly what to do (that is imperative)
Case two: You tell the browser exactly what you need (that is declarative)
React implements case two. Libraries like jquery implement case one
$("p").style({'color': 'red'});
We just tell React we want a component to be rendered in a specific way, and we never have to interact with the DOM or worry about how React is going to do that for us.
Declarative programming allows us to focus on what our React application should look like — as opposed to being concerned with manually updating DOM, adding and removing classes, and so on. That stuff is all done for us in React: we just tell React what the end result should be. It'll do the heavy lifting for us.


F. Immutability
In programming, a variable is immutable when its value cannot change after it's created.
You are already using immutable variables without knowing it when you manipulate a string.
Strings are immutable by default, when you change them in reality you create a new string and
assign it to the same variable name.
An immutable variable can never be changed. To update its value, you create a new variable.
The same applies to objects and arrays.
Instead of changing an array, to add a new item you create a new array by concatenating the
old array, plus the new item.
An object is never updated, but copied before changing it.
This applies to React.
For example, you should never mutate the state property of a component directly, but only
through the setState() method.
There are various reasons, the most important of which are:
Mutations can be centralized, like in the case of Redux, which improves your debugging
capabilities and reduces sources of errors.
Code looks cleaner and simpler to understand. You never expect a function to change
some value without you knowing, which gives you predictability.
When a function does not mutate objects but just returns a new object, it's called a pure function.
The library can optimize the code because for example JavaScript is faster when
swapping an old object reference for an entirely new object, rather than mutating an
existing object. This gives you performance.

G. The Virtual DOM
The Virtual DOM is a technique that React uses to optimize interacting with the browser. 
Other frameworks directly manipulate the DOM on every change.
The DOM (Document Object Model) is a Tree representation of the page, starting from the
<html> tag, going down into every child, which are called nodes.
It's kept in the browser memory, and directly linked to what you see in a page. The DOM has
an API that you can use to traverse it, access every single node, filter them, modify them.
React keeps a copy of the DOM representation, for what concerns the React rendering: the
Virtual DOM
Every time the DOM changes, the browser has to do two intensive operations: repaint (visual
or content changes to an element that do not affect the layout and positioning relative to other
elements) and reflow (recalculate the layout of a portion of the page - or the whole page
layout).
React uses a Virtual DOM to help the browser use less resources when changes need to be
done on a page.
When you call setState() on a Component, specifying a state different than the previous one,
React marks that Component as dirty and only updates when a Component changes the state explicitly.
What happens next is:
React updates the Virtual DOM relative to the components marked as dirty (with some
additional checks, like triggering shouldComponentUpdate() )



