# Enduro TinyMCE

This is a brick for [Enduro](https://www.endurojs.com/).

Installation and setup here: [Enduro Bricks](https://www.endurojs.com/docs/enduro-bricks).

Learn more about TinyMCE here: [TinyMCE](https://www.tinymce.com/).

## Usage
Use the type `tinymce`.

`tinymce` enables the following actions by default:
- Bold
- Italic
- Underline
- Strikethrough
- Ordered List
- Unordered list
- Link

You can add additional actions from the brick options in `enduro.json` at the root of your Enduro project. For example:

```
"bricks": {
  "enduro_tinymce": {}
}
```

An example of a set of fields inside an Enduro flat file:

```
$text_type: 'tinymce'
text: ''
```

## Development
Feel free to submit different configurations or improvements via Github issues. TinyMCE has many more features, this brick uses only some of the basics by default.
