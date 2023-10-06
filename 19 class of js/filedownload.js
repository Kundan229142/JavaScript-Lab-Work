// file download succesfully 

// function downloadfile(url,download){
//     document.write("Start File Downloading...")
//     setTimeout(()=>{
//         let name = url.split("/").pop();
//         download(name);
//     },2000);
// }

// downloadfile("https://www.facebook.com/profile.jpg", function(name){
//     document.write(`File downloaded successfully...${name}`);
// })


// file Compressed succesfully 


// function CompressFile(url,compress){
//     document.write("File Starting Compress...")
//     setTimeout(()=>{
//         let name = url.split('/').pop();
//         let url2 =name.split('.')[0]+'.zip'
//         compress(url2);
//     },2000);
// }

// CompressFile("https://www.facebook.com/profile.jpg", function(name){
//     document.write(`File Compressed successfully...${name}`);
// })


// BOth in one function 

function downloadfile(url,download){
    document.write("Start File Downloading...")
    setTimeout(()=>{
        let name = url.split("/").pop();
        download(name);
    },2000);
}
function CompressFile(url,compress){
    document.write("File Starting Compress...")
    setTimeout(()=>{
        let name = url.split('/').pop();
        let url2 =name.split('.')[0]+'.zip'
        compress(url2);
    },2000);

downloadfile("https://www.facebook.com/profile.jpg", function(name){
    document.write(`File downloaded successfully...${name}`);
    
})
