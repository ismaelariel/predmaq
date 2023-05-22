FROM node:18-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
