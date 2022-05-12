consoleText(["Hello Uni", "This is Us","Do or Not","Daisy","Spring Snow"], "text", ["skyblue","red","black", "lightblue","rebeccapurple"]);

//   consoleText라는 함수에 변수를 지정
// *? consoleText라는 함수를 맨위에다 놔도 작동이 되나?

// todo : 함수는 1급 객체(1급 시민)라고 하는데, 선언이 되어있다면 위에서도 언제든지 꺼내서 사용 할 수 있습니다. 끌어올려지는 것을 hoisting(호이스팅) 이라고 부르며, 일반적으로는 되도록 선언된 다음에 호출하는 편입니다.

function consoleText(world, id, colors){
//  함수 consoleText선언 world, id, colors 라는 변수를 쓸거야

// todo : 변수 x 매개변수 o 


if(colors === undefined) colors = ["#fff"];
//  만약에 colors라는 변수의 값이 undefined면 #fff를 대입해줘
// *? 왜 if 문인데 중괄호 안써?

// todo: 중괄호를 안쓰는 행위는, 간단한 조건이라면 굳이 중괄호 안쓰겠다는 취지인데, 가독성 문제째문에 되도록 지양하는 것이 개발자들 사이에서의 국룰입니다. 


var visible = true; // visible 이라는 변수를 boolean 값 true를 사용

var con = document.getElementById("console"); // console이라는 아이디를 가진 무언가를 문서에서 가지고 와줘

var letterCount = 1; // 변수 letterCount를 선언한뒤 1을 대입

var x = 1; // 변수 x 를 선언하고 1을 대입 //*?같은 값을 대입해도 되나?

var waiting = false; // waiting을 선언, false를 대입 //* 변수 이름으로 추측 했을때 무언가를 기다리는 상태가 있고, 그걸 제어하기 위해 불리언 값을 줬을듯 
var target = document.getElementById(id); // 변수 target을 선언한 뒤 문서에서 id 라는 아이디를 가진 무언가를 가져옴 //*? 왜 저 값은 string 이 아니야? 그냥 id를 가진 모든 요소를 가지고 온건가?

// todo : id는 매개변수로 만든 이름입니다. 우리가 사용하는 id와는 전혀 상관없으나, id 값을 가져오겠다는 매개변수의 의도를 직관적으로 볼 수 있습니다. 결과적으로는 "어떤아이디" 가 들어가는 구조입니다. 

target.setAttribute("style","color:" + colors[0]);
//  target 의 setAttribute라는 내장 함수사용
/*
  !setAttribute이라는 함수가 뭔지 찾아보기
  * Sets the value of element's first attribute
  ? 요소의 값의 첫번째 속성을 설정
 
  todo : 첫번째 속성값을 설정 (style이라는 attribute node)
 
  * whose qualified name is qualifiedName to value.
  ? 누구의 정의된 이름이 값에 정의된이름 인것 
  todo 뭔 소리임? 영어 어려워...

  todo : 개발한 사람이 작성해놓은 팁으로 보이는데,
  todo : "값이름은 알아차릴 수 있도록 작성하는 것이 좋다"




  * 요소의 속성값을 부여
  * 결론 : 요소에 style이라는 속성부여, color라는 속성에 배열 colors[0]이라는 값 더하기
*/ 

window.setInterval(function(){
  if (letterCount === 0 && waiting === false) {// 만약에 letterCount가 0 이고 그리고 waiting 이 false값을 가지면 
    waiting = true; //waiting 에 true를 대입해주고
    target.innerHTML = words[0].sudstring(0,letterCount) 
    // !이건 뭔지 모르겠다 
    
    // todo : 위의 메서드는 오타
    // todo : substring() <-- 문자열 관련 메서드 / 문자열을 다루는 함수


  window.setTimeout(function(){// window에 setTimeout이라는 함수 쓰기
    //todo setTimeout 뭔지 찾아보기

    // todo : setTimeout() 동작 시기를 지정하는 함수

    var usedColor = colors.shift();
    
    /* 
      ! .shift()가 뭔지 찾기 
      * Removes the first element from an array
      ? 배열에서 첫번째 요소를 제거하고 
      * and returns it.
      ? it을 반환한다 
      todo 여기서 it 이 뭘까 (배열인듯)

      todo : shift() 메서드로 편집된 새로운 배열이 반환되었다는 뜻


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

    // ? letterCount = letterCount + x; <-- 이 방식을 합쳐 놓은 것이며, 복합대입연산자 라고 부름

    // memo 더하기 연산자래 
    //! += 와 =+ 가 다름
    // todo +=이라는 연산자 찾아보기
    waiting = false; // waiting에 false대입
  },1000) // 그걸 1000에 한번 반복해줘 // * 여기도 시간이 들어가는 걸 보니 setInterval 처럼 반복인가봄 

  // todo : setInterval()의 두번째 인수는 실행간격, setTimeout() 두번째 인수는 시작시기, 즉 위의 1000은 1초 뒤 실행 이라는 뜻






  }else if (letterCount === words[0].lendth+1 && waiting === false){// 위의 조건이 아닌데 letterCount가 words[0]의 길이 +1을 가지고 waiting이 false라면
    waiting = true;
    // waiting에 true대입하고
    window.setTimeout(function(){ // setTimeout 메서드래 
      //?메서드가 정확하게 뭐야? 내장함수?

      // todo : 객체속의 함수 = 메서드, window라는 객체의 함수 setTimeout() = 메서드 / 

      x = -1;
      // x에 -1 대입 // memo 음수도 대입이 되는 구나
      
      letterCount += x;
      // todo += 연산자 찾아보기
      waiting = false;
      // waiting 에 false 대입

    },1000)// 그걸 1000에 한번 반복해줘
  } else if(waiting === false ){// 그것도 아니고 그냥 waiting이 false이기만 하면
    target.innerHTML = words[0].substring(0, letterCount)
    /* 
    *The zero-based index number indicating the beginning of the substring.
    ^ 부분 문자열(substring)의 시작을 알리는 제로베이스 인덱스

    *Returns the substring at the specified location within a String object.
    ^ subdtring을 특정 위치에 반환 (문자열 객체 이내에)
    */
    letterCount += x;
    // letterCount 에 += x를 해줘 // memo 더하기 할당이래
  }
}, 120);
//* window에서 뭘 할건데 그걸 120에 한번 해줘
//  memo window에도 setInterval이 있구나


window.setInterval(function(){

  if(visible === true){
    // 만약에 visible값이 true이면
    con.className = "console-underscore hidden";
    // con의 객체 중 className 에 "console-underscore hidden"을 대입 해줘
    //? console-underscore hidden은 무엇일까?
    // todo : 대입되는 속성이 className 이므로, 문자열인 console-underscore는 제작자가 지은 이름임을 추론할 수 있음
    visible = false;
    // visible의 값에 false를 대입해줘
  }else{// 아니면
    con.className = "console-underscore"
    // con의 객체중 className 에 "console-underName"을 대입
    visible=true;
    // visible에 true를 대입
  }
  // memo 이거 똑딱이다 반복되겠다

},400);
// *window에서 뭘할건데 그걸 400에 한번 해줘


}
