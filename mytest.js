define([
  'module'
], function(module) {
  'use strict';
  var mytest = {
    mytest: function () {
      console.log('123112233');
    },
    load: function (name, req, onLoad, config) {
      this.mytest();
      onLoad('<div>888</div>');
    }, 
  };
  return mytest;
});