Todo for this React 16 tutorial
- https://reactjs.org/docs/portals.html
- https://reactjs.org/docs/context.html
- https://reactjs.org/docs/refs-and-the-dom.html
- Autoloading in Webpack

## React Standards
#### In spreading state and props attributes
If you will be using the state and props attributes more than once, it would be a good idea to spread the attributes to make things much more easier to type. Be wary of conflicting attributes names though.

#### Using ErrorBoundary
This only works in the `render` function. It will not work if you have the error exception on a different function. Also, only works if the component is the parent of the component that raised the error.

#### Use Fragments
Roan's been having some problems with our extra divs and spans when making our components. Please use Fragments so our dear friend doesn't go insane
- https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
