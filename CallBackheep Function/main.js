function DownloadFile(url,download)
{
    console.log('file start downloading..... ')
    setTimeout(()=>{
        let path=url.split('/').pop();
        download(path);
    },2000);
}

function compressFile(path,compress)
{
    console.log('file start compress');
    setTimeout(()=>{
        const comp=path.split('.')[0]+'.Zip';
        compress(comp);
    },2000);
}

function uploadfile(comp,upload) 
{
    console.log('File uploading Start');
    setTimeout(()=>{
        let upl = "https://LocalHost:3000/" + comp;
        console.log(upl);
        upload(upl);
    },2000);
}
DownloadFile('https://www.facebook.com/profile.jpg',function(path){
    console.log(`file downloaded successfully ${path}`);
    compressFile(path,function(comp){
        console.log(`file compressed successfully....${comp}`);
            uploadfile(comp,function(upl){
                console.log(`File Uploaded SuccessFully....!!${upl}`);
            })
    })
})