# Typescript - basics
lectures from nomad-coder
learn typescript basics by implementing simple block-chain with typescript

# Nomad-Coder/Typescript로 블록체인 만들기

Today 

# Introduction and What are we building

타입스크립트란? superset of JS!

자바스크립트처럼 생겼는데, 컴파일하면 자바스크립트로 전환되는거!

### typescript 의 필요성

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e34e80e6-82a3-47a1-8c37-2ed4e8ddb7cf/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e34e80e6-82a3-47a1-8c37-2ed4e8ddb7cf/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2669be24-7514-4bb2-8562-f8a29bc5902b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2669be24-7514-4bb2-8562-f8a29bc5902b/Untitled.png)

협업 시에, 서로 예측 가능한 코드를 작성하고 디버깅을 용이하도록 하게 만들려면, typescript 가 장점을 갖는다고 본다!

# Setting Typescript Up

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03bf3f56-d3df-4d4c-b308-1d4d9ca19e26/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03bf3f56-d3df-4d4c-b308-1d4d9ca19e26/Untitled.png)

    // tsconfig.json
    {
        "compilerOptions": {
          "module": "commonjs",
          "target": "ES2015",
          "sourceMap": true
        },
        "include": ["index.ts"],
        "exclude": ["node_modules"]
      }
    // sourceMap 은 말 그대로 sourceMap 처리를 하고싶은건지 물어보는거라고함.
    // 'Generates corresponding .map file.' 이런 의미인거같은데

    // .map 파일에 대한 설명!
    // 결국, 디버깅을 위해 typescript 와 JS 를 이어주는 역할.
    A source map is basically what it says, a map from one language to another, so the debugger can run the JavaScript code but show you the line that actually generated it.
    
    For practical debugging purposes:
    
    What the source map lets you do is set a breakpoint on the TypeScript file and then debug the code. This can be done in Chrome and Firefox. Somewhat confusingly, the debugger behaviour in Chrome is that when the breakpoint is reached, the '.js' file is actually shown (stopped at the breakpoint).
    
    As of today, the Firefox debugger will display the actual TypeScript file when it breaks. See the below reference:
    
    http://www.gamefromscratch.com/post/2014/05/27/TypeScript-debugging-in-Visual-Studio-with-IE-Chrome-and-Firefox-using-Source-Maps.aspx)
    
    (this also shows how Visual Studio can be configured to create the source map)
    
    To understand how a source map works, you can read the section 'The anatomy of a source map' here:
    
    https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/
    
    followshareimprove this answer

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84cc9095-7983-4c08-b2f0-0c920b7cbdd1/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84cc9095-7983-4c08-b2f0-0c920b7cbdd1/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6eee4eda-7844-46f5-84f1-dad087750c1c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6eee4eda-7844-46f5-84f1-dad087750c1c/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7980d40-7061-45a3-a434-d1e5da354af4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7980d40-7061-45a3-a434-d1e5da354af4/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9adb51fa-92ff-4d1e-899a-a4db5e35c054/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9adb51fa-92ff-4d1e-899a-a4db5e35c054/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b555d52-a379-4427-925f-8549aa505b04/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b555d52-a379-4427-925f-8549aa505b04/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/968c6db9-8eb3-458a-a581-fa23ab790202/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/968c6db9-8eb3-458a-a581-fa23ab790202/Untitled.png)

# First steps with Typescript

typed language 의 의미!

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9fcfaa9b-f23c-46ab-a293-bc5bb4e51ef6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9fcfaa9b-f23c-46ab-a293-bc5bb4e51ef6/Untitled.png)

즉, 이 함수가 어떤 형태의 값을 뱉어낼 것이고, 이 변수는 어떤 형태의 값을 가져야만 하는지 정해놓는것!

⇒ 결국 c 나 java 처럼 좀 더 구조화된 형태로 언어를 사용할 수 있게 해준다는거네.

    const name = "Nicolas",
      age = 24,
      gender = "male";
    
    const sayHi = (name, age, gender?) => { // gender param 을 optional 로 지정해놓은것
      console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    };
    
    sayHi(name, age, gender); // 만약 여기서 gender param을 optional 로 지정 안해놓고 name, age 두 개의 인자만 입력하고 컴파일하려고하면, 오류를 내줄 것이다!
    
    export {}; // 이건 그냥 기본으로 들어가야하는걸로 생각. ( 이 파일이 모듈이 된다는걸 말하기 위함?? )

