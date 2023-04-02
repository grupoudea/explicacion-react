import { useEffect, useState } from "react"


export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const increase = () => {
    setCounter(counter + 1);
  }

  const decrease = () => {
    setCounter(counter - 1);
  }

  // cada que counter cambie se ejecuta la función 
  useEffect(()=> {
    if(counter < 5) {
      setMessage('Sin alerta');
    } else if (counter >= 5 && counter < 10) {
      setMessage('Alerta, el valor está incrementando')
    } else {
      setMessage('Alerta, el valor es demasiado grande');
    }
  }, [counter])

  return (
    <div className='flex flex-col justify-center items-center w-full p-10'>
      <span>Contador: {counter}</span> 
      <div className='flex gap-4'>
        <button
        onClick={decrease} 
        className='bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-700'>Reducir</button>
        <button 
        onClick={increase}
        className='bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-700'>Incrementar</button>

      </div>
      {counter < 5 &&(<span className='text-green-500'>{message}</span>)}
      {counter >= 5 && counter < 10 &&(<span className='text-yellow-500'>{message}</span>)}
      {counter >= 10 &&(<span className='text-red-600'>{message}</span>)}
    </div>
  )

}
