# ap-input



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default        |
| --------------- | ---------------- | ----------- | --------- | -------------- |
| `assistiveText` | `assistive-text` |             | `string`  | `undefined`    |
| `color`         | `color`          |             | `string`  | `'neutral-50'` |
| `disabled`      | `disabled`       |             | `boolean` | `false`        |
| `error`         | `error`          |             | `boolean` | `false`        |
| `errorText`     | `error-text`     |             | `string`  | `undefined`    |
| `inputId`       | `input-id`       |             | `string`  | `undefined`    |
| `label`         | `label`          |             | `string`  | `undefined`    |
| `leadingIcon`   | `leading-icon`   |             | `string`  | `undefined`    |
| `name`          | `name`           |             | `string`  | `undefined`    |
| `placeholder`   | `placeholder`    |             | `string`  | `undefined`    |
| `required`      | `required`       |             | `boolean` | `false`        |
| `size`          | `size`           |             | `string`  | `'default'`    |
| `trailingIcon`  | `trailing-icon`  |             | `string`  | `undefined`    |
| `type`          | `type`           |             | `string`  | `'text'`       |
| `value`         | `value`          |             | `string`  | `undefined`    |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `inputFilled` |             | `CustomEvent<any>` |
| `inputTyping` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ap-label](../label)
- [ap-icon](../icon)
- [ap-error-text](../error-text)

### Graph
```mermaid
graph TD;
  ap-input --> ap-label
  ap-input --> ap-icon
  ap-input --> ap-error-text
  ap-label --> ap-tooltip
  ap-label --> ap-icon
  ap-error-text --> ap-icon
  style ap-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