# Types in Typescript

type 을 지정하여, 코드의 예측 가능성을 높힌다고 생각하면 된다!

    "scripts": {
        "start": "tsc-watch --onSuccess \" node dist/index.js\" "
      },
    // 매번 yarn start 이런걸로 compile 하기 귀찮으니까! tsc-watch 라는 툴을 dev 로 설치하여 사용. 

# Interfaces on Typescript

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3057fb6e-262b-4c3a-ae42-f85c5b85d506/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3057fb6e-262b-4c3a-ae42-f85c5b85d506/Untitled.png)

함수에 function 통째로 넣을 수 있는 구조로 만드는 것이 이상적이잖아! 그래서 interface 라는 것을 사용.

java interface 랑 비슷하다고 생각하면 되겠지!  (struct 랑 비슷하기도 하고)

즉, Human 이라는 interface의 모양을 지정하면, 어떤 객체를 기다리고 있는 함수는 그 인터페이스의 모양에 맞는 함수인지를 확인할 수 있는거임! (함수 작성자와 사용자간 소통목적으로 만들어지는 interface!)

이 강의에서 예를 들어, 하나의 블록이 가져야 하는 값들에 대한 설명을 다 넣어놓은, 객체의 구조를 interface로 지정 가능하겠지!

# Classes on Typescript part One

interface 는 JS 로 컴파일 되지 않는다!

java 에서 class 사용하듯이 

### 객체 지향 프로그래밍의 장점

VanilaJS 를 사용하다보니 발생하던 실수들을 객체지향 프로그래밍을 활용하면 훨씬 줄일 수 있다!

***그런 의미에서 TS 는 JS 를 개체지향 언어로 바꿔주는 역할을 한다고도 볼 수 있다고 느꼈다. 즉, 실제로 정말 많은 도움이 된다! ⇒ 유용성, 필요성을 느끼는 것이 중요.***

다른 언어, 도구를 배우면서 기존에 아는 것과 비교하여 장점,단점을 깨닫는 과정의 중요성!

*typecript 를 사용하면, TS 측면에선 더 안전하지만, react,node 이런거 사용하면 class 쓰는게 더 나을거다!*

# Blockchain Creating a Block

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17d12a97-321c-4bf9-a05e-a206db86e467/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17d12a97-321c-4bf9-a05e-a206db86e467/Untitled.png)

오호... 그니까 blockchain 이라는 변수가 Block 이라는 type 의 객체만 저장하도록 지정하는것!

즉, 많은 함수와 타입이 있을 때 TS 를 사용하는 것이 큰 도움이 될 수 있다는 점을 인지!

# Creating a Block part Two,Three

TS 에서 import 하는 방법!

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1700742-3f98-41d2-8923-6901d598e323/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1700742-3f98-41d2-8923-6901d598e323/Untitled.png)

    import * as CryptoJS from 'crypto-js'
    
    const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000); // integer 라고 안 쓰고 number 라고 선언을 하네!

# Validating Block Structure ㅖㅁ

TS 자체가 이미 많은 확인과정을 제공하지만, Block 이라는 구조는 이 프로젝트 안에서 임의로 만들어서 쓰는거니까, 확인이 필요하다.

⇒ 그런의미에서 validate 함수를 사용하는 것은 좋은 습관!

    static validateStructure = (aBlock: Block): boolean =>
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";
    
    // 조건을 하나하나 && 를 이용하여 확인하는 코드가 훨씬 간결하네 (if else 를 이용하여 길게 하는 것보다)

블록을 확인하고 추가하는 과정을 세분화하여 하나하나 모듈로 만든 구조가 좋음!

(확인은 확인하는 친구가 다 끝내고, 추가하는건 추가하는 친구가 다 끝내도록 하는거)

결국, TS 의 장점은 코드를 읽기 편하고 (어떤 함수가 어떤 값을 return 하는지 다 정해져있으니까) , 관리하기도 편함!

(그냥 JS 로 하면 문제가 있지)