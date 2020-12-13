import Vue from 'vue'

export default function create(Component, props) {
  const vm = new Vue({
    render(h) {
      console.log(h(Component, {props}));
      return h(Component, {props});
    }
  }).$mount();
  document.body.appendChild(vm.$el);

  const comp = vm.$children[0];
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }
  return comp;
}