import template from './root.html'
import Vue from 'vue'
import $ from 'jquery'
import llTable from './table.js'
import lTodo from './todo.js'
import jstree from 'jstree'
import Jstrees from './jstree.js'

let AppRoot = Vue.extend({
    template,
    
    data () {
        return {
            shown : true,
            currView : 'llTable',
            id : ""
        }    
    },
//    computed : {
//        message () {
//            return this.shown ? '隐藏' : '显示'
//        }
//    },
    
    events : {
        "lilin" : function(menu, id) {
            this.currView = menu
            this.id = id
        }
    },
    
    components : {
        llTable:llTable,
        lTodo : lTodo,
        jstrees : Jstrees
    },
    
    methods : {
        
        menu (view, event) {
            /**
            this.currView = view
            $('.list-group-item', this.$el).removeClass('active')
            $('#' + view).addClass('active')
            **/
            //console.debug(event)
          this.currView = view
          /**
          $('.list-group-item', this.$el).removeClass('active')
          $(event.srcElement).addClass('active')
          **/
        },
        
        active (menuId) {
            return menuId === this.currView ? 'active' : ''
        },
        
        toggle () {
            this.shown = !this.shown
            $('.col-xs-4:first', this.$el).css({
                color : 'blue',
                'font-size' : 22
            })
            /**
            if(this.shown) {
                this.message = '隐藏'
            } else {
                this.message = '显示'
            }
            **/
        }
        
    }
})

export default AppRoot