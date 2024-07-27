

const ChildD = ({star}) => {
    console.log(star)

    const rating = {
        3:"tuyet voi",
        2:"binh thuong",
        1:"rat te"
    }
  return (
    <div>
        {rating[star]}

    </div>
  )
}

export default ChildD