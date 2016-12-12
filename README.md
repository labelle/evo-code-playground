# evo-codePlayground-static
A static representation of the code playground

> frame.html

#### Summary:
The purpose of the frame.html is to demonstrate how the playground could be contained and shared on an third-party website.

The following example demonstrates, through a variable, how we could pass a source reference so the system can determine which CSS, JS, and HTML files should be loaded.

In the following example, we're passing 'tbl' as the source.

```html
<iframe src="./index.html?src=tbl" width="100%" height="750"></iframe>
```
