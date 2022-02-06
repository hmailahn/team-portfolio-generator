// const { Manager, Engineer, Intern } = employees;



const managerCard = (manager) => {
    
return `<section>
<div class="container">
    <div class="manager">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="card-header bg-primary text-white">
                <h4 class="card-title"><span class="material-icons">local_cafe</span>${manager.name}</h4>
                <h5 class="card-subtitle mb-2">Manager</h5>
                </div>
                <p></p>
                <h6 class="card-text">ID: ${manager.id}</h6>
                <h6 class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></h6>
                <h6 class="card-text">Ofice Number: ${manager.officeNumber}</h6>
            </div>
        </div>
    </div>
</div>
</section>`

};


const engineerCard = (engineer) => {
    if(!engineer) {
        return ''
    } else {
    return `<section>
        <div class="container">
            <div class="engineer">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="card-header bg-primary text-white">
                        <h4 class="card-title"><span class="material-icons">engineering</span>${engineer.name}</h4>
                        <h5 class="card-subtitle mb-2">Engineer</h5>
                        </div>
                        <p></p>
                        <h6 class="card-text">ID: ${engineer.id}</h6>
                        <h6 class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h6>
                        <h6 class="card-text">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></h6>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    }
};



const internCard = (intern) => {

    if(!intern) {
        return ''
    } else {

    return `
    <section>
        <div class="container">
            <div class="intern">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="card-header bg-primary text-white">
                        <h4 class="card-title"><span class="material-icons">school</span>${intern.name}</h4>
                        <h5 class="card-subtitle mb-2">Intern</h5>
                        </div>
                        <p></p>
                        <h6 class="card-text">ID: ${intern.id}</h6>
                        <h6 class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></h6>
                        <h6 class="card-text">School ${intern.school}</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    }
};


//export function to generate entire page
const pageTemplate = (manager, intern, engineer) => {
    //destructure page dataa by type of employee... 
   

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

<main>
    <div class="flex-wrap">

${managerCard(manager)}

${engineerCard(engineer)}

${internCard(intern)}


</div>
</main> 

</body>

</html>
    `;
};

module.exports = pageTemplate;