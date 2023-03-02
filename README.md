# Product Card Implementation

Built by Jared Hettinger for [Thinx](https://www.thinx.com/)

A live version of this project can be viewed at: http://kafkaesc.github.io/product-card-challenge

The full code for this project can be viewed at: https://github.com/kafkaesc/product-card-challenge/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running this project

Using yarn:

1. Navigate to the project folder
1. Install dependencies: `yarn`
1. Run the project: `yarn`

Using npm:

1. Navigate to the project folder
1. Install dependencies: `npm install`
1. Run the project: `npm start`

Once the project is running it can be viewed at [http://localhost:3000](http://localhost:3000) in a browser

## App.js and the Product Card

App.js is the entry point for the app and the focus in this project will be the `ProductCard` component located in `src/components/ProductCard.js`.

App.js also contains a `productObject` object that is passed into the ProductCard component as props. The `productObject` is a mock-up of what data might be expected from an API delivering a collection of company products. Although this project only demonstrates a single `ProductCard` it would be a simple matter to call `.map` on an array of product objects to create a screen to shop and explore various other products from Thinx.

There are several child components of `ProductCard`, the two most notable being `ProductColorSwatch` and `AbsorbencyScale`.

The color swatch component can be passed a hex color code and therefore is not hardcoded to display the colors from the design: any update to the `swatchList` attribute in the mock API data will be reflected on the line of color options.

The absorbency component works in a similar manner except it accepts a number from 1-5 as props and will display the proper droplet indicators on the button. Any change to the `absorbencyOptions` attributes in the mock API data will be reflected on the product card as well.

I tried to pay attention to accessibility for these components. The product image has descriptive alt text. The color swatch and absorbency buttons both have aria-label attributes because their content is not descriptive of the buttons' functions. Both buttons respond to keyboard focus and use, in addition to mouse clicks.
