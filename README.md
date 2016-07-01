## ng-emojione
[EmojiOne](http://emojione.com/) filters for Angualr 1.x - Use most beautiful emojis in your project in less then 10 seconds !

[Live Demo](http://ng-emojione.esy.es/)

**Files size 1kb**

### Clone and include in your project

``` src/ng-emojione.min.js ```

Inject ```ngEmojione``` dependency into your app

``` angular.module('yourApp',['ngEmojione']); ```

### Filters available to use :

#### #1 emojiOneToShort

This will find any native unicode emoji and Convert it to it's shortnames !

```
use {{ yourText | emojiOneToShort }}
```
Full example included in demo folder


#### #2 emojiOneUnicodeToImage

This will find any native unicode emoji and Convert it directly to imagess !

```
use {{ yourText | emojiOneUnicodeToImage }}
```
Full example included in demo folder


#### #3 emojiOneShortnameToImage

This will find any shortnames of emojis and Convert it directly to imagess !

```
use {{ yourText | emojiOneShortnameToImage }}
```
Full example included in demo folder


#### #4 emojiOneToImage

This will find any native unicode emoji & shortnames and Convert it directly to images !

```
use {{ yourText | emojiOneToImage }}
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
