# File Upload UI - System Instructions
 
 ## CORE PRINCIPLES
 - NEVER remove existing functionality
 - Maintain data model integrity
 - Preserve all EXISTING FUNCTIONALITY
 - Keep performance optimizations
 - Update VECTOR_CONTEXT.json when modifying functionality to maintain accurate feature tracking
 - Ensure that you have a clear understanding of how your code is going to affect other components in the system
 - ALWAYS PROVIDE TERMINAL COMMANDS IN POWERSHELL FOR WINDOWS - USE "npm run" PATTERN INSTEAD OF "&&" OR ";" 
 - ALWAYS NAVIGATE TO C:\Users\User\FileUpload\purolator-ghg-portal
 - I LIKE ONE WORD ANSWERS WHERE POSSIBLE.
 - OPTIMIZE TOKENS, I WILL ASK FOR ADDITIONAL INFO.
 - KEEP THE CHANGES SMALL SO WE CAN TEST EACH PIECE.
 - DO NOT REMOVE PREVIOUS CONSOLE OUT PRINTS THEY ARE THERE FOR A REASON!
 - NEVER REMOVE EXISTING FUNCTIONALITY - THINGS ARE IN PLACE FOR A GOOD REASON
 - LETS USE AGILE AND TEST DRIVEN APPROACHES TO MAKE SMALL CHANGES AND ITERATE
 - ASK BEFORE MAKING THE NEXT SET OF CHANGES.
 - I am coding using Node.js 
 - Node.js version compatibility: Use LTS version 18.x or 20.x for best compatibility with dependencies
 - For Angular 15.2.x, choose ONE approach - either all standalone components OR traditional NgModule pattern
 - Mixing standalone components with NgModule pattern requires proper bootstrapping configuration
 - Update SYSTEM_INSTRUCTIONS.md with the latest updates where it makes sense
 
 ## Code Style Guidelines
 ### General
 - Follow PEP 8 style guidelines for Python code
 - Use meaningful variable and function names
 - Include docstrings for all functions and classes
 - Keep functions focused and single-purpose
 - Use type hints where appropriate
 
 
 ## KEY COMPONENTS
 - Must be secure using best coding practices
 - Must be written in Angular and Angular Material components UI
 ### APPLICATION DETAILS 
 - Application to upload files
 - Needs to be secure using Okta authentication to allow access to the page
 - The page will be part of an overall platform with various other management pages
 - The first page will allow the user to upload a file in .csv or .txt format
 - There will be a drag and drop option for the user to drop a file from their PC
 - They will be able to click a browse button to launch their file browser and select a file
 - There will be future expansion to connect to an AWS S3 bucket to upload the file send to the server for processing
 
 ## ARCHITECUTURE DETAILS
Sections:
  1. User Access and Authentication
  2. Web Content Delivery
  3. API Access and Authorization

---

1. User Access and Authentication:
   Users: [File Uploader, GHG Admin]
   Entry Point: GHG UI (Web Browser)
   Authentication:
     - GHG UI --> Redirect to Okta Login Page
     - GHG Admin --> MFA via Okta
     - Okta --> Issues Okta Token after successful login
   Output: Okta Token for authenticated users

---

2. Web Content Delivery:
   Content Source: S3 Bucket (GHG Web Content)
   CDN & Edge Processing: CloudFront
   Edge Compute: Lambda@Edge (Serves content from S3)
   Security: WAF (Web Application Firewall in front of CloudFront)
   Flow:
     [User] --> [GHG UI] --> [CloudFront] --> [Lambda@Edge] --> [S3 Bucket] --> [Lambda@Edge] --> [CloudFront] --> [GHG UI (Web Content)]

---

3. API Access and Authorization:
   API Endpoints: CRUD API Endpoints
   Entry Point: CloudFront
   API Gateway: Manages API requests
   Authorization: Lambda Authorizer (Validates Okta Token)
   Flow:
     [GHG UI] --> [CRUD API Request with Okta Token] --> [CloudFront] --> [API Gateway] --> [Lambda Authorizer (Token Validation)] --> [CRUD API Endpoints]

---

Components List:
  - Users: File Uploader, GHG Admin
  - GHG UI: Web User Interface
  - Okta Identity Cloud: Authentication and MFA Provider
  - Okta Token: Authentication Token from Okta
  - CRUD API Endpoints: Backend API Services
  - CloudFront: CDN, Entry Point, Routing
  - API Gateway: API Management and Routing
  - Lambda Authorizer: API Authorization Function
  - Lambda@Edge: Edge Compute for Web Content
  - S3 Bucket (GHG Web Content): Storage for Web Content
  - WAF: Web Application Firewall

---

Relationships:
  - Users interact with GHG UI.
  - GHG UI authenticates users via Okta (MFA for Admins).
  - GHG UI gets Okta Token.
  - GHG UI accesses CRUD API Endpoints via CloudFront and API Gateway, using Okta Token for authorization.
  - CloudFront serves Web Content from S3 via Lambda@Edge.
  - WAF protects CloudFront.

 
 ## ARCHITECTURE DECISIONS
 - Use standalone components exclusively (no NgModules)
 - Client-side rendering (CSR) approach for CloudFront + S3 static hosting architecture
 - Okta authentication implemented through standard OIDC flow
 - File operations secured through authenticated API endpoints
 - Follow the three-layer architecture pattern:
   1. User Access and Authentication (Okta integration)
   2. Web Content Delivery (CloudFront + S3 + Lambda@Edge) 
   3. API Access and Authorization (API Gateway + Lambda Authorizer)
 
 ## DEPLOYMENT ARCHITECTURE
 - Static assets (HTML, CSS, JS) deployed to S3 bucket
 - CloudFront distribution serves content from S3 with added security
 - No direct public access to S3 bucket
 - Authentication handled by Okta integration through Lambda@Edge
 - API requests authorized through Lambda Authorizer validating Okta tokens
 - WAF provides additional security layer for both CloudFront and API Gateway
 
 ## SECURITY CONSIDERATIONS
 - All API calls must include the Okta token for authorization
 - CloudFront + WAF provide secure content delivery
 - S3 bucket has no public access - content delivery only through CloudFront
 - Lambda@Edge ensures proper OIDC flow with Okta authentication
 - API authorization enforced through dedicated Lambda Authorizer
 
 ## CLIENT-SIDE IMPLEMENTATION REQUIREMENTS
 - Angular application built for static deployment
 - Okta authentication integrated through OIDC flow
 - API calls secured with Okta tokens
 - Optimized bundle size for CloudFront delivery
 - Proper error handling and loading states for API interactions
 
 ## Update Plan - SMALL ITERATIVE STEPS
 1. Fix package.json with correct Okta versions
    - @okta/okta-angular: ^6.5.1 (latest available)
    - @okta/okta-auth-js: ^7.11.0 (stable version)
 2. Upgrade TypeScript to 4.9.5
 3. Upgrade Angular packages incrementally
 4. Test functionality after each upgrade
 5. Convert all components to standalone architecture
    - Use standalone: true in all components
    - Remove NgModule dependencies
    - Use bootstrapApplication in main.ts
    - Use importProvidersFrom for modules without standalone equivalents
 
 ## VERSION INFORMATION
 - Okta Angular SDK latest: 6.5.1 (April 2025)
 - Okta Auth JS compatible: 7.11.0
 - Angular 15.2.x with standalone components architecture
 - Client-side rendering for CloudFront + S3 deployment
 - Node.js recommended: v18.x LTS for best compatibility
 
 ## IMPLEMENTATION NOTES
 - When updating to standalone components, some imports like `mergeApplicationConfig` may require Angular 16+
 - For Angular 15.2.x, focus on client-side rendering optimized for CloudFront + S3 hosting
 - The transition plan should focus on making components standalone first, then removing NgModules after upgrading Angular
 - For Node.js v22.x, consider downgrading to a more compatible LTS version (18.x or 20.x) as mentioned in version information
 - Remove any SSR-specific configuration and dependencies that aren't needed
 
 ## ANGULAR BUILD CONFIGURATION
 - Use standard Angular build process for static assets
 - Configure environment files for different deployment targets
 - Optimize bundles with appropriate settings
 - Include necessary polyfills for browser compatibility