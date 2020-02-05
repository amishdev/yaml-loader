# yaml-loader

## Install

`npm install amish-yaml-loader --save-dev`
or  
`yarn add amish-yaml-loader -D`

Webpack config
```js
// loaders
 module: {
        rules: [
            {
                test: /\.ya?ml$/,
                use: ['json-loader', 'amish-yaml-loader'],
            },
        ],
    },
```

Yaml
```yaml
---
copy: this is some copy
```

Usage `import data from '../path/to/data.yaml';`

### use with markdown

install json markdown loader `npm install json-markdown-loader --save-dev` or `yarn add json-markdown-loader -D`

Webpack config
```js
module: {
        rules: [
            {
                test: /\.ya?ml$/,
                use: ['json-loader', 'json-markdown-loader', 'amish-yaml-loader'],
            },
        ],
    }
```

Yaml
```yaml
---
content:
  type: markdown
  value: >
    ## Heading
    some content
     - list item
     - list item 2
```

`import markdownContent from '../path/to/content.yaml';`