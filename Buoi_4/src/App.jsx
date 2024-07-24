import ChildParentA from "./component/ChildParentA";
import ChildParentD from "./component/ChildParentD";
import ChildParentE from "./component/ChildParentE";
import ChillParentB from "./component/ChillParentB";
import ChilParentC from "./component/ChilParentC";



const App = () => {
  const name = "web39";
  const email = "haimoba@gmail.com";


  const content = {
    title:"post 1",
    auther:"nguyen van a ",
    infor :"ABCD"
  }



  return (
    <>
    {/* destructuring props*/}
    <ChildParentA data={name} email={email} age="20"/>


    {/* <ChillParentB content={content}/> */}
    <ChillParentB {...content} />

    {/* defaut props */}
    <ChilParentC couter="2001"/>

    {/* Composition */}
    <ChildParentD>
      <h1>heloo 1234</h1>
    </ChildParentD>


    {/* props type */}
    <ChildParentE a={5}/>

    
    </>

    
    
  )
}

export default App;




/*
->data: tên props do mình tự đặt 
->name:giá trị cần truyền vào component

*/ 