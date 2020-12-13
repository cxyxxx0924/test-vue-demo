<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Validator from 'async-validator'
  export default {
    inject:['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        error: ''
      }
    },
    mounted () {
      this.$on('validate', () => {this.validate()});
    },
    methods: {
      validate() {
        // console.log('this.prop', this.prop)
        console.log('rules', JSON.stringify(this.form.rules[this.prop]) )
        console.log(this.form.model[this.prop])

        const rules = this.form.rules[this.prop];
        const value = this.form.model[this.prop];
        const validator = new Validator({[this.prop]: rules});

        return validator.validate({[this.prop]: value}, errors => {
          if(errors) {
            this.error = errors[0].message;
          } else {
            this.error = ""
          }
        });

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>