1. What problem does the context API help solve?
   - helps to eliminate excessive prop drilling.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux.
   - actions are like packets of data that send info from your app to your store, must contain a type, can contain a payload
     What does each piece do?
   - type states which action
   - payload provides input to update state with
     Why is the store known as a 'single source of truth' in a redux application?
   - because it is the only place global state is stored
1. What is the difference between Application state and Component state? - application state is global and available to the entire application, - component state is local and is not available outside of itself unless passed as props
   When would be a good time to use one over the other? - if data needs to be widely available to multiple components, use application state - if data is only relevant to the component it lives in or maybe it's immediate children, it is a good time to use component stte
1. Describe `redux-thunk`, what does it allow us to do? - redux-thunk is a middleware that allows us to call action creators which return a function vs an object
   How does it change our `action-creators`?
   -gives them the ability to execute asynchronous actions

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   I really like Redux, but that's probably because it is presenting me more of an issue than context api with reducers is. I've got a good handle on the flow of data through redux and how to implement it, but I keep making these stupid mistakes that are eating hours from me so I probably won't be satisfied until I've mastered even the smallest details.
