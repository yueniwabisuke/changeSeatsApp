$(function(){
    var idNo = 0;
    var numberOfPerson = localStorage.getItem("numberOfPerson");

    for(i=0; i<numberOfPerson; i++){
        $('div#templateForm')
            // コピー処理
            .clone(true)
            // 不要なID削除
            .removeAttr("id")
            // テキストボックスのID追加
            .find("input[name=templateTextbox]")
            .attr("id", "textbox_" + idNo)
            .end()
            // 性別のID追加
            .find("input[name=sex]")
            .attr("id", "sex_" + idNo)
            .attr("name","name_" + idNo)
            .end()
            // 追加処理
            .appendTo("div#displayArea");
        
        // ID番号加算

        idNo++;
    }
    //ひな型を非表示にする
    $('div#templateForm.NotDisp')
        .hide();
});