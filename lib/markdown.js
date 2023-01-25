function generateMarkdown(cards){
    body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    <header> <h1>Meet Our Team</h1></header>
    <body>
        <section id="employeecard">
            
        </section>

        <script> src= "./index.js"</script>
    </body>
    </html>`
    return body
}
module.exports = generateMarkdown;
