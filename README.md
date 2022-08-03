# 22 State: Redux Store (Extra Credit)

Throughout this module, you learned how to manage global state using React’s Context API. The Context API is quickly gaining traction in the development world as a worthy alternative or perhaps even successor to other libraries that have been used to manage global state in tandem with React, such as Flux or MobX. In spite of this, Redux remains the industry standard for managing complex state in a large-scale React application, and it’s very likely that you’ll encounter it while working as a developer.

My challenge this week is to refactor the e-commerce platform that you created in this module, replacing the way it handles complex state management using the Context API with [Redux](https://redux.js.org/), the open-source JavaScript library that it emulates. 

**Remember, this module's Challenge is **extra credit**. It is not required for submission, nor will it count towards one of the two assignments that you can skip. If you choose to submit this Challenge, you will receive extra credit points on your final grade. However, if you choose not to submit it, your final grade will not be affected in any way. This Challenge is an opportunity for you to further practice your skills and get feedback on it, with the added incentive of receiving extra credit for the work.

## User Story

```md
AS a senior engineer on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria

```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```

## Mock-Up

The following animations show the web application's appearance and functionality:

![Demo #1](./Assets/22-state-homework-demo-01.gif)

![Demo #2](./Assets/22-state-homework-demo-02.gif)

![Demo #3](./Assets/22-state-homework-demo-03.gif)


- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
