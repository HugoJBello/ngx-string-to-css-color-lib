[![npm version](https://badge.fury.io/js/ngx-string-to-css-color.svg)](https://badge.fury.io/js/ngx-string-to-css-color)
[![Build Status](https://travis-ci.org/HugoJBello/ngx-string-to-css-color-lib.svg)](https://travis-ci.org/https://github.com/HugoJBello/ngx-string-to-css-color-lib?branch=master)

ngx-string-to-css-color
===========

An angular 2 library that lets you obtain css colors (hexadecimal code) from strings of text using hash functions. **Different text inputs will give you different colors**, which makes it a great tool to visualize different tags or text strings. Allowing you to do things like this:

![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/sample.PNG)

[Bug-reports or feature request](https://github.com/HugoJBello/ngx-string-to-css-color-lib/issues) as well as any other kind of **feedback is highly welcome!**

Check the [**live demo here!!**](https://ngx-string-to-css-color.firebaseapp.com/)


```
npm install ngx-string-to-css-color -S
```

And add it as a dependency to your main module

```typescript
import { NgxStringToCssColorModule} from "ngx-string-to-css-color";

@NgModule({
  imports: [
    NgxStringToCssColorModule,
  ],
})
export class AppModule { }

```


Using the library is easy. You can use the service ``StringToColorService`` or the custom tags with the angular selector ``tag-with-background-from-text``.

# Obtain an string with StringToColorService

If you inject the service

```typescript
import { StringToColorService} from 'ngx-string-to-css-color';
...
constructor (public stringToColorService : StringToColorService) {}

```

you will see that it transforms any string into a css color that you can later use in your code, For instance

```typescript
const color = this.stringToColorService.stringToColor("sample test");
console.log(color);
```
gives you 

```typescript
#1d4a44
```

which is 

![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/sample_test_default.PNG)

You can change the shade by adding a second parameter:

```typescript
const color = this.stringToColorService.stringToColor("sample test",'-0.2');
console.log(color);
```

obtaining the lighter color

```typescript
#3a9488
```
![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/sample_test_shade_-0.2.PNG)

**If you change the input text, your the retrieved color will change**, for instance ``this.stringToColorService.stringToColor("sample test");`` will give you ´´#0a5a20´´ which is 

![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/sample_test22_default.PNG)

# Use the custom tag ``tag-with-background-from-text``
The component tag-with-background-from-text can be used to obtain a chip tag that **assings its background color from the text inside**
```html
<tag-with-background-from-text [text]="'sample test'"></tag-with-background-from-text>
```
![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/sample_test_tag_default.PNG)

you can change the shade using also the directive ``applyShade="-0.2"``.

```html
<tag-with-background-from-text [text]="'sample test'" applyShade="-0.2"></tag-with-background-from-text>```
```
![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/sample_test_tag_shade_-0.2.PNG)

##More examples

![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/examples.PNG)

