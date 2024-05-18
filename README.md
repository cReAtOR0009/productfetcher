# Product Scraper and API

This project is a web scraper and API built using Puppeteer and Express. The scraper fetches product details from a specified URL and the API provides an endpoint to retrieve these details and save them as a CSV file.

## Features

- **Web Scraping:** Uses Puppeteer to scrape product data from a webpage.
- **Stealth Plugin:** Incorporates the stealth plugin for Puppeteer to avoid detection.
- **Express Server:** Serves an API endpoint to trigger the scraping and retrieve product data.
- **CSV Export:** Exports the scraped data to a CSV file.

## Prerequisites

- Node.js (>= 14.x)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/product-scraper-api.git
   cd product-scraper-api
2. Install dependencies:
npm install

3. Starting the Server
To start the server, use the following command:
npm start

For development with live reloading, use:
npm run dev
This will run the server using `nodemon`.

API Endpoints
GET /

Returns a message confirming that the server is running.
curl http://localhost:4001/

GET /getproducts

Triggers the web scraper, retrieves product data, and saves it to a CSV file. Returns the product data in the response.
curl http://localhost:4001/getproducts

Project Structure
index.js: Entry point for the Express server.
crawler.js: Contains the web scraping logic using Puppeteer.
csv.js:has a function that uses browser console to get data and converts the data to csv 
package.json: Manages dependencies and scripts for the project.


When you access the /getproducts endpoint, the server will:

-Scrape the specified URL for product details.
-Save the details to products.csv.
-Return a JSON response with the product data.

Dependencies
express: Web framework for Node.js.
json2csv: Converts JSON data to CSV format.
nodemon: Tool for automatically restarting the server during development.
puppeteer: Headless browser for scraping web pages.
puppeteer-extra: Plugin framework for Puppeteer.
puppeteer-extra-plugin-stealth: Plugin to make Puppeteer stealthy and avoid detection.

