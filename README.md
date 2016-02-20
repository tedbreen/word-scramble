## Word Scramble
https://scrambled-words.herokuapp.com/

### Current features:
* Built with React and Express
* Uses the [Wordnik API](http://developer.wordnik.com/docs.html#!/words/getRandomWord_get_4) to pick a random word
* Random word gets scrambled and the scrambled word is shown to the user
* Keyboard input is used for typing out the unscrambled word (mouse is not used)
* Letter blocks change colors based on their status: typed letters (white), correctly typed words (green), incorrectly typed words (red)
* Interface, design, and style was "inspired" by [another word scramble game](http://opendoor-words.herokuapp.com/) created by [@nateavasca](http://twitter.com/natenavasca) and [@cpetzold](http://twitter.com/cpetzold)

### Features I would like to add:
* Tests for code
* Retrieving and storing multiple words instead of just one for every round
* Anagram support (if the "correct" word is "evil" then it should also accept "live" as correct) 
* Phone and tablet support 
* Scoring system 
* Countdown timer
* Leaderboard
* Use of backspace key to undo typed words (and prevent browser from navigating back)