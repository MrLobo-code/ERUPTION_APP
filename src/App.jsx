import Carousel from "./common_user/Carousel"
import Card from "./common_user/Card"

function App() {

  return (
    <>
      <Carousel />
      <div className="flex justify-center mb-8">
        <div className="p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
