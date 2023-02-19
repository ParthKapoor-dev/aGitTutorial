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