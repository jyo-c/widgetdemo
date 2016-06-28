import { createWidget } from 'discourse/widgets/widget';
  export default createWidget('my-widget', {
      tagName: 'div.hello',
    html() {
      return "hello world";
    }
  });
