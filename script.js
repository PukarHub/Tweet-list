//variables
const tweetList = document.getElementById('tweet-list')



// Event Listeners

eventListeners();

function eventListeners(){
// form submission
    document.querySelector('#form').addEventListener('submit',newTweet)
    //remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    // document
    document.addEventListener('DOMContentLoaded' ,localStorageOnLoad);
}



// functions
function newTweet(e){
  e.preventDefault();
  
  //read the text area value
  const tweet = document.getElementById('tweet').value;

// create removeBtn
const removeBtn = document.createElement('a')
removeBtn.classList = 'remove-tweet';
removeBtn.textContent = 'X';

  //   create an <li> element
const li =document.createElement('li');
li.textContent = tweet;
tweetList.appendChild(li);
    
//  add the remove button to the tweet list
li.appendChild(removeBtn);

// add to local storge
addTweetLocalStorage(tweet);

}
//remove tweet form the dom
function removeTweet(e){
if(e.target.classList.contains('remove-tweet')){
    e.target.parentElement.remove();
}

    
}

// adds the tweets into he local stonrage
function addTweetLocalStorage(tweet){
  let tweets = getTweetsFromStorage();

 //   Add the twee into an array
  tweets.push(tweet);

//   convert tweet array into strings
   localStorage.setItem('tweets',JSON.stringify(tweets))
}

function getTweetsFromStorage(){
    let tweets;
    const tweetLS = localStorage.getItem('tweets')
        // get the values,if null is retruning we create an empty array
    if( tweetLS === null){
        tweets = [];
    }else{
        tweets = JSON.parse(tweetLS);
    }
    return tweets;
}

// print local storage tweets on laod 
function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();

    // loop through storage and print the values
    tweets.forEach(function(tweet){
        // create removeBtn
const removeBtn = document.createElement('a')
removeBtn.classList = 'remove-tweet';
removeBtn.textContent = 'X';

  //   create an <li> element
const li =document.createElement('li');
li.textContent = tweet;
tweetList.appendChild(li);
    
//  add the remove button to the tweet list
li.appendChild(removeBtn);
    })
}

