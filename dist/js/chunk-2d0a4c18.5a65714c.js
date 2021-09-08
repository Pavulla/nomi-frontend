(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4c18"],{"0893":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{md:"12"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Editable Table")])]},proxy:!0},{key:"headerAction",fn:function(){return[a("b-button",{attrs:{variant:"primary"},on:{click:t.add}},[t._v("Add New")])]},proxy:!0},{key:"body",fn:function(){return[a("b-row",[a("b-col",{staticClass:"table-responsive",attrs:{md:"12"}},[a("b-table",{attrs:{bordered:"",hover:"",items:t.rows,fields:t.columns,"foot-clone":""},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[e.item.editable?a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.name,expression:"data.item.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.item.name},on:{input:function(a){a.target.composing||t.$set(e.item,"name",a.target.value)}}}):a("span",[t._v(t._s(e.item.name))])]}},{key:"cell(position)",fn:function(e){return[e.item.editable?a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.position,expression:"data.item.position"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.item.position},on:{input:function(a){a.target.composing||t.$set(e.item,"position",a.target.value)}}}):a("span",[t._v(t._s(e.item.position))])]}},{key:"cell(office)",fn:function(e){return[e.item.editable?a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.office,expression:"data.item.office"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.item.office},on:{input:function(a){a.target.composing||t.$set(e.item,"office",a.target.value)}}}):a("span",[t._v(t._s(e.item.office))])]}},{key:"cell(age)",fn:function(e){return[e.item.editable?a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.age,expression:"data.item.age"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.item.age},on:{input:function(a){a.target.composing||t.$set(e.item,"age",a.target.value)}}}):a("span",[t._v(t._s(e.item.age))])]}},{key:"cell(start_date)",fn:function(e){return[e.item.editable?a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.start_date,expression:"data.item.start_date"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.item.start_date},on:{input:function(a){a.target.composing||t.$set(e.item,"start_date",a.target.value)}}}):a("span",[t._v(t._s(e.item.start_date))])]}},{key:"cell(salary)",fn:function(e){return[e.item.editable?a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.salary,expression:"data.item.salary"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.item.salary},on:{input:function(a){a.target.composing||t.$set(e.item,"salary",a.target.value)}}}):a("span",[t._v(t._s(e.item.salary))])]}},{key:"cell(action)",fn:function(e){return[e.item.editable?a("b-button",{attrs:{variant:" iq-bg-success mr-1 mb-1",size:"sm"},on:{click:function(a){return t.submit(e.item)}}},[t._v("Ok")]):a("b-button",{attrs:{variant:" iq-bg-success mr-1 mb-1",size:"sm"},on:{click:function(a){return t.edit(e.item)}}},[a("i",{staticClass:"ri-ball-pen-fill m-0"})]),a("b-button",{attrs:{variant:" iq-bg-danger",size:"sm"},on:{click:function(a){return t.remove(e.item)}}},[a("i",{staticClass:"ri-delete-bin-line m-0"})])]}}])})],1)],1)]},proxy:!0}])})],1)],1)},n=[],o=(a("a434"),a("bcae")),s={name:"EditableTable",mounted:function(){o["a"].index()},methods:{add:function(){var t=this.default();this.rows.push(t)},default:function(){return{id:this.rows.length,name:"",position:"",office:"",age:"",start_date:"2011/04/25",salary:"$0",editable:!1}},edit:function(t){t.editable=!0},submit:function(t){t.editable=!1},remove:function(t){var e=this.rows.indexOf(t);this.rows.splice(e,1)}},data:function(){return{columns:[{label:"Name",key:"name",class:"text-left"},{label:"Position",key:"position",class:"text-left"},{label:"Office",key:"office",class:"text-left"},{label:"Age",key:"age",class:"text-left"},{label:"Start date",key:"start_date",class:"text-left"},{label:"Salary",key:"salary",class:"text-left"},{label:"Action",key:"action",class:"text-center"}],rows:[{id:1,name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",age:"61",start_date:"2011/04/25",salary:"$320,800",editable:!1},{id:2,name:"Garrett Winters",position:"Accountant",office:"Tokyo",age:"63",start_date:"2011/06/19",salary:"$200,600",editable:!1},{id:3,name:"Ashton Cox",position:"Junior Technical Author",office:"San Francisco",age:"69",start_date:"2011/01/20",salary:"$140,500",editable:!1},{id:4,name:"Cedric Kelly",position:"Senior Javascript Developer",office:"Edinburgh",age:"42",start_date:"2011/02/02",salary:"$360,500",editable:!1},{id:5,name:"Airi Satou",position:"Accountant",office:"Tokyo",age:"39",start_date:"2011/08/11",salary:"$170,800",editable:!1},{id:1,name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",age:"61",start_date:"2011/04/25",salary:"$320,800",editable:!1},{id:5,name:"Airi Satou",position:"Accountant",office:"Tokyo",age:"39",start_date:"2011/08/11",salary:"$170,800",editable:!1},{id:1,name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",age:"61",start_date:"2011/04/25",salary:"$320,800",editable:!1}]}}},r=s,l=a("2877"),c=Object(l["a"])(r,i,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a4c18.5a65714c.js.map