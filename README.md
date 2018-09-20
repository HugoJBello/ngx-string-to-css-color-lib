[![npm version](https://badge.fury.io/js/ngx-string-to-css-color.svg)](https://badge.fury.io/js/ngx-string-to-css-color)
[![Build Status](https://travis-ci.org/HugoJBello/ngx-string-to-css-color-lib.svg)](https://travis-ci.org/https://github.com/HugoJBello/ngx-string-to-css-color-lib?branch=master)

ngx-string-to-css-color
===========

An angular 2 library that lets you obtain css colors from strings of text.

[Bug-reports or feature request](https://github.com/HugoJBello/ngx-string-to-css-color-lib/issues) as well as any other kind of **feedback is highly welcome!**

Check the [live demo here](https://ngx-string-to-css-color.firebaseapp.com/)


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
const color = this.stringToColorService.stringToColour("sample test");
console.log(color);
```
gives you 

```typescript
#1d4a44
```

which is 

<span style="background: rgb(29, 74, 68);">____</span>


