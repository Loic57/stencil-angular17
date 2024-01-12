# ap-modal



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default     |
| ----------- | ----------- | ----------- | --------- | ----------- |
| `color`     | `color`     |             | `string`  | `'default'` |
| `direction` | `direction` |             | `string`  | `'center'`  |
| `opened`    | `opened`    |             | `boolean` | `false`     |
| `size`      | `size`      |             | `string`  | `'default'` |


## Methods

### `closeModal() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `openModal() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [ap-button](../../foundation/button)

### Graph
```mermaid
graph TD;
  ap-modal --> ap-button
  ap-button --> ap-icon
  style ap-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
