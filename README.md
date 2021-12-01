# simple-art-be
Back-end server for [simple-art-fe](https://github.com/vickierose/simple-art-fe) students project

## How to run
To run server locally:
1. clone repository
2. run `npm install` to install all dependencies
3. run `npm start` to run server

__To make project work you need `firebaseAccountKey.json` file. Ask owner to receive it.__

## Endpoints
Base url for local running is `http://localhost:5000`

#### /courses
__Request type:__ GET

__Description:__ returns list of courses with all needed data

__Sample response:__
```
[{
  "id": "DlxkqAWBwjF0DF80b29E",
  "name": "Anime Sketching",
  "price": 400,
  "currency": "USD",
  "duration": "4 months",
  "periodicity": "2 times per week",
  "level": "Newbie",
  "groups": [
    {
      "mode": "offline",
      "days": ["sat", "sun"],
      "id": "as1",
      "time": "10-12pm"
    }
  ],
  "description_short": "Basics of anime creation: tecniques, principles, hints. For those who loves anime and wants to learn creating it",
  "description_full": [
    "basic principles of anime-style painting",
    "key features of anime character",
    "visualising emotions of anime character",
    "creating anime-style scenes: home, fantasy, nature",
    "at the end of course you will have at least 3 finished art works and certificate"
  ],
  "thumbnail_img_url": "https://firebasestorage.googleapis.com/v0/b/simple-art-19399.appspot.com/o/courses%2Fan_t.png?alt=media&token=c8960199-4bcb-4652-b15f-44bfe7bcd3d8",
  "full_img_url": "https://firebasestorage.googleapis.com/v0/b/simple-art-19399.appspot.com/o/courses%2Fan_f.png?alt=media&token=d76f0def-c194-4117-b32a-ba93a89d9dd4"
}]
```

#### /courses/new-course
__Request type:__ POST

__Description:__ accepts course data to add it to database

__Sample request body:__
```
{
  "name": "Anime Sketching",
  "price": 400,
  "currency": "USD",
  "duration": "4 months",
  "periodicity": "2 times per week",
  "level": "Newbie",
  "groups": [
    {
      "mode": "offline",
      "days": ["sat", "sun"],
      "id": "as1",
      "time": "10-12pm"
    }
  ],
  "description_short": "Basics of anime creation: tecniques, principles, hints. For those who loves anime and wants to learn creating it",
  "description_full": [
    "basic principles of anime-style painting",
    "key features of anime character",
    "visualising emotions of anime character",
    "creating anime-style scenes: home, fantasy, nature",
    "at the end of course you will have at least 3 finished art works and certificate"
  ]
}
```

#### /teachers
__Request type:__ GET

__Description:__ returns list of teachers with all needed data

__Sample response:__
```
[{
  "id": "GrA8RV914k6RqToXqaYT",
  "first_name": "Amanda",
  "last_name": "Hamilton",
  "courses": [
    "Graphics Basics",
    "Colored Pencils Basics"
  ],
  "education": "Rhode Island School of Design, arts certificate",
  "about": "I love hepling other to reach their goals especially when it comes to art! So I'm teaching things that I'm doing really well",
  "photo": "https://firebasestorage.googleapis.com/v0/b/simple-art-19399.appspot.com/o/teachers%2Fteacher4.png?alt=media&token=b6b7a18b-a3a2-4f07-8bc1-53fa9ad09c8a"
}]
```

#### /form/apply
__Request type:__ POST

__Description:__ accepts data for course application

__Sample request body:__
```
{
  "courseId": "DlxkqAWBwjF0DF80b29E",
  "groupId": "as3",
  "full_name": "Someone Somewhat"
  "email": "aaa@mail.com",
  "phone": "(111)222-33-44"
}
```

#### /form/subscribe
__Request type:__ POST

__Description:__ accepts data for subscribing to newsletter

__Sample request body:__
```
{
  "email": "aaa@mail.com"
}
```