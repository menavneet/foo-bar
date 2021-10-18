function* generator(i) {
    yield i;
    yield i + 10;
  }

//   function generator(i) {
//     return i;
//     return i + 10;
//   }

  const gen = generator(10);
  
  console.log("A")
  console.log(gen.next().value);
  console.log("B")
  // expected output: 10
  
  console.log(gen.next().value);
  console.log("C")