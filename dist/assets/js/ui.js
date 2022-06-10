"use strict";

var Common = {
  init: function init() {
    this.event();
  },
  event: function event() {
    $('[data-toggle="right-card"]').on('click', function (e) {
      e.preventDefault();
      $("#right-card").toggleClass("d-none");
    }); // 버튼 active

    $('[data-toggle="btn-select"]').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
    });
    $('[data-picker="date"]').datepicker({
      todayBtn: true,
      autoclose: true
    });
    $('[data-picker="month"]').datepicker({
      todayBtn: true,
      autoclose: true,
      minViewMode: 1,
      maxViewMode: 1,
      format: "yyyy-mm"
    });
    $('[data-picker="year"]').datepicker({
      todayBtn: true,
      autoclose: true,
      minViewMode: 2,
      maxViewMode: 2,
      format: 'yyyy'
    });
  }
};
var Aside = {
  init: function init() {
    this.lnb();
  },
  lnb: function lnb() {
    //페이지 타이틀명과 비교하여 활성화
    if ($("h1.visually-hidden").length > 0) {
      var title = $("h1.visually-hidden").text();
      var $active = "";

      if ($('.sidebar').length > 0) {
        $(".sidebar a").each(function () {
          if ($(this).text() === title) {
            $active = $(this);
            $active.closest("li").addClass("active");
            $active.closest("li.has-treeview").addClass("active");
          }
        });
        $active.closest("li.has-treeview").find('ul').clone().appendTo('.lnb');
      }
    }
  }
};
Common.init();
Aside.init();