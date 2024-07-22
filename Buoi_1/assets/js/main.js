import {add} from "./math.js";
console.log(add(2,3));


// 1.function 

const addItem = (a,b) =>{
return a + b ;
};
console.log(addItem(2,5));

// 2.destructuring array 

const array = [1,2,3,4,5,6];
const[a,b] =array;
console.log(a);
console.log(array[0]);

const user = {
    name_user:"nguyen van a ",
    age_user:"45",
    email_user:"hdgsa@gmail.com"
};

const {name_user, age_user , email_user} = user;
console.log(age_user)
console.log(user.age_user)


// 3.default parameters 

const hello = (name ="web-39")=>{
    console.log(name)
    console.log("hello 500 ae "+ name);
}
hello();

// 4. rest parameters : gộp phần tử lại 
const printArray = (...numbers)=>{
  console.log(numbers)
  let total = 0; 
  numbers.forEach((value,index) =>{
    return total += value;
  })
  return total;
}
console.log(printArray(1,2,3,4,5,6,7,8,9,11,12,13));
//5.spread Operator : chia các phần tử ra  
const arr_2 = [1,2,3,4,5];
//  ->rest parameters 
const [x,y,...numberArr] = arr_2;
console.log(x);
console.log(numberArr);

// 6.modules 





 