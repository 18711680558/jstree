import template from './table.html'
import Vue  from 'vue'
import $ from 'jquery'

let Table=Vue.extend({
    
    template,
    
    data () {
        return {
            items : [],
            count : 0,
            //  0:男性，1：女性
            sex : 0
        }    
    },
    
    computed : {
        size () {
            return this.items.length
        },
        

    },
    
    created () {
        var self = this
        /**
        $.getJSON('/datas/user_list.json')
         .done(function(datas) {
            self.items = datas.items
            self.count = datas.count
        })
        **/
        $.ajax({
            url : '/datas/user_list.json',
            success : function(datas) {
                self.items = datas.items
                self.count = datas.count
            },
            error : function(err) {
                //  console.log(err)
            }
        })
        /**
        this.items = [{
            "name" : "ganhuan",
            "sex" : "male"
        }]
        **/
    },
    
    methods : {
        change (id) {
            this.$dispatch('lilin', 'lTodo', id)
        }
    }
    
})
export default Table