import './Main.css'
export default function Main() {
  const products = [
    {
      id: 1,
      name: 'Product1',
      price: 40,
      url:"https://picsum.photos/id/1/200/300"
    },
    {
      id: 2,
      name: 'Product2',
      price: 30,
      url:"https://picsum.photos/id/2/200/300"
    },
    {
      id: 3,
      name: 'Product3',
      price: 20,
      url:"https://picsum.photos/id/3/200/300"
    },
    {
      id: 4,
      name: 'Product4',
      price: 40,
      url:"https://picsum.photos/id/4/200/300"
    },
    {
      id: 5,
      name: 'Product5',
      price: 40.5,
      url:"https://picsum.photos/id/5/200/300"
    },
    {
      id: 6,
      name: 'Product6',
      price: 50,
      url:"https://picsum.photos/id/6/200/300"
    }
  ]
  return (
    <div class="app">
      {products.map((value,index)=>(
        <div class="row-app" key={index}>
          <p>{value.id}.</p>
          <p>{value.name}</p>
          <p>{value.price}</p>
          <p><button class="btn">Add to Cart</button></p>
        </div>
      ))}
    </div>
  )
}
