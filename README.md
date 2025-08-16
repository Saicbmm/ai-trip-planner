# AI Trip Planner

AI Trip Planner helps users plan trips using AI-assisted suggestions for itineraries, places to visit, and accommodations.

Features
- Generate personalized multi-day itineraries based on preferences (duration, budget, number of people).
- Suggest attractions, restaurants, and accommodations.
- Configurable via environment variables and API keys.

Quickstart

Prerequisites
- Node.js 20+
- npm or yarn
- An Google API key 
- Any other third-party API keys (maps, places) as needed

Install

1. Clone the repository

   git clone https://github.com/Saicbmm/ai-trip-planner.git
   cd ai-trip-planner

2. Install dependencies

   npm install
   # or
   yarn install

Configuration

Create a .env file in the project root with the following variables (example):

OPENAI_API_KEY=your_openai_api_key
MAPS_API_KEY=your_maps_api_key
NODE_ENV=development
PORT=3000

(Check the repository for exact env var names if different.)

Run

Start the development server:

npm run dev
# or
npm start

Usage

- Open http://localhost:3000 (or the configured PORT) in your browser.
- Use the UI to create a new trip by providing destination, dates, and preferences.
- Review and edit the suggested itinerary, then export or save it.

Project structure (example)

- /src - application source code
- /client - frontend code (if separate)
- /server - backend code (if separate)
- /scripts - helper scripts
- /docs - project documentation

Development

- Run linters and formatters before committing.
- Create feature branches from main: git checkout -b feat/my-feature
- Open pull requests targeted at main and include a description of changes.

Testing

If tests exist, run them with:

npm test

If there are no tests yet, consider adding unit and integration tests.
