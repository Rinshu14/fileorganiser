function input(a)
{
    for(let i=0;i<a.length;i++)
    {
        console.log(parseInt(a[i]));
    }
}
let inp=process.argv.slice(2);
input(inp);