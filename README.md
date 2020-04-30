# React-COVID-19-Stats

- A React project to visualise COVID-19 data in Australia and Taiwan.

- GitHub Repo: https://github.com/EllieChen-Git/React-COVID-19-Stats

- Deployed Site:

---

### Features

##### <u>General</u>

1. Use React Hooks
2. Use Error Boundary to handle errors
3. Use React Context to create theme colour

<img src="./docs/form-2.gif" width="400" height="200" />

##### <u>Seasonal clocks</u>

1. Present two clocks in different time zones with a ticking effect.
2. Clock faces will change depends on the current season in North hemisphere (Taiwan) and South hemisphere (Australia).

Example 1: April is Autumn in Australia & Spring in Taiwan

<img src="./docs/clocks-1.gif" width="350" height="175" />

Example 1: December is Summer in Australia & Winter in Taiwan

<img src="./docs/clocks-2.PNG" width="300" height="175" />

##### <u>Comparison Table</u>

1. Compare the total cases, active cases, recovered cases, deaths and tests in Australia and Taiwan.
2. Retrieve data with Axios and a public API.

<img src="./docs/table.PNG" width="400" height="235" />

##### <u>Interactive Graph</u>

- Interactive graph with third-party package 'Rechart'.

<img src="./docs/graph.gif" width="400" height="200" />

##### <u>Historical Data Form</u>

1. Display historical data (Axios with public API) based on selected options.
2. Display search results with pagination.

<img src="./docs/form-1.PNG" width="500" height="235" />

##### <u>Social buttons to share this site</u>

- Easy to use share functionality to share this site on major social media: Facebook, Facebook Messenger, email, Line, LinkedIn, Twitter and WhatsApp.

<img src="./docs/socials.PNG" width="275" height="75" />

---

### Project Goals (What I want to learn/practice in this project)

- Refresh my knowledge of consuming public APIs and displaying data in React. :heavy_check_mark:
- Use Material UI for design (I usually use Bootstrap in my personal projects). :heavy_check_mark:
- Use TypeScript to write React App (https://create-react-app.dev/docs/adding-typescript/). 🔺
- Implement end-to-end testing: cypress (or other end-to-end testing). 🔺

---

### Reflection

- **Learning vs Coding**

This is the first time I used React Hooks in my personal project. Before this, I had read the React documentation and practised with several online tutorials. However, it still took me some time to learn how to 'actually' use React Hooks 'properly'. I re-visited React docs and my notes several times and also read more posts online. I'm glad that now I feel more confident in using React hooks.

<u>Lesson: You'd never know whether you understand a concept or learn a skill until you put it into practice.</u>

- **Doing your own projects vs Following online tutorial**

When I follow tutorials, I don't have to worry much about the next steps. Even when there are bugs, the only thing I need to do is going back to the previous slides or re-winding the video to double-check the source code. However, when I was working on this project, I felt lost so many times. Sometimes I didn't know where to start, what to do next, and I had no idea what the best approach was. So I wrote the initial code and then kept going back to refactoring my code with different approaches. But I guess that's how you learn to program. Practice makes perfect.

<u>Lesson: While learning, always keep a 'why' attitude in mind. Ask yourself 'why the instructor decides to take certain approach', ask 'what are the programming principle/theory behind the scene' when your code is working, read the error messages carefully before blindly trying different solutions online.</u>

- **Planning vs Reality**

In my initial planning session, everything looked so easy and shouldn't take up much time. In reality, it took me so much time to implement each component, and there are still certain functionalities I didn't have time to implement after working on this project for a month.

<u>Lesson: Know yourself better and set more realistic goals.</u>

---

### Project Management

- **Building Process**

1. Brainstormed side project ideas
2. Located the API I wanted to use
3. Quick wireframing of the site
4. Created app with 'create-react-app' and setup README file
5. Broke down the components & time estimation
6. Coding & debugging
7. Styling & documentation

- **Time Estimation & Outcome**

|               :star: Task :star:                | Initial Estimation |      Actual Implementation      |
| :---------------------------------------------: | :----------------: | :-----------------------------: |
|             Planning & wireframing              |        2hrs        |             4.5hrs              |
|        Seasonal Clocks (AUS & TW times)         |        1hr         |              7hrs               |
|         Comparison table : consume API          |        3hrs        |              8hrs               |
|          Form: React Hooks (dropdown)           |        2hrs        |              13hrs              |
|      Trend graph (date & confirmed deaths)      |        3hr         |      1.5hrs (use package)       |
| Public exposure cases in areas: Google maps API |        3hrs        |           (cancelled)           |
|                 Comment section                 |        3hrs        |           (cancelled)           |
|         Share function to social media          |        2hrs        |      1.5hrs (use package)       |
|              Theme: React Context               |        1hr         |             1.5hrs              |
|      Error handling: React Error Boundary       |        1hr         |             1.5hrs              |
|      Convert from JavaScript to TypeScript      |        5hr         |            (not yet)            |
|                  Styling & RWD                  |        3hrs        | 3hrs (not fully responsive yet) |
|                   Polish docs                   |        1hr         |                                 |
|                      Total                      |       30hrs        |                                 |

---

### Future Features

1. Make this website more responsive: Need to think about how to present table, form and graph

2. Convert code from JavaScript to TypeScript

3. Implement end-to-end testing

---

©2020 Ellie Chen - All Rights Reserved.
