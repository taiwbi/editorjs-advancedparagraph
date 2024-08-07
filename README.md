# Advanced Paragraph for Editorjs

Paragraph tool with alignment and RTL support for [Editorjs](https://editorjs.io)

## Installation

### Install via npm

`npm i --save @taiwbi/editorjs-advancedparagraph`

If you wish to use it on browser, I recommend to use [browserify](https://github.com/browserify/browserify)

#### Install using browserify

After installing the Advanced Paragraph and browserify package with npm run:

`browserify -r @taiwbi/editorjs-advancedparagraph > bundle.js`

then in your page do this:

```html
<script src="bundle.js"></script>
<script>
  const AdvancedParagraph = require("@taiwbi/editorjs-advancedparagraph");
  /* ... */
</script>
```

## Usage

```javascript
const editor = new EditorJS({
  tools: {
    paragraph: {
      class: AdvancedParagraph,
      inlineToolbar: true,
    },
  },
});
```

If you wish to keep default editorjs paragraph and have advanced paragraph beside:

```javascript
const editor = new EditorJS({
  tools: {
    AdvancedParagraph: {
      class: AdvancedParagraph,
      inlineToolbar: true,
    },
  },
});
```

if you use [editorjs-html](https://github.com/pavittarx/editorjs-html) you can use built-in parser

```javascript
const edjsParser = edjsHTML({
  paragraph: AdvancedParagraph.AdvancedParagraphParser /*, ...*/,
});
```
