//for loop in array

let programming_language = ["python","js","cpp","java"]
for (i=0;i<programming_language.length;i++)
{
    console.log(programming_language[i])
    
}

//for loop inside a loop

for(let i=1;i<=5;i++)
{
    console.log(i)
    
    for(j=1;j<=5;j++)
    {
        console.log("hi " + j)
    }
    
}