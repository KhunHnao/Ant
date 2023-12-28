![Screenshot 2023-12-28 120735](https://github.com/KunHnao/ant/assets/49512755/875dadfc-38dc-4fdd-8e6c-75e002e7c249)
# 🐜 Url Shortener + QR Code Generator w/ API
__It works in theory, but...__ For now, this project is a demo merely to demonstrate how a URL Shortener and QR Code Generator might work, using Javascript for the frontend and Python for the backend. As a result, the generated URL might not actually be shorter than the original (because of the use of a free domain) and also takes a long time to generate (because Render spins down with inactivity). However, all other functionalities will function as expected.

### Technologies
- Vite (Build)
- React (Front-End Framework)
- TailwindCSS (CSS Framework)
- Flask (Backend)
- cs50 Library For Python (Backend)
- PostgreSQL (Database)
- ElephantSQL (Database Provider)
- Vercel (Front-End Hosting)
- Render (Backend Hosting)

## API
This project also provides an experimental minimal open API which does not require the use of an API key or any authentication method. Below are some code snippets to demonstrate their usage.

### URL Shortener:
```
const url = 'https://ant-erqz.onrender.com/api/v1/generate_url';
const requestData = { start_url: 'your_actual_url_here'};
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData),
})
.then (response => {
  console.log(response)
})
```

### QR Code:
```
const url = 'https://ant-erqz.onrender.com/api/v1/generate_qr';
const requestData = { start_url: 'your_actual_url_here'};
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData),
})
.then (response => {
  console.log(response)
})
```
