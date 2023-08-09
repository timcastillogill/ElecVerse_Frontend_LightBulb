<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend code test

In this code test, you'll be asked to:

- Make a simple React app that follows the design in `design.jpg`, consumes the API and makes the front end tests pass. Ideally the app should be responsive.

We've included:

- A sample [Next.js](https://nextjs.org/) project for your convenience, but you're welcome to swap it out for another framework if you prefer
- Some CSS colour variables that match the colours in the design
- The assets that you will need to complete the design

You're also welcome to write more tests for other parts of the application - but design those however you like.

## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
cd client && yarn
```

## Start the app

```sh
yarn dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && yarn test
```

This should give you two failures:

```sh
FAIL test/product.test.js
    ✕ should be able to increase and decrease product quantity
    ✕ should be able to add items to the cart
```

The task is to build the app that passes these tests.

## What we're looking for

We would like you to demonstrate your ability to:

- Reason through a programming problem
- Implement a visual design
- Implement some user interactions
- Write code that is easy to understand and extend
- Write tests that document and safeguard the program's behaviour
- Use a version control system (e.g. git) to effectively convey intent

Best of luck!

---

## My Decisions and Process

### Updating the given test

Given one of the tests was expecting a summary of the cart but the implementation was not given, I decided to create a dropdown on the cart icon. This did mean an additional behaviour was required to pass the given test.

Additionally, in order to mock the graphql call I adjusted the given tests as the local database would not be running for the testing environment.

### Project organisation

I've chosen to divide this page into distinct components, enhancing scalability and simplifying management, especially when incorporating additional products into the database.

### Responsive Design

The project prioritises mobile devices. To ensure a smooth experience on larger screens, I've reorganized the image, title, and quantity information layout to effectively utilise the extra width. Additionally, I've centralised and reduced the margins around the information, enhancing readability and efficiency.

### Use of Apollo Client

As this client is used as part of the Electroverse tech stack, I used it in this test to call the graphql database.

### Use of TailwindCSS

As this is used as part of the Electroverse tech stack, I used it for styling the project.

### Additional Functionality

I added functionality of adding the number of items in the cart to show next to the cart when the cart had more than 1 item. The reason it wasn't 0 items was because the test dictated that the cart must default with 1 item.

### Cart vs Basket

I noted that there was a mixture of cart and basket being used and decided to move towards cart, as I saw this as more commonly used term, however there remains some inconsistencies which I would look to get feedback on to make the project language more ubiquitous and hopefully in-line with language used by the stakeholder(s).

### Future Considerations

1. The app is currently designed for 1 product only. When more products are added, the cart and related props would need to be refactored to allow for additional items and quantities by passing an array of product objects in the cart.

2. Starting the cart with 1 item, I would put forward that the basket should start with 0 items

3. The cart summary should have a checkout button to allow the user to move onto the payment section of the user flow.

4. Animations and UX features such as an animated shake when something is added to cart.
