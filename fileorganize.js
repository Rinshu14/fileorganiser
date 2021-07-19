let fs=require('fs');

let path=require('path');
let extensions={
    "images":['.png','.jpg','.jpeg','.gif'],
    "audio":['.mp3'],
    "documents":['.pdf','.txt','.doc'],
    "compressed":['.zip','.rar'],
    "videos":['.mkv','.mp4']
}
let input=process.argv.slice(2);
let folderPath=input[0];
let extFolderPath=folderPath;
function createFolder()
{
    console.log(extFolderPath);
    fs.mkdirSync(extFolderPath);
}
function checkFolder(extension,folderPath)
{
    for(let key in extensions)
    {
        let arr=extensions[key];
        let eon=arr.includes(extension);
        if(eon==true)
        {
            //console.log(key);
            extFolderPath=path.join(folderPath,key);
            console.log(extFolderPath);
            break;
        }
    }
    return fs.existsSync(extFolderPath);
}
let content=fs.readdirSync(input[0]);
for(let i=0;i<content.length;i++)
{    
     
     //console.log(content[i]);  
    let extensionName=path.extname(content[i]);
    let extensionFolderExist=checkFolder(extensionName,folderPath);
    //console.log(extensionFolderExist);
    if(extensionFolderExist==false)
    {
        createFolder();
    }
  
}


