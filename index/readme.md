# Probar con index.html

```json
widgets.register([
  {
    name: 'counter-react-widget',
    vspecifier: '@beyond-js/counter-react-widget@1.0.7/counter'
  }
]);
const e = document.createElement('counter-react-widget');
$('body').append(e);
```