# React Multi Select Dropdown
A reactjs multiselect dropdown with search functionality and multiple other options.

## Features!

  - Support search on tree view structure
  - Provides options for update UI according current theme

### Demo: https://sanjayv.github.io/react-multiselect-dd/

# Installation
`npm install react-multiselect-dd`

# Setup :

**Import module in your `app.module.ts`:**
```js
import Multiselect from "react-multiselect-dd";
...

<Multiselect
    data={sampleData}
    onChange={getSelected}
    showSelected={2}/>
```

**sampleData format**
```js
const sampleData = [
    {
        value: 1,
        text: "First",
        child: [
            {
                value: 2,
                text: "First.1",
                child: [
                    {
                        value: 3,
                        text: "First.1.1"
                    }
                ]
            }
        ]
    },
    {
        value: 4,
        text: "Second",
    },
    ...
];
```

## Other options (optional) :

| Name | Type | Description | Required | Default |
|------|------|-----------|-------------|---------|
| data | Array | Data array that use in multiselect dropdown | Yes   | [] |
| onChange | Function | Callback function that use for get selected values  | Yes | |
| showSelected | Number  | Max limit of display selected item in input, after that it will display total selected count. | No | 2 |
| customStyle | Object | Detail here | No |  |


##### Custom Style

You can update Dropdown style according requirments.
Following **Custome Styles** available:

| Name | Type | Description | Default |
|------|------|-----------|---------|
| inputHeight | Number | Use for set Dropdown input height | 40 |
| inputWidth | Number | Use for set Dropdown input width  | 360 |
| checkedColor | String  | Use for set checked box checked color | '#e6783b' |
| optionHeight | Number | Use for set dropdown option height | 400 |

You can pass following options in **customStyle** props.

```js
<Multiselect
    data={sampleData}
    onChange={getSelected}
    showSelected={2}
    customStyle={{
        'optionHeight': 400,
        'checkedColor': '#e6783b',
        'inputHeight': 40,
        'inputWidth': 360
    }}
/>
```

## License
MIT Licensed. Copyright (c) 2019 sanjay verma

Your contributions and suggestions are always welcome :)
