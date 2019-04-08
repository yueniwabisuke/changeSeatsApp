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
    
    const [l,s, n0, n1] = mens.length >= womens.length ? [mens, womens, 0,1] : [womens, mens, 1,0];  // long,shortを決定（男女関係なく）
    const interval = Math.floor(l.length / s.length);  // longとshortのintervalを決定
    const array = [];
    const arraySex = [];

    for(let i=0; i<l.length; i++){
      array.push(l[i]);
      arraySex.push(n0);
      if(i % interval == 0 && s[i / interval]){
        array.push(s[i / interval]);
        arraySex.push(n1);
      }
    }
    return [array,arraySex]
  }

  //配列にする
  const nameListArray = String(localStorage.getItem("nameList")).split(',')
  const sexListArray = String(localStorage.getItem("sexList")).split(',')
  const [members,sex] = replace_array(nameListArray, sexListArray);
  const middle_index = Math.ceil(members.length/2);
  let sexIndex=0;
  members.forEach((name, genuine_index) => {
    let [index, left] = genuine_index < middle_index ? [genuine_index, '40px'] : [genuine_index-middle_index, '380px'];
    if(sex[sexIndex] == 0){
      document.write(`<div class="draggable box" 
                      style="left:${left};
                      top:${index*100}px;
                      background-color:deepskyblue;
                      display: flex; 
                      align-items:center; 
                      justify-content:center;
                      font-weight:bolder;" >${name}</div>`);
                      
    }else{
      document.write(`<div class="draggable box" 
                      style="left:${left}; 
                      top:${index*100}px; 
                      background-color:violet; 
                      display: flex; 
                      align-items: center; 
                      justify-content: center;
                      font-weight:bolder;" >${name}</div>`);
    }
    sexIndex = sexIndex+1;
    document.write(`<div class="snaptarget box" style="left:${left}; top:${index*100}px; "></div>`);
  });
  
  const field = document.getElementsByClassName("field");
  field[field.length-1].style.height = String(middle_index*100-20)+"px";  // 高さを指定
  
}