//3 states pending, fullfilled, rejected
// chai aur code promise video

let bat = () =>{
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(console.log("Live Happily"));
        },3000);
    });
}

async function tasks()
{
    for(let i=0; i<3;i++)
    {
        await bat();
    }
}

tasks();

//this does not work

/*
for(let i=0;i<3;i++)
{
    tasks();
}
*/