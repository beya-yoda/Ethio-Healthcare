# Ethio HealthCare Server Setup Guide

This guide provides instructions for setting up and running the Ethio HealthCare backend server. The server is built with Go and uses multiple databases and services for different functionalities.

## Prerequisites

Before setting up the server, ensure you have the following installed:

- Go (version 1.22.3 or later)
- PostgreSQL
- MongoDB
- Redis
- RabbitMQ
- Docker and Docker Compose (optional, for containerized setup)

## Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/EthioHealthCare/HealthCare-Server.git
   cd HealthCare-Server
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
PORT=:3002
MONGOURL=mongodb://rootuser:rootuser@localhost:27017
POSTGRES=postgres://rootuser:rootuser@localhost:5432/postgres?sslmode=disable
RABBITMQ=amqp://rootuser:rootuser@localhost:5672/
REDIS=localhost:6379
KEY=VAIBHAVYADAV
   ```
   
   Replace the placeholders with your actual database credentials and settings.

## Database Setup

### PostgreSQL
1. Create a new PostgreSQL database:
   ```sql
   CREATE DATABASE healthcare;
   ```

2. The application will automatically create the necessary tables on startup.

### MongoDB
1. MongoDB will be used for storing patient records and other healthcare data.
2. The application will automatically create the necessary collections on startup.

### Redis
1. Redis is used for rate limiting and caching.
2. Ensure Redis server is running on the default port (6379).

### RabbitMQ
1. RabbitMQ is used for asynchronous tasks like notifications and appointments.
2. Ensure RabbitMQ server is running on the default port (5672).

## Building and Running the Server

### Manual Setup

1. Install the required Go dependencies:
   ```bash
   go mod download
   ```

2. Build the server:
   ```bash
   go build -o healthcare-server
   ```

3. Run the server:
   ```bash
   ./healthcare-server
   ```

### Docker Setup (Recommended)

1. Build and run using Docker Compose:
   ```bash
   docker-compose up -d
   ```

   This will start all required services (PostgreSQL, MongoDB, Redis, RabbitMQ) and the application server.

## API Endpoints

The server exposes the following main API endpoints:

### Authentication
- `POST /api/v1/healthcare/auth/register` - Register a new healthcare provider
- `POST /api/v1/healthcare/auth/login` - Login as a healthcare provider

### User Preferences
- `GET /api/v1/healthcare/preferance/get` - Get user preferences
- `PUT /api/v1/healthcare/preferance/change` - Update user preferences
- `DELETE /api/v1/healthcare/delete/account` - Delete user account

### Patient Records
- Various endpoints for managing patient records (see API documentation)

### Metrics
- `GET /metrics` - Prometheus metrics endpoint for monitoring

## Security Features

The server implements several security features:

1. JWT-based authentication
2. Rate limiting to prevent abuse
3. Password hashing using bcrypt
4. Input validation

## Troubleshooting

### Common Issues

1. **Database Connection Errors**:
   - Verify that your database credentials in the `.env` file are correct
   - Ensure that the database servers are running

2. **Port Already in Use**:
   - Change the PORT value in the `.env` file if port 8080 is already in use

3. **JWT Authentication Issues**:
   - Ensure that JWT_SECRET is properly set in the `.env` file

## Development and Testing

### Running Tests

```bash
go test ./... -v
```

### Monitoring

The server exposes Prometheus metrics at the `/metrics` endpoint, which can be used with Grafana for monitoring.

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).

## Contact

For questions or support, please contact the project maintainers at [contact@ethiohealthcare.org](mailto:contact@ethiohealthcare.org).
