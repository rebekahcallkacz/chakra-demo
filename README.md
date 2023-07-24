# A Demo of a React App that uses TypeScript and Chakra UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goals for Demo

- Overview of Chakra Documentation: [installation](https://chakra-ui.com/getting-started), [design principles](https://chakra-ui.com/getting-started/principles), and [components](https://chakra-ui.com/docs/components)
- Add a clickable button and text that tracks how many times the button is clicked
- Reach goal: Add a notification when the user clicks 5 times

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs everything needed to run the app locally

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Additional Practice (Optional)

- Accept my invite to this repository
- Clone down the repository
- Checkout out to a new branch
- On your branch, practice using Chakra
  - Make the header left aligned instead of centered
  - Change the color of the button (try changing the color scheme or using one of the Chakra colors)
  - Change the style of the button to a different variant: https://chakra-ui.com/docs/components/button/props
  - Put the button and its instructions in a Card: https://chakra-ui.com/docs/components/card/usage
  - Add a progress bar that tracks how close you are to clicking the button 5 times (hint: you'll need to change the `max` prop): https://chakra-ui.com/docs/components/progress/usage
  - Add a `Stat` that displays how many times the button has been clicked: https://chakra-ui.com/docs/components/stat/usage
- Open a PR to merge in your changes and request my review

## Steps to Create a Repo with TypeScript and Chakra UI

### Only relevant if you want to create your own project and don't want to just clone down this one

- Create a new repo on GitHub
- Clone the new repo and navigate to that folder in your terminal
- Create a React App w/ TypeScript: `npx create-react-app my-app --template typescript`
- Install Chakra UI: `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`
- Remove `src/App.css` and `src/index.css` (remove the actual files and the imports also)
- Add a Chakra Provider to `App.tsx` - see an example in [their documentation](https://chakra-ui.com/getting-started).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn more about Chakra UI, check out [their documentation](https://chakra-ui.com/).
