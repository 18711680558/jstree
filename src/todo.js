import $ from 'jquery'
import Vue from 'vue'
import template from './todo.html'

let Todo=Vue.extend({
    
    template,
    data(){
        return{
         items:[]
      }
    },
    
    computed : {
        size(){
            return this.items.length
        }
    },
    
    created (){
        var self = this
        $.ajax({
            url : '/datas/user_todo.json',
            success : function(datas) {
                self.items = datas.items
                self.count = datas.count
            }
        })
    }
    
})
export default Todo