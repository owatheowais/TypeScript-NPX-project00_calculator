/*************************************************
Full Name: Syed Abu Owais Bin Nasar
Discord Username: owaisnasarubit#7433
Roll No.: PIAIC83125
Email: owatheowais@gmail.com
Twitter: @owatheowais
GitHub Profile URL: https://github.com/owatheowais
Linkedin: https://www.linkedin.com/in/abuowais/
WhatsApp Number: 03442124471
**************************************************/
import inquirer from "inquirer";
import chalk from "chalk";


//const prompt = inquirer.prompt;

type operator2 = 'Add' | 'Subtract' | 'Multiply' | 'Divide';
async function main() {
    const firstnumber = await inquirer.prompt([
        {
            name: "firstNum",
            type: "number",
            message: "Please enter First Number: "
            
        }
    ]);
    const operator_choice = await inquirer.prompt([
        {
            type:"list",
            name:"operator",
            choices:["Add","Subtract","Multiply","Divide"]
        }
    ]);
    const secondnumber = await inquirer.prompt([
        {
            name: "secondNum",
            type: "number",
            message: "Please enter Second Number: "
            
        }
    ]);
    const isvalid:boolean = isNumber(firstnumber.firstNum) && isNumber(secondnumber.secondNum);
    if(isvalid)
{
  //  console.log(isvalid);
    const result = calculate(firstnumber.firstNum,operator_choice.operator as operator2,secondnumber.secondNum)
    console.log(chalk.blue("You have entered first number: "+firstnumber.firstNum));
    console.log(chalk.blue("You have select: "+operator_choice.operator));
    console.log(chalk.blue("You have entered second number: "+secondnumber.secondNum));
    console.log(chalk.bgBlueBright.greenBright.bold('Result: '+result));
    
}
else
{
    console.log(chalk.bgGreen.underline.red.bold("You have entered invalid input, please review it"));
    console.log(chalk.red("You have entered first number: "+firstnumber.firstNum));
    console.log(chalk.red("You have select: "+operator_choice.operator));
    console.log(chalk.red("You have entered second number: "+secondnumber.secondNum));
    main();
}
    
}

function calculate(firstn:number,operatorn:operator2,secondn:number)
{
    switch(operatorn)
    {        
        case 'Add':
            return firstn + secondn;
        case 'Subtract':
            return firstn - secondn;
        case 'Multiply':
            return firstn * secondn;
        case 'Divide':
            return firstn / secondn;
           
    }
}

function isNumber(str:string): boolean
{
    const mayBenumber = parseInt(str);
    const isNum: boolean=!isNaN(mayBenumber);
    return isNum;
}

main();






    // const result = await prompt([{type:"list",name:"project",choices:["hi","hello"]}]);    
    // console.log(result);
