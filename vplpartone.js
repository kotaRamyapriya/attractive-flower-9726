<script>
var page1part2=[
{
image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/07/markus-spiske-fr7SSrc43AQ-unsplash--1-.jpg",
head1:"Publication",
head2:"Flow",
para1:"What I've Learned About Getting Clients 11 years into Running a PR and Social Agency",
date:"Jul 18,2022",
time:" 10 min read ",
button:"Flow",
para2:"It's not easy to build an agency, much less maintain one for over ten years, but that's what Chris Norton has done with Prohibition PR. In this article, he shares the lessons he has learned from eleven years of running a PR and social media agency.",
image2:"https://buffer.com/resources/content/images/size/w100/2022/07/chrisnorton.png",
name:"Chris Norton,",
tittle:"Founder Of Prohibition PR",

},
{
image:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/07/ASK-BUFFER-05.png",
head1:"Publication",
head2:"Flow",
para1:"Ask:Buffer Will Scheduling My Social Media Post Affect My Enagagement",
date:"Jul 14,2022",
time:" 4 min read ",
button:"Flow",
para2:"There's a myth that using third-party scheduling tools will reduce your engagement. This article presents the existing research that debunks this and advice for boosting your engagement.",
image2:"https://buffer.com/resources/content/images/size/w100/2022/03/B6060E07-7A0E-4C6C-82EE-C654EA065314_1_102_o.jpeg",
name:"Tamilore Oladipo,",
tittle:"Content Writer @ Buffer",

},

{
image:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/07/britt-gaiser-RxbuKAEW0ys-unsplash--1-.jpg",
head1:"Publication",
head2:"Flow",
para1:"5 Steps for Dealing with Social Media Negativity",
date:"Jul 14,2022",
time:" 7 min read ",
button:"Flow",
para2:"It’s essential to create a clear and concise policy for what to do when you encounter negativity on your social media so you can tackle it before it becomes a problem for your business",
image2:"https://buffer.com/resources/content/images/size/w100/2022/03/B6060E07-7A0E-4C6C-82EE-C654EA065314_1_102_o.jpeg",
name:"Tamilore Oladipo,",
tittle:"Content Writer @ Buffer",

},
{
image:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/07/pexels-rodnae-productions-6115196.jpg",
head1:"Publication",
head2:"Flow",
para1:"How Charitable Giving Helped Us Take Our Dog Daycare to $1M in Revenue",
date:"Jul 12,2022",
time:" 5 min read ",
button:"Flow",
para2:"Many business owners may worry about the extra cost of charitable giving, but Susan and Michael Perlman have found that it’s not only a good thing to do, but it’s good for business. Here’s how supporting charitable initiatives has helped their dog daycare succeed.",
image2:"https://buffer.com/resources/content/images/size/w100/2022/07/Blog-Contributor-photo.png",
name:"Susan and Michael Perlman Owners of the Dogto",
tittle:"Owners of the Dogtopia",

},
]
</script>


<script>
for(var a=0;a<page1part2.length;a=a+1){
var div=document.createElement("div")
var image=document.querySelector("img")
image.setAttribute("src",page1part2[a].image)
var head1=document.querySelector("p")
head1.innerText=page1part2[a].head1
var head2=document.querySelector("p")
head2.innerText=page1part2[a].head2
var para1=document.querySelector("p")
para1.innerText=page1part2[a].para1
var date=document.querySelector("p")
date.innerText=page1part2[a].date
var time=document.querySelector("p")
time.innerText=page1part2[a].time
var button=document.querySelector("buuton")
button.innerText="Flow"
var para2=document.querySelector("p")
para2.innerText=page1part2[a].para2
var image2=document.querySelector("img")
image2.setAttribute("src",page1part2[a].image2)
var name=document.querySelector("h2")
name.innerText=page1part2[a].name
var title=document.querySelector("h3")
title.innerText=page1part2[a].title
div.append(image,head1,head2,para1,date,time,button,para2,image2,name,title)
document.querySelector("#container1").append(div)
}
</script>
