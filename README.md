<br />

<div align="center">
  <h1>Backend for Dengue Project</h1>
  <p><h3 align="center">Ready-to-run APIs 🚀</h3></p>
  <a href="https://expressjs.com/">Express</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/">Prisma</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://planetscale.com/">Planetscale</a>
</div>

<hr>
<br />

```
               get("/detail/:email")
                   description: get all the detail record of user by providing its email behind the endpoint

               post("/detail")
                   description: create the detail record
                   body: email, temperature, blood_pressure, pulse_rate, hemoglobin, hematocrit, white_cell, platelet

               put("/detail/:id")
                   description: update the detail record
                   body: temperature, blood_pressure, pulse_rate, hemoglobin, hematocrit, white_cell, platelet

               get("/news")
                   description: get all the news record from the news table

               post("/news")
                   description: create a news record in the database
                   body: title, text

               put("/news/:id")
                   description: update the news record by providing the news id behind the endpoint
                   body: title, text

               post("/task")
                   description: create a task record in the task table
                   body: name, description

               get("/task")
                   description: get all the task from the task table

               get("/task/:id")
                   description: get specific task by providing the task id behind the endpoint

               put("/task/:id")
                   description: update a task record
                   body: name, description

               get("/email")
                   description: get the all the detail of the user

               post("/signup")
                   description: signup the user
                   body: email, password

               post("login")
                   description: login user
                   body: email, password
```

<hr>

```
src
│   index.ts - Main server file
│
└───api
│   │
│   └───controllers
│   │       Detail.controller.ts
│   │       News.controller.ts
│   │       Task.controller.ts
│   │       User.controller.ts
│   │
│   └───middlewares
│   │       cors.ts
│   │       jwt.ts
│   │       rate_limit.ts
│   │       index.ts
│   │
│   └───routes (CRUD operation with database)
│       - Set "Content-Type": "application/json"
│       - Set "Authorization": "Bearer ${token}" | token retreive from user login
│
│           Detail.ts
│               get("/detail/:email")
│                   description: get all the detail record of user by providing its email behind the endpoint
│
│               post("/detail")
│                   description: create the detail record
│                   body: email, temperature, blood_pressure, pulse_rate, hemoglobin, hematocrit, white_cell, platelet
│
│               put("/detail/:id")
│                   description: update the detail record
│                   body: temperature, blood_pressure, pulse_rate, hemoglobin, hematocrit, white_cell, platelet
│
│           News.ts
│               get("/news")
│                   description: get all the news record from the news table
│
│               post("/news")
│                   description: create a news record in the database
│                   body: title, text
│
│               put("/news/:id")
│                   description: update the news record by providing the news id behind the endpoint
│                   body: title, text
│
│           Task.ts
│               post("/task")
│                   description: create a task record in the task table
│                   body: name, description
│
│               get("/task")
│                   description: get all the task from the task table
│
│               get("/task/:id")
│                   description: get specific task by providing the task id behind the endpoint
│
│               put("/task/:id")
│                   description: update a task record
│                   body: name, description
│
│           User.ts
│               get("/email")
│                   description: get the all the detail of the user
│
│               post("/signup")
│                   description: signup the user
│                   body: email, password
│
│               post("login")
│                   description: login user
│                   body: email, password
│
│           index.ts
│
└───lib
│       jwt.ts
│       prisma.ts
│
└───test
```
