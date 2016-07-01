## ng-emojione
[EmojiOne](http://emojione.com/) filters for Angualr 1.x - Use most beautiful emojis in your project in less then 10 seconds !

[Live Demo](http://ng-emojione.esy.es/)

**Files size 1kb**

### Clone and include in your project
Don't forget to add ng-sanitize module as dependency  

``` src/ng-emojione.min.js ```

Inject ```ngEmojione``` dependency into your app

``` angular.module('yourApp',['ngSanitize','ngEmojione']); ```

### Filters available to use :

#### #1 emojiOneToShort

This will find any native unicode emoji and Convert it to it's shortnames !

```
use <span ng-bind-html="yourText | emojiOneToShort "></span>
```
Full example included in demo folder


#### #2 emojiOneUnicodeToImage

This will find any native unicode emoji and Convert it directly to imagess !

```
use <span ng-bind-html="yourText | emojiOneUnicodeToImage "></span>
```
Full example included in demo folder


#### #3 emojiOneShortnameToImage

This will find any shortnames of emojis and Convert it directly to imagess !

```
use <span ng-bind-html="yourText | emojiOneShortnameToImage "></span>
```
Full example included in demo folder


#### #4 emojiOneToImage

This will find any native unicode emoji & shortnames and Convert it directly to images !

```
use <span ng-bind-html="yourText | emojiOneToImage "></span>
```
Full example included in demo folder

### For resizing emojiOne emojis

Target ```img.emojione``` for example: 
```css
img.emojione{
  width: 20px;
  height : 20px;
}
```
in your css file and you done !

-----------------------------------------------------
Im  @[Its_RahulG](https://twitter.com/Its_RahulG) on twitter
