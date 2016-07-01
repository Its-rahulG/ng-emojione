(function () {

    var emojiOne = angular.module('myApp',['ngSanitize','ngEmojione']);
    emojiOne.controller('emojiOneController' , function ($scope) {
        $scope.title = "EmojiOne Filters for Angular :sunglasses:";
        $scope.shortNameToImage = ":stuck_out_tongue: :hugging:"
        $scope.message = "😌 ✌"
        $scope.toImage = "🌺 :couplekiss:"

        $scope.emojiOneToShortDemo = "Converted native unicode emoji to shortnames 😃 😉 😍";

        $scope.emojiOneUnicodeToImageDemo = "Converted native unicode emoji directly to images 😃 😉 😍";

        $scope.emojiOneShortnameToImageDemo = "converted shortnames to images :athletic_shoe: :runner: :v: :alien: ";

        $scope.emojiOneToImageDemo = "Converted native unicode emoji and shortnames directly to images :scream_cat: 🍇 :ghost: 🌷";

    });

})();