// #3 Types in Typescript

// // alert('hello')
// console.log('hello')

// const name = "Nicolas",
//   age = 24,
//   gender = "male";

// const sayHi = (name, age, gender?) => { // gender param 을 optional 로 지정해놓은것
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// };

// sayHi(name, age, gender); // 만약 여기서 gender param을 optional 로 지정 안해놓고 name, age 두 개의 인자만 입력하고 컴파일하려고하면, 오류를 내줄 것이다!

// export {}; // 이건 그냥 기본으로 들어가야하는걸로 생각. ( 이 파일이 모듈이 된다는걸 말하기 위함?? )


// #4 Types in Typescript

// const sayHi = (name: string, age: number, gender: string): string => {
//     return `Hello ${name}, you are ${age}, you are a ${gender}!`;
//   };
  
//   console.log(sayHi("JY", 24, "male"));
  
//   export {};


// #5 Interfaces on Typescript

// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: "JY",
//   age: 25,
//   gender: "male"
// };

// const sayHi = (person: Human): string => {
//   return `Hello ${person.name}, you are ${person.age}, you are a ${
//     person.gender
//   }!`;
// };

// console.log(sayHi(person));

//   #6 Classes on Typescript part One

// class Human { // 그냥 JS 에서는 class 의 각 속성에 대해서 지정해놓지 않아도 된다! 그리고 permission 도 (public, private)
//   public name: string;
//   private age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const lynn = new Human("Lynn", 18, "female");

// const sayHi = (person: Human): string => {
//   return `Hello ${person.name}, you are ${person.age}, you are a ${
//     person.gender
//   }!`;
// };
  
//   console.log(sayHi(lynn));
  
//   export {};

// #7 Blockchain Creating a Block
import * as CryptoJS from 'crypto-js'

class Block {
  // public index: number;
  // public hash: string;
  // public previousHash: string;
  // public data: string;
  // public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}
const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456); 
// genesisBlock 이 Block type 임을 genesisBlock:Block 이렇게 해서 알린다.

// let blockchain: [Block] = [genesisBlock];
let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000); // integer 라고 안 쓰고 number 라고 선언을 하네!

const createNewBlock = (data: string): Block => {
  // const previosBlock: Block = getLatestBlock();
  // const newIndex: number = previosBlock.index + 1;

  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;

  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );

  addBlock(newBlock);
  
  return newBlock;
};

// console.log(blockchain);
// console.log(createNewBlock("hello"));
// console.log(createNewBlock("bye bye"));

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );
  
const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export {};

// #8 Creating a Block part Two
