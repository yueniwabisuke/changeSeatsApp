{
  const nameList = localStorage.getItem("nameList");
  const sexList = localStorage.getItem("sexList");

  //配列にする
  const nameListArray = String(nameList).split(',')
  const sexListArray = String(sexList).split(',')

  const middle_index = Math.ceil(nameListArray.length/2);
  nameListArray.forEach((name, index) => {
    if (index < middle_index){
      document.write('<div class="draggable box" style="left:40px; top:' + String((index) * 100) + 'px;">'+name+'</div>');
      document.write('<div class="snaptarget box" style="left:40px; top:' + String((index) * 100) + 'px;"></div>');
    }else{
      document.write('<div class="draggable box" style="left:380px; top:' + String((index-middle_index) * 100) + 'px;">'+name+'</div>');
      document.write('<div class="snaptarget box" style="left:380px; top:' + String((index-middle_index) * 100) + 'px;"></div>');
    }
  });
  const field = document.getElementsByClassName("field");
  field[field.length-1].style.height = String(middle_index*100-20)+"px";  // 高さを指定
}