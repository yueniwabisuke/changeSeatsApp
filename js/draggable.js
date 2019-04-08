$(function () {
	// ドラッグ
	$('.draggable').draggable({
		containment: "parent", //ドラッグの範囲を制限
		snap: ".snaptarget", /* ターゲットにスナップする */
		snapMode: "inner",   /* 内側にスナップする */
	});

$(".snaptarget").droppable({
    drop: function(event, ui) {
     var $srcObj = $(ui.draggable[0]);
     $srcObj.offset($(this).offset());
     return false;
    }
  });
});