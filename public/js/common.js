const langKo = {
  "sEmptyTable":     "데이터가 없습니다",
  // "sInfo":           "_START_ - _END_ / _TOTAL_",
  "sInfo":           "전체 _TOTAL_개의 예약",
  "sInfoEmpty":      "0 - 0 / 0",
  "sInfoFiltered":   "(총 _MAX_ 개)",
  "sInfoPostFix":    "",
  "sInfoThousands":  ",",
  "sLengthMenu":     "페이지당 줄수 _MENU_",
  "sLoadingRecords": "읽는중...",
  "sProcessing":     "처리중...",
  "sSearch":         "검색:",
  "sZeroRecords":    "검색 결과가 없습니다",
  "oPaginate": {
      "sFirst":    "처음",
      "sLast":     "마지막",
      "sNext":     "다음",
      "sPrevious": "이전"
  },
  "oAria": {
      "sSortAscending":  ": 오름차순 정렬",
      "sSortDescending": ": 내림차순 정렬"
  }
};

$(function(){
  $('.date-picker').datepicker({
      calendarWeeks: false,
      todayHighlight: true,
      autoclose: true,
      format: "yyyy-mm-dd",
      language: "kr"
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

function openInsertBox() {
  $('#insertBox').show();
  $('#searchBox').hide();
}
function closeInsertBox() {
  $('#insertBox').hide();
  $('#searchBox').show();
}









$(document).ready(function() {

  $('#table1').dataTable( {
    "language": langKo,
    "ajax": '/js/arrays.json',
    "order": [[ 2, "asc" ]],
    "columnDefs": [
      { "searchable": false, "targets": [2,3,4,5,6,7,8] }
    ]
  })

  $('#table2').dataTable( {
    "language": langKo,
    "ajax": '/js/arrays.json',
    "paging": false,
    "info": false,
    "searching": false,
    "order": [[ 2, "asc" ]]
  })

  $('#group1 .nav-wrapper').hide();
  $('#group3 .nav-wrapper').hide();
  $('#left .group-title').click(function(){
    $(this).siblings('.nav-wrapper').toggle();
  });

});
