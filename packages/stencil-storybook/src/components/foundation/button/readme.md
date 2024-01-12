# ap-button



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default         |
| -------------- | --------------- | ----------- | --------- | --------------- |
| `color`        | `color`         |             | `string`  | `'primary-500'` |
| `content`      | `content`       |             | `string`  | `undefined`     |
| `disabled`     | `disabled`      |             | `boolean` | `false`         |
| `icon`         | `icon`          |             | `string`  | `undefined`     |
| `iconOnly`     | `icon-only`     |             | `boolean` | `false`         |
| `iconPosition` | `icon-position` |             | `string`  | `'left'`        |
| `outlined`     | `outlined`      |             | `boolean` | `false`         |
| `size`         | `size`          |             | `string`  | `'default'`     |
| `text`         | `text`          |             | `boolean` | `false`         |
| `type`         | `type`          |             | `string`  | `'button'`      |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `clickedButton` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ap-alert](../alert)
 - [ap-modal](../../components/modal)
 - [ap-split-button](../split-button)

### Depends on

- [ap-icon](../icon)

### Graph
```mermaid
graph TD;
  ap-button --> ap-icon
  ap-alert --> ap-button
  ap-modal --> ap-button
  ap-split-button --> ap-button
  style ap-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
