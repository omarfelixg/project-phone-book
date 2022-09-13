# project-phone-book-front

# project-phone-book-api

The present project is a view for the interaction of the contacts api. ault environment variables, in case you want to change these values create .env file in the root of the project. Refer to the src/configs.ts file

# commands

docker build -f Dockerfile -t client .
docker run --name phone-book-front -it -p 3000:3000 client