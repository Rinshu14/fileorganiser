let tony= {
    name:'tony',
    lastname:'stark',
    friends:['steve','hulk','peter'],
    age:45,
    isavenge:true,
    abc:null,
    address:{
        state:"new york",
        city:'london',
    },
    sayshi:function fn()
        {
            console.log("hi");
            
        },
      
};

//console.log(tony.lastname);
//console.log(tony.age);
//console.log(tony.friend);
//console.log(tony.address);
//console.log(tony.sayshi());
//console.log(tony['name']);
//console.log(tony['friends'][1]);
//console.log(tony['address']);
//console.log(tony['address']['city']);
//console.log(tony['sayshi']());
//let arr=Object.keys(tony);
//for(let i=0;i<arr.length;i++)
//{   
//    let key=arr[i];
//    console.log(tony[key]);
//}
for(let k in tony)
{
    console.log(k);
    console.log(tony[k]);
}