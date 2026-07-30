# Multi-Tenant Platform

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

A simple full-stack multi-tenant application built with **Node.js**, **Express**, **React**, **TypeScript**, **Prisma**, and **PostgreSQL**.

This project was developed as a technical assessment to demonstrate the implementation of a multi-tenant architecture, tenant isolation, authentication, role-based authorization, and a clean project structure.

The solution includes:

- Backend API built with Express and Prisma.
- Frontend SPA built with React and Vite.
- PostgreSQL database with sample data.
- JWT authentication.
- Tenant-based data isolation.
- Clean Architecture approach.

## Tech Stack

### Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication

### Frontend

- React
- Vite
- TypeScript
- Redux Toolkit
- React Router
- Axios

### Database

- PostgreSQL

## Project Structure

```
multi-tenant-platform
│
├── backend      # Express API
├── frontend     # React application
└── database     # PostgreSQL backup with sample data
```

The project is organized into three main modules:

- **backend**: REST API and business logic.
- **frontend**: User interface.
- **database**: PostgreSQL backup containing the database schema and sample data.

## Backend Architecture

The backend follows a Clean Architecture approach by separating responsibilities into different layers.

```
src
├── application
├── config
├── domain
├── infrastructure
├── presentation
└── shared
```

### Layers

- **Presentation**: Controllers, routes and middlewares.
- **Application**: Business services and DTOs.
- **Domain**: Entities and repository contracts.
- **Infrastructure**: Prisma implementation and database access.
- **Shared**: Utilities, constants, errors and common types.

## Frontend Architecture

The frontend is organized using a feature-based structure combined with shared components and services.

```
src
├── api
├── app
├── components
├── features
├── hooks
├── layouts
├── pages
├── router
├── services
├── store
├── styles
├── types
└── utils
```

### Main Responsibilities

- **pages**: Application views.
- **components**: Reusable UI components.
- **features**: Feature-specific logic.
- **services**: HTTP communication with the backend.
- **store**: Global state management using Redux Toolkit.
- **router**: Application routing and protected routes.

## Database

The project uses a single PostgreSQL database.

Current entities:

- **Tenants**
- **Users**
- **Records**

Relationships:

- A **Tenant** can have many **Users**.
- A **Tenant** can have many **Records**.
- Every **User** belongs to one **Tenant**.
- Every **Record** belongs to one **Tenant**.

The **database** folder contains a PostgreSQL backup with both the database schema and sample data required to run the project locally.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Juanfdoa/multi_tenant_platform
cd multi_tenant_platform
```

### 2. Restore the database

Open PostgreSQL (pgAdmin or psql) and create a new database named:

```
multi_tenant_platform
```

Then restore the backup located in:

```
database/
```

The backup already contains the database schema and sample data.

## Backend Configuration

Navigate to the backend folder:

```bash
cd backend
```

Create a `.env` file and configure it according to your local PostgreSQL installation.

Example:

```env
NODE_ENV=development

PORT=3000

DATABASE_URL="postgresql://postgres:Abc.12345@localhost:5432/multi_tenant_platform"

JWT_SECRET=super-secret-key
JWT_EXPIRES_IN=1h
```

> Update the database credentials if your local PostgreSQL configuration is different.

Install dependencies:

```bash
npm install
```

Run the backend:

```bash
npm run dev
```

## Frontend Configuration

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Before running the application, update the backend URL inside:

```
src/api/axios.ts
```

Replace the base URL with the address where your backend is running.

Example:

```ts
http://localhost:3000/api/v1
```

Run the frontend:

```bash
npm run dev
```

## Authentication

This project implements a simplified authentication flow for demonstration purposes.

The login only requires the user's email address.

Authentication flow:

1. The user enters an email.
2. The backend searches for the user in the database.
3. The user's tenant is automatically identified.
4. A JWT token containing the user's information is generated.
5. The frontend stores the token and tenant information for authenticated requests.

> This authentication mechanism was intentionally simplified to focus on the multi-tenant architecture. In a production environment, it should be replaced with a secure authentication system using passwords, hashing, refresh tokens, or an Identity Provider.

## Sample Users

The database backup includes sample tenants, users and records.

Use any of the following email addresses to log in:

| Email | Role | Tenant |
|--------|------|--------|
| juan.perez@demo.com | ADMIN | tenant-demo |
| maria.gomez@acme.com | ADMIN | acme |
| carlos.ramirez@globex.com | USER | globex |
| laura.torres@initech.com | ADMIN | initech |
| andres.castro@umbrella.com | USER | umbrella |

No password is required for this technical assessment.

## Future Improvements

Some features were intentionally left out because the goal of the project was to demonstrate the core concepts of a multi-tenant architecture.

Possible improvements include:

- Secure authentication with email and password.
- Password hashing using bcrypt.
- Refresh token implementation.
- Role and permission management.
- Request validation.
- Global exception handling.
- API documentation with Swagger/OpenAPI.
- Docker and Docker Compose support.
- Unit and integration tests.
- CI/CD pipeline.
- Multi-database tenant strategy.

## Technical Assessment

This project was developed as part of a technical assessment focused on designing and implementing a simple multi-tenant platform.

The main objective was to demonstrate:

- Multi-tenant architecture.
- Tenant data isolation.
- Clean project organization.
- REST API development.
- JWT-based authentication.
- React frontend integration.
- PostgreSQL data persistence.

The implementation focuses on code organization, maintainability, and scalability while keeping the solution simple and easy to understand.

## Application Preview

> Login

![Login](docs/images/login.png)

> Dashboard

![Dashboard](docs/images/dashboard.png)

> Records

![Records](docs/images/records.png)
