let title=document.getElementById("title");
let content=document.getElementById("content");
let btn=document.getElementById("btn");
let list=document.getElementById("list");
btn.addEventListener("click",news);
function news(){
  list.innerHTML=list.innerHTML+`
  <div class ="news">
   <h2>${title.value}</h2>
   <p>${content.value}</p><hr>
   </div>
   `;
  title.value="我想回家";
  content.value="";
}
let i=0, imgArr=new Array();
imgArr[0]="https://i.quotev.com/ny2ev4kmxiza.jpg";
imgArr[1]="https://i.pinimg.com/736x/d6/2f/09/d62f09e659669f4616d0c50382b1e82b.jpg";
imgArr[2]="https://favim.com/pd/p/orig/2018/08/31/funny-stray-kids-reactions-Favim.com-6233668.jpg";
imgArr[3]="https://favim.com/pd/s11/orig/7/749/7499/74999/stray-kids-meme-straykids-stray-kids-memes-Favim.com-7499910.jpg";
imgArr[4]="https://pbs.twimg.com/media/EQ_0LUmXkAIwnZp?format=jpg&name=360x360";


function showImg(){
  document.getElementById("ico").src=imgArr[i];
  i=(i+1)%5
}

function show(){
  setInterval(showImg,2000);
}