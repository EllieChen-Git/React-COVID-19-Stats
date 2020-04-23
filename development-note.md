### Development Note (23/04/2020)

1. Graph (Recharts)

- static data
- around 7 points (1/30, 2/15, 2/29, 3/15, 3/31, 4/15)
- total deaths: reasonable range (0-100)

2. Form: results in another page, theme context

3. Error handling

4. styling

5. docs

6. deployment

7. new branch: JS -> TS

---

React Chart Library

- Recharts: https://www.npmjs.com/package/recharts
- Nivo: https://www.npmjs.com/package/nivo

---

Table (display as of today dynamic data)

- Category: total cases, active, recovered, deaths, tests

Form (display historical data based on filters)

- Location: Australia or Taiwan
- Category: cases, recovered, deaths
- Timeframe: 7/14/21/30 days

Graph (display static data)

- around 7 points (1/30, 2/15, 2/29, 3/15, 3/31, 4/15)
- total deaths: reasonable range (0-100)

---

---

# covid-19 api

- API
  Repo: https://github.com/NovelCOVID/API
  Docs: https://corona.lmao.ninja/docs/
  End point (country): https://corona.lmao.ninja/countries/taiwan
  End point (historical data by country): https://corona.lmao.ninja/v2/historical/australia
  End point (historical data by country - from 22/01/2020 [cases, deaths, recovered]): https://corona.lmao.ninja/v2/historical/taiwan?lastdays=all

- Inspiration
  Repo: https://github.com/PeggyZWY/COVID-19-VIC
  Site: http://wenyizhao.me/COVID-19-VIC/

- React Blog
  https://github.com/EllieChen-Git/React-Practice-Blog
  C:\projects\React on GitHub\react-blog

---

# Done

---

Material table: https://material-ui.com/components/tables/

---

React Clock: C:\projects\source_code_lesson\20200106_react-clock

---

Geolocation API: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

Refs:

- https://flaviocopes.com/geolocation-api/
- https://www.w3schools.com/html/html5_geolocation.asp

- navigator.geolocation.getCurrentPosition takes a callback function

```javascript
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
});
```

- react-live-clock: https://www.npmjs.com/package/react-live-clock
  get real-time by timezones
- npm install --save react-live-clock

Grab Local Time
https://hashnode.com/post/how-to-get-the-local-time-of-a-particular-timezone-in-javascript-cj703pkwg01t9s5wt8zh37rwz

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```
