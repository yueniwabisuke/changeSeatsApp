{
  function shuffle(array){
    let n = array.length, t, i;
    while(n){
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
  }
  
  function replace_array(nameListArray, sexListArray) {
    const mens = nameListArray.filter(function(value,index){
      return this[index] == 'male'
    }, sexListArray);
    const womens = nameListArray.filter(function(value,index){
      return this[index] == 'female'
    }, sexListArray);
    shuffle(mens);
    shuffle(womens);

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
  members.forEach((name, genuine_index) => {
    let [index, left] = genuine_index < middle_index ? [genuine_index, '40px'] : [genuine_index-middle_index, '380px'];
    document.write(`<div class="draggable box" style="left:${left}; top:${index*100}px;">${name}</div>`);
    document.write(`<div class="snaptarget box" style="left:${left}; top:${index*100}px;"></div>`);
  });
  
  const field = document.getElementsByClassName("field");
  field[field.length-1].style.height = String(middle_index*100-20)+"px";  // 高さを指定
}