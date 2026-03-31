const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Ajay's World</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(to right, #1e3c72, #2a5298);
                color: white;
                text-align: center;
            }
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                padding: 20px;
            }
            h1 {
                font-size: 50px;
                margin-bottom: 20px;
            }
            .box {
                background: rgba(255, 255, 255, 0.1);
                padding: 20px;
                margin: 10px;
                border-radius: 10px;
                width: 300px;
                transition: 0.3s;
            }
            .box:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: scale(1.05);
            }
            .footer {
                margin-top: 20px;
                font-size: 18px;
                opacity: 0.8;
            }
            a {
                color: #ffd700;
                text-decoration: none;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to Ajay's World 🌍</h1>

            <div class="box">👨‍👩‍👧‍👦 Family & Friends</div>
            <div class="box">🎓 College Life</div>
            <div class="box">💼 Office / DevOps Journey</div>
            <div class="box">
                📺 YouTube Channel <br/>
                <a href="https://www.youtube.com/@TheAjayMinute" target="_blank">
                    TheAjayMinute
                </a>
            </div>

            <div class="footer">
                Thank you for visiting 🙏 <br/>
                Keep learning, keep growing 🚀
            </div>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});