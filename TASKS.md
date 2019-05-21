# Instruction

The main purpose of this repo is to setup a code base for you to add additional features / fix bugs. Our goal is to test your angular and css skills. Please make sure to have it mobile responsive.

We wanted to have a look at your JS skills so please do not use libraries like lodash or underscore.

What we value the most is:

- The ability (at least trying hard) to write clean code which is easy to read and test
- Write scalable code, in simple ways, it means adding additional features will require less restructure and effort.
- Do not leave tech debt unless you need to quickly patch a serious production bug (definitely not for our case)
- Refactor at an early stage whenever neccessary
- The ability to struture your code in a logical way
- You know about your code performance
- Think thoroughly for any potential new libraries. A bad example will be to import a huge package and only because you need to use one simple method.
- It is important to have proper error handling for each tasks to some extent
- Tests. We know TDD is hard to follow, but make sure you have your tests written for any files with logics in it.

## Important Reminders

- The test should be done within `2 days`
- It is important to write a unit test using [Jest](https://jestjs.io/docs/en/getting-started)
- You will be scored based on how you write and structure your code

## API Reference

- The project is using [Yelp API](https://www.yelp.com/developers/documentation/v3)
- Make sure to generate an `API Key` on [Yelp](https://www.yelp.com/developers/v3/manage_app), if you haven't done yet
- Add the `API Key` into the `.env` on the root before running the server
- Can be run using the command `npm run start:server`
- Can be access on `http://localhost:3200`
- The implementation of the server can be found on `./server/app.js`

## Design Reference

- The header background image can be found [here](https://pixabay.com/photos/jause-eat-delicious-food-338498/)
- The icon can be found [here](http://chittagongit.com/icon/food-icon-png-1.html)
- The font is using `Helvetica`

## Initial

- Try running the app with `npm start` and `npm run start:server`
- then try to navigate to `http://localhost:3000`
  ![on load](https://docs.google.com/uc?id=1MLR9mXl_yhowBkHRdP5eSvcO4_esCa12)

## Let's Start and Happy Coding!

### TASK 1

- Fix the issue on populating the data for that page
- The api is already added and it's being called on initialize, but it's not populating on the component
- Try running `npm run test` - to know which test failed and start from there

### TASK 2

- After working on the TASK #1, you can see that the images are not showing up, yet on the component it is being pass
- Try to check on why the image are not displaying on the business component

### TASK 3

- Implement the design for the home (Please make sure to know when to write a component versus placing it on a container view)
- Please don't forget to write a test
- `DESIGN NOTES:`
  - The drop down labeled `Filter By Category` can have a static options, you don't need to provide all the categories just the ones that are common in the api response
  - The yellow start on the design represents the rating, please have it adjust depending on the rating of the business
  - `View Details` - represents the details route, so when the user clicks on it they will be routed to the details of the business which would be the next task
    ![on load](https://docs.google.com/uc?id=116yQUVvPN8hcp7hP8O4iAuhZhFEvfYlm)

### TASK 4

- Implement the business details design
- `DESIGN NOTES:`
  - Implement the map using [Google Map API](https://developers.google.com/maps/documentation/)
  - On the left side with a green background and with a text `OPEN`, that represents the store being currently open or close, you can find this on the Yelp API response
  - Same goes for the yellow star here as you previously implemented on the home page, keep in mind to stay DRY - DON'T REPEAT YOURSELF
  - On the right side at the top just below the map would be a image slider
  - Below the image slider would be the store schedule, the opening an closing hours of the store
  - the API for details can be fetch `http://localhost:3200/businesses/{id}`, where `id` is the business id
  - [Yelp Documentation](https://www.yelp.com/developers/documentation/v3/business)
    ![on load](https://docs.google.com/uc?id=1HueyHldXZMhK30_EmEO8Xiz0FNApFkbq)
