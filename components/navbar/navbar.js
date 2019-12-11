Component({
  properties: {
    list: Array,
    tabar: Number
  },
  data: {

  },
  methods: {
    toTabar(e) {
      let index = e.currentTarget.dataset.index;
      this.triggerEvent('toTabar', index);
    }
  }
})
