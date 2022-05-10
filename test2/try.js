consoleText(["Hello Uni", "This is Us","Do or Not","Daisy","Spring Snow"], "text", ["skyblue","red","black", "lightblue","rebeccapurple"]);
//  consoleText라는 함수에 변수를 지정
// *? consoleText라는 함수를 맨위에다 놔도 작동이 되나?

function consoleText(world, id, colors){
//  함수 consoleText선언 world, id, colors 라는 변수를 쓸거야

if(colors === undefined) colors = ["#fff"];
//  만약에 colors라는 변수의 값이 undefined면 #fff를 대입해줘
// *? 왜 if 문인데 중괄호 안써?



var visible = true; // visible 이라는 변수를 boolean 값 true를 사용

var con = document.getElementById("console"); // console이라는 아이디를 가진 무언가를 문서에서 가지고 와줘

var letterCount = 1; // 변수 letterCount를 선언한뒤 1을 대입

var x = 1; // 변수 x 를 선언하고 1을 대입 //*?같은 값을 대입해도 되나?

var waiting = false; // waiting을 선언, false를 대입 //* 변수 이름으로 추측 했을때 무언가를 기다리는 상태가 있고, 그걸 제어하기 위해 불리언 값을 줬을듯 
var target = document.getElementById(id); // 변수 target을 선언한 뒤 문서에서 id 라는 아이디를 가진 무언가를 가져옴 //*? 왜 저 값은 string 이 아니야? 그냥 id를 가진 모든 요소를 가지고 온건가?

target.setAttribute("style","color:" + colors[0]);
//  target 의 setAttribute라는 내장 함수사용
/*
  !setAttribute이라는 함수가 뭔지 찾아보기
  * Sets the value of element's first attribute
  ? 요소의 값의 첫번째 속성을 설정
  * whose qualified name is qualifiedName to value.
  ? 누구의 정의된 이름이 값에 정의된이름 인것 
  todo 뭔 소리임? 영어 어려워...

  * 요소의 속성값을 부여
  * 결론 : 요소에 style이라는 속성부여, color라는 속성에 배열 colors[0]이라는 값 더하기
*/ 

window.setInterval(function(){
  if (letterCount === 0 && waiting === false) {// 만약에 letterCount가 0 이고 그리고 waiting 이 false값을 가지면 
    waiting = true; //waiting 에 true를 대입해주고
    target.innerHTML = words[0].sudstring(0,letterCount) 
    // !이건 뭔지 모르겠다 
    


  window.setTimeout(function(){// window에 setTimeout이라는 함수 쓰기
    //todo setTimeout 뭔지 찾아보기

    var usedColor = colors.shift();
    
    /* 
      ! .shift()가 뭔지 찾기 
      * Removes the first element from an array
      ? 배열에서 첫번째 요소를 제거하고 
      * and returns it.
      ? it을 반환한다 
      todo 여기서 it 이 뭘까
      * If the array is empty, 
      ? 만약 그 배열이 비면
      * undefined is returned and the array is not modified.
      ? undefined값이 반환되고 그 배열은 수정하지 않는다
    */

    colors.push();
    /*
      ! .push() 라는 함수 찾기
      * New elements to add to the array.
      ? 새로운 요소를 배열에 추가
      * Appends new elements to the end of an array, 
      ? 새로운 요소를 배열의 끝에 추가하고
      todo 그러면 새로운 요소를 배열의 처음에 추가하는 함수도 있나? 
      * and returns the new length of the array.
      ? 그 배열의 새로운 길이 값을 반환함
    */
    
    var usedWord = words.shift();
    // ! 아나 도대체 words라는 변수를 어디서 선언했다고 이걸 자꾸 쓰냐?
    words.push(usedWord);
    //  word라는 배열에 usedWord를 추가
    x=1;
    // x에 1을 대입
    target.setAttribute("style","color:" + colors[0]);
    //target이라는 요소에 setAttribute에 style이라는 속성 부여, "color:"라는 string값에 + 배열 colors[0]값을 부여 
    letterCount += x; //! += 이라는 연산자는 어떤 연산자일까?
    // todo +=이라는 연산자 찾아보기
    waiting = false; // waiting에 false대입
  },1000) // 그걸 1000에 한번 반복해줘 // * 여기도 시간이 들어가는 걸 보니 setInterval 처럼 반복인가봄 






  }else if (letterCount === words[0].lendth+1 && waiting === false){// 위의 조건이 아닌데 letterCount가 words[0]의 길이 +1을 가지고 waiting이 false라면
    waiting = true;
    // waiting에 true대입하고
    window.setTimeout(function(){ // setTimeout 메서드래 
      //?메서드가 정확하게 뭐야? 내장함수?

      x = -1;
      // x에 -1 대입 //?음수도 대입이 되는 구나
      
      letterCount += x;
      // todo += 연산자 찾아보기
      waiting = false;
      // waiting 에 false 대입

    },1000)// 그걸 1000에 한번 반복해줘
  } else if(waiting === false ){// 그것도 아니고 그냥 waiting이 false이기만 하면

  }
}, 120);
// memo window에서 뭘 할건데 그걸 120에 한번 해줘
//* window에도 setInterval이 있구나


window.setInterval(function(){},400);
//window에서 뭘할건데 그걸 400에 한번 해줘


}
