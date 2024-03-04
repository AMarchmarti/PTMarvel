# Marvel Explorer App

Welcome to the Marvel Explorer App! This application allows users to explore information about Marvel characters, including details about their comics, and save their favorite characters for easy access.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Architecture and Structure](#architecture-and-structure)
3. [Features](#features)
4. [Usage](#usage)
5. [Contributing](#contributing)

## Getting Started

To run the Marvel Explorer App locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AMarchmarti/PTMarvel.git
    ```

2. Navigate to the project directory:

    ```bash
    cd PTMarvel
    ```

3. Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

4. Start the development server:

    ```bash
    pnpm dev
    ```

# Architecture and Structure

The Marvel Explorer App follows a modular architecture and folder structure to keep the code organized and maintainable. Here's an overview of the main directories and files:

-   **assets**: Stores assets such as images, fonts, or other static files used in the application.
-   **constants**: Houses constant values or configurations used throughout the application.
-   **components**: Houses reusable UI components organized by feature or functionality.
-   **context**: Contains the context and provider for managing favorite characters.
-   **domain**: Contains model, repositories, and use cases.
    -   **model**: Defines the core entities of the application.
    -   **repositories**: Defines interfaces for interacting with external resources.
    -   **usecases**: Contains the business logic of the application.
-   **hooks**: Contains custom React hooks created for the application.
-   **infrastructure**: Contains services for interacting with external resources.
    -   **services**: Implements concrete interactions with external services.
    -   **utils**: Contains utility functions for handling API responses and other services.
-   **pages**: Contains React components representing different pages/routes of the application.
-   **routes**: Contains configuration for routing using react-router-dom.
    -   **Loaders**: Contains logic to use services directly from the route
-   **utils**: Contains utility functions for app.

# Features

-   **Character List**: View a list of Marvel characters retrieved from the Marvel API.
-   **Character Details**: View detailed information about a selected Marvel character, including their comics.
-   **Favorite Characters**: Save favorite characters for easy access later.
-   **Search**: Search for Marvel characters by name.

# Usage

-   **Character List Page**: Visit the Character List page to browse through a list of Marvel characters. Click on a character to view their details. You can also add or remove the character from your favorites. Use the SearchInput to search for Marvel characters by name.
-   **Character Details Page**: On the Character Details page, you can view detailed information about a selected character, including their comics. You can also add or remove the character from your favorites.
-   **Favorite Characters Page**: Visit the Favorite Characters page to view and manage your favorite Marvel characters.

# Contributing

Contributions are welcome! If you'd like to contribute to the Marvel Explorer App, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure all tests pass.
4. Commit your changes and push them to your fork.
5. Submit a pull request with a detailed description of your changes.
