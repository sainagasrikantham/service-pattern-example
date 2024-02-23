# service-pattern-example

- Install depedencies with `npm install`
- Run the app with `npm start`

**`POST`: Create User**

```sh
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"johndoe@example.com"}'
```

**`GET`: All Users**

```sh
curl -X GET http://localhost:3000/users
```

**`GET`: User by Id**

```sh
curl -X GET http://localhost:3000/users/1
```
