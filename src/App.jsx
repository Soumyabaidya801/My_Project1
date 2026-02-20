import Section1 from "./component/Section01/Section1"


const App = () => {
  return (
    <div className="relative">
        <div 
          className='fixed inset-0 bg-[url("https://wallpaperaccess.com/full/3239480.jpg")] bg-cover bg-center -z-10' >
        </div>
        <div className="relative min-h-screen">    
          <Section1/>
        </div>
    </div>
  )
}

export default App