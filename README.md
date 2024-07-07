# Challenge Somnio

## UX missing features
 - A highlight animation was added to the button and the cart's badge in the header in order to give a visual queue when adding a product to the cart.
 - A button was added for removing the elements from the cart.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/challenge-somnio.git
cd challenge-somnio
npm install
```

## Scripts

The following scripts are available in the `package.json` file:

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `test`: Runs the tests.
- `lint`: Checks the code for linting errors.

## Project Structure

The project structure is organized as follows:

- `src/components`: Contains reusable React components.
- `src/pages`: Contains Next.js pages.
- `src/stores`: Contains Zustand stores for state management.
- `src/types`: Contains TypeScript type definitions.
- `public`: Contains static assets like images and icons.
- `styles`: Contains global styles.

## Features

### Home Page

The home page displays a list of products fetched from an external API. Users can filter products by title and load more products by clicking a button.

### Cart Page

The cart page displays the products added to the cart. Users can view the quantity of each product and remove products from the cart.

### State Management

State management is handled using Zustand. The `productStore` manages the product list and search query, while the `cartStore` manages the cart items.

## Testing

The project uses Jest and React Testing Library for testing. Test files are located alongside the components with a `*.test.tsx` name.

## Configuration

### Linting

The project is configured with ESLint and Prettier for code quality and formatting.

### Tailwind CSS

Tailwind CSS is used for styling. The configuration file is located at `tailwind.config.js`.
