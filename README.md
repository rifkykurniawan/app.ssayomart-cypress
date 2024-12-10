# Cypress Web Automation Testing for apps.ssayomart.com

This repository contains automated web testing scripts using Cypress.io, a next-generation front end testing tool built for the modern web.

## Prerequisites

Before running the tests, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A code editor (VS Code recommended)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/rifkykurniawan/app.ssayomart-cypress.git
cd your-project-name
```

2. Install the dependencies:
```bash
npm install
```

## Project Structure

```
cypress/
├── fixtures/         # Test data files
├── e2e/              # Test files
├── support/          # Support files (commands, utilities)
└── downloads/        # Downloaded files during tests
```

## Configuration

The main Cypress configuration file is `cypress.config.js` in the project root:

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 5000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false
  },
})
```

## Running Tests

There are several ways to run the tests:

### Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
```

### Run Tests in Headless Mode
```bash
npm run cypress:run
```

### Run Specific Test File
```bash
npm run cypress:run -- --spec "cypress/e2e/login.cy.js"
```

### Run Tests in Different Browsers
```bash
npm run cypress:run -- --browser chrome
npm run cypress:run -- --browser firefox
npm run cypress:run -- --browser edge
```

## Writing Tests

Example test structure:

```javascript
describe('Login Feature', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should login with valid credentials', () => {
    cy.get('[data-cy=username]').type('testuser')
    cy.get('[data-cy=password]').type('password123')
    cy.get('[data-cy=submit]').click()
    cy.url().should('include', '/dashboard')
  })
})
```

## Best Practices

1. Use data-cy attributes for element selection:
```html
<button data-cy="submit-button">Submit</button>
```

2. Keep selectors specific and isolated:
```javascript
cy.get('[data-cy=submit-button]').click()
```

3. Use custom commands for repeated actions:
```javascript
// In cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login')
  cy.get('[data-cy=username]').type(username)
  cy.get('[data-cy=password]').type(password)
  cy.get('[data-cy=submit]').click()
})

// In your test
cy.login('testuser', 'password123')
```

## Environment Variables

Create a `cypress.env.json` file in the project root:

```json
{
  "BASE_URL": "http://localhost:3000",
  "API_URL": "http://api.example.com",
  "TEST_USER": "testuser@example.com",
  "TEST_PASSWORD": "securepassword123"
}
```

## Continuous Integration

Example GitHub Actions workflow:

```yaml
name: Cypress Tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: cypress-io/github-action@v2
        with:
          build: npm run build
          start: npm start
          wait-on: 'http://localhost:3000'
```

## Reporting

Test results are stored in:
- Videos: `cypress/videos/`
- Screenshots: `cypress/screenshots/`
- Reports: `cypress/reports/`

## Troubleshooting

Common issues and solutions:

1. **Tests timing out**
   - Increase `defaultCommandTimeout` in cypress.config.js
   - Use `cy.wait()` for specific network requests

2. **Element not found**
   - Check if the element is in the viewport
   - Ensure the page has fully loaded
   - Verify the selector is correct

3. **Cross-origin errors**
   - Add the domain to `chromeWebSecurity: false` in config
   - Use `cy.origin()` for cross-origin commands

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
