# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Building
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Namaste Food

/*
* Header
* - Logo
* - Navigation
*  - Home
*  - About Us
*  - Contact Us
*  - Cart
* Body
* - Search
* - RestaurantContainer
*   - RestaurantCard
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks
 (Normal JS utility functions)
 - useState() - Superpowerful State Variables in react
 - useEffect()

 # Reconciliation 
 - Reconciliation algorithm is used by React to keep the Data layer and UI layer intact or in sync. (Reconciliation algorithm is also known as React Fibre which came in React 16)
 - It uses Diff algorithm which keeps track of the difference between old Virtual DOM and new Virtual DOM (new Virtual DOM is created after a state variable is updated and the component re-rendered). 
 - Virtual DOM is a representation of Actual DOM. 
 - Virtual DOM is actual an react element which in nothing but a Javascript Object.
 - Virtual DOM ultimately updates the Actual DOM after finding the difference between old and new virtual DOMs.
 - Finally whenever there is a change in any state variable react will find out the difference between virtual DOMs and it re-renders the component which will update the Actual DOM.

 -React is fast because it is doing efficient DOM manipulations.

 # Reconciliation Definition:
 - The algorithm React uses to diff one tree with another to determine which parts need to be changed. 
                                    (OR)
- Reconciliation is the process where React uses an algorithm (Diff algorithm) to diff one tree with another to determine which parts need to be changed.