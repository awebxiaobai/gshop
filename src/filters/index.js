import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'

Vue.filter('data-format',function(value,formatStr='yyyy-mm-dd HH:mm:ss'){
    // return moment(value).format(formatStr)
    return format(value,formatStr)
})