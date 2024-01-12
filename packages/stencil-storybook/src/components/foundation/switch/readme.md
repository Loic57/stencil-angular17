# ap-switch



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default        |
| --------------- | ---------------- | ----------- | --------- | -------------- |
| `assistiveText` | `assistive-text` |             | `string`  | `undefined`    |
| `border`        | `border`         |             | `boolean` | `false`        |
| `checked`       | `checked`        |             | `boolean` | `false`        |
| `color`         | `color`          |             | `string`  | `'neutral-50'` |
| `disabled`      | `disabled`       |             | `boolean` | `false`        |
| `error`         | `error`          |             | `boolean` | `false`        |
| `errorText`     | `error-text`     |             | `string`  | `undefined`    |
| `indeterminate` | `indeterminate`  |             | `boolean` | `false`        |
| `inputId`       | `input-id`       |             | `string`  | `undefined`    |
| `label`         | `label`          |             | `string`  | `undefined`    |
| `leadingIcon`   | `leading-icon`   |             | `string`  | `undefined`    |
| `required`      | `required`       |             | `boolean` | `false`        |
| `size`          | `size`           |             | `string`  | `'default'`    |
| `trailingIcon`  | `trailing-icon`  |             | `string`  | `undefined`    |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `clickedRadio` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ap-label](../label)
- [ap-checkbox](../checkbox)
- [ap-icon](../icon)
- [ap-error-text](../error-text)

### Graph
```mermaid
graph TD;
  ap-switch --> ap-label
  ap-switch --> ap-checkbox
  ap-switch --> ap-icon
  ap-switch --> ap-error-text
  ap-label --> ap-tooltip
  ap-label --> ap-icon
  ap-checkbox --> ap-icon
  ap-checkbox --> ap-label
  ap-checkbox --> ap-error-text
  ap-error-text --> ap-icon
  style ap-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
