import template from './jstree.html'
import Vue from 'vue'
import $ from 'jquery'
import jstree from 'jstree'

var Jstrees = Vue.extend({
    template,
    ready(){
        this.init()
    },
    methods:{
        init(){
           $.ajax({
               url:'/datas/list_go.json',
               success:function(datas){
                   $('#demo').jstree({
                       'core':datas,
                       'plugins':["contextmenu","dnd","search"]
                   });
                  var to = false;
                   $('#jstree_demo').keyup(function () {
                    if(to) { clearTimeout(to); }
//                    to = setTimeout(function () {
//                      var v = $('#jstree_demo').val();
//                      $('#demo').jstree(true).search(v);
//                    }, 250);
                    var v = $('#jstree_demo').val();
                        $('#demo').jstree(true).search(v);
                  });
               }
           })
        }
    }
})

export default Jstrees