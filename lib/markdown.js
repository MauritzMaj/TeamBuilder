function generateMarkdown(cards){
    body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Team</title>
    </head>
    <header>Team</header>
    <body>
        <section id="employeecard">
        ${
            cards
        }
            
        </section>
    </body>
    </html>`
    return body
}
module.exports = generateMarkdown;
