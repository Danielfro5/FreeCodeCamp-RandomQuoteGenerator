var quoteGen = document.getElementById('quotesHere');
var btnVar = document.getElementById('button');
var twitterString = "";
btnVar.addEventListener("click", newQuoteFun());

function writeToHTML (val){
  quoteGen.innerHTML = val;
  twitterString = ("https://twitter.com/intent/tweet?text="+val);
  document.getElementById("twitterButton").href = twitterString;
}

function twitterScript(val){
  window.open(twitterString,"_new","top=100,left=100,height=550,width=420");
}

function newQuoteFun(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.myjson.com/bins/jcvzj');
  ourRequest.onload = function(){
  	var ourData = JSON.parse(ourRequest.responseText);
  	var randoMath = Math.ceil(Math.random()*ourData.length - 1);
    writeToHTML((ourData[randoMath].quote)+" - "+(ourData[randoMath].author));
  };
  ourRequest.send();
};
