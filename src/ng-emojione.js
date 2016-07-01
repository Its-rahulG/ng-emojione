(function(){
    var emojiOne = angular.module('ngEmojione',[]);

    emojiOne.filter('emojiOneToShortName' , function(){
        return function(input ,param){
            return emojione.toShort(input);
        }
    })
    emojiOne.filter('emojiOneUnicodeToImage' , function(){
        return function(input ,param){
            return emojione.unicodeToImage(input);
        }
    })
    emojiOne.filter('emojiOneShortnameToImage' , function(){
        return function(input ,param){
            return emojione.shortnameToImage(input);
        }
    })
    emojiOne.filter('emojiOneToImage' , function(){
        return function(input ,param){
            return emojione.toImage(input);
        }
    })

})();