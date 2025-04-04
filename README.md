# Purolator GHG Portal

This is a Single Page Application (SPA) built with Angular 15 and Okta authentication.

## Development Setup

1. Make sure you have Node.js installed (version 18.x or 20.x recommended)
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Navigate to `http://localhost:4200/` in your browser

## Building for Production

To build the application for production deployment:

```
npm run build --configuration=production
```

The build artifacts will be stored in the `dist/purolator-ghg-portal` directory.

## Deployment to CloudFront + S3

This application is configured for deployment to AWS CloudFront and S3. Use the following steps:

1. Build the application for production
2. Upload the contents of the `dist/purolator-ghg-portal` directory to an S3 bucket
3. Configure the S3 bucket for static website hosting using the provided `s3-website-config.json`
4. Create a CloudFront distribution pointing to the S3 bucket
5. Add the CloudFront function from `cloudfront-function.js` to handle SPA routing

## Authentication

This application uses Okta for authentication. The authentication configuration can be found in `src/app/okta-auth.config.ts`.

## Features

- SPA architecture for improved performance and client-side rendering
- Okta authentication integration
- File upload functionality with client-side processing
- Responsive design using Angular Material UI
