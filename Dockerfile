# Backend
FROM golang:1.20 AS backend
WORKDIR /app
COPY backend .
RUN go mod tidy
RUN go build -o server
CMD ["./server"]

# Frontend
FROM node:18 AS frontend
WORKDIR /app
COPY frontend .
RUN npm install
RUN npm run build

# Final container
FROM nginx:latest
COPY --from=frontend /app/dist /usr/share/nginx/html
COPY --from=backend /app/server /server
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
