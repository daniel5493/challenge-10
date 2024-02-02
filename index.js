const inquirer= require('inquirer')
const fs =require('fs');



    inquirer
  .prompt([
    {
        type:'input',
        message:'what is the color of the text?',
        name:'text_color'
    },
    {
        type:'input',
        message:'what is the text?',
        name:'the_one_piece'
    },
    {
        type:'list',
        message:'what is the shape for the project?',
        name:'shapes',
        choices:['circle','square','triangle']
    },
    {
        type:'input',
        message:'what is the shape color?',
        name:'shape_color',
    },

    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Generated logo.svg")
    if (answers.shapes=="circle") {
        
    
    fs.writeFileSync('logo.svg',`
    <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${answers.shape_color}" />
  
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${answers.text_color}">${answers.the_one_piece}</text>
  
  </svg>
    `)
    }
    else if (answers.shapes=="triangle") {
        
    
        fs.writeFileSync('logo.svg',`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,20 250,180 50,180" fill="${answers.shape_color}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.text_color}">${answers.the_one_piece}</text>
        </svg>
        `)
        }
        else {
            fs.writeFileSync('logo.svg',`
            <svg version="1.1" width="250" height="250" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="250" height="250" fill="${answers.shape_color}" />
            <text x="150" y="100" font-size="60" text-anchor="middle" fill="${answers.text_color}">${answers.the_one_piece}</text>
          </svg>
        `) 
        }
  })
  

