class gitTutorial 
{
    constructor(hello)
    {
        this.Name = hello;
    }

    aboutme()
    {
        console.log(`${this.Name} is my Name`);
    }
}

const myFirstTut = gitTutorial("Parth");
myFirstTut.aboutme();
console.log("Modified file 1");
console.log("direct commit");

console.log("Doing this on feature1 Branch");
