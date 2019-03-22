{
  function replace_array(nameListArray, sexListArray) {
    const mens = nameListArray.filter(function(value,index){
      return this[index] == 'male'
    }, sexListArray);
    const womens = nameListArray.filter(function(value,index){
      return this[index] == 'female'
    }, sexListArray);

    const [l,s] = mens.length >= womens.length ? [mens, womens] : [womens, mens];
    const interval = Math.floor(l.length / s.length);
    const array = [];
    for(let i=0; i<l.length; i++){
      array.push(l[i]);
      if(i % interval == 0 && s[i]){
        array.push(s[i]);
      }
    }
    return array;
  }

  //配列にする
  const nameListArray = String(localStorage.getItem("nameList")).split(',')
  const sexListArray = String(localStorage.getItem("sexList")).split(',')
  const members = replace_array(nameListArray, sexListArray);

  const middle_index = Math.ceil(members.length/2);
  members.forEach((name, index) => {
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