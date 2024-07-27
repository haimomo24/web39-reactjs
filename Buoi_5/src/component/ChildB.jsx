const ChildB = ({ array }) => {
  console.log(array);

  const lengthArr = array.length;

  return (
    <>
      {lengthArr > 0
        ? array.map((item, index) => {
            return <h1 key={index}>{item.name}</h1>;
          })
        : "khong co du lieu"}
    </>
  );
};

export default ChildB;
