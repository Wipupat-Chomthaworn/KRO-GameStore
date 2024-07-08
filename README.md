# KRO-GameStore

KRO-GameStore is a web application for managing a second-hand game store, built with Nuxt.js and Go. The project is deployed on AWS with CI/CD using Jenkins, Docker, and CloudFormation.

## Features

- Game listing and management
- User authentication
- Responsive design
- High availability with Elastic Load Balancer and multiple Availability Zones

## Technologies Used

- Frontend: Nuxt.js, Vue.js
- Backend: Go
- CI/CD: Jenkins, Docker, CloudFormation
- AWS: EC2, DynamoDB, S3, Elastic Load Balancer
- Other: Tailwind CSS

## Setup

### Install Dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```
### Development Server
Start the development server at http://localhost:3000:
```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
### Production
Build the application for production:
```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```
Preview the production build locally:
```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
## Backend
Run the Go backend:
```bash
go run main.go
```

## Deployment
The application is deployed on AWS using Jenkins for CI/CD, Docker for containerization, and CloudFormation for infrastructure management.

## AWS Architecture
![AWS Architecture Diagram Old](images/AWS architect old.png)
![AWS Architecture Diagram](images/AWS architect new.png)


## Lessons Learned
- CI/CD Benefits: Streamlined development and reduced errors.
- AWS Optimization: Efficient use of resources for cost efficiency.
- Collaboration: Importance of clear communication in cross-functional teams.
