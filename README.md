# Camper Essential

## Introduction

The frontend of Camper Essential provides the user interface for browsing camping products, managing the cart, and completing purchases.

## Features

- **Homepage**: Overview of featured products and promotions.
- **Product Listings**: Browse through various camping items with search and filter options.
- **Product Details**: View detailed information about each product, including images, descriptions.
- **Cart Management**: Add, update, or remove products from the shopping cart.
- **Checkout**: Secure and easy-to-use checkout process.
- **Dashboard**: Product management such as add, edit or remove.

## Technology Stack

- **React**
- **Redux**
- **Tailwind CSS**

## Installation Guideline

Follow these instructions to set up the Camper Essential locally.

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jakariamasum/Campher-Essential.git
   cd Campher-Essential
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

1. **Create a `.env` file in the root directory of the frontend:**

   ```bash
   touch .env
   ```

2. **Add necessary configuration variables in the `.env` file:**

   ```bash
   PAYMENT_PK= "Your stripe publishable key"
   ```

3. **Start the server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application:**
   Open your browser and go to `http://localhost:5173`

### Usage

- **Homepage**: Browse featured products.
  ![Homepage Screenshot](https://i.ibb.co/sWbQbpW/Screenshot-2024-07-13-202655.png)

- **Product Listings**: Use filters to find specific items.
  ![Product Listings Screenshot](https://i.ibb.co/Wxc07VZ/Screenshot-2024-07-13-225459.png)

- **Product Details**: View detailed information and add to cart.
  ![Product Details Screenshot](https://i.ibb.co/XC39L0w/Screenshot-2024-07-13-225524.png)

- **Cart Management**: Manage your shopping cart.
  ![Cart Screenshot](https://i.ibb.co/kJbNJHJ/Screenshot-2024-07-13-225557.png)

- **Checkout**: Complete your purchase securely.
  ![Checkout Screenshot](https://i.ibb.co/stTNng6/Screenshot-2024-07-13-230027.png)

## Contributing

We welcome contributions! Please contact for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](link_to_license_file) file for details.
