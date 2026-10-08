import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [condicional, setCond] = useState('Par')
  const [alertBol, setAlert] = useState(false)
  const negativo = () => { return (count % 2) == 0 ? true : false }
  function calculo(value) {
    if (value === 'somar') {
      setCount(count + 1)
      setCond(imparPar(negativo()))
    }
    else if (value === 'subtrair') {
      if (count > 0) {
        setCount(count + -1)
        setCond(imparPar(negativo()))
      }
      else {
        return setAlert(true)
      }
    }
    else {
      setCount(count + +3)
      setCond(imparPar(negativo()))
    }
    setAlert(false)
  }
  function limpar() {
    setCount(0)
    setCond(imparPar(negativo()))
  }
  function imparPar(value) {
    if (value) {
      return 'Impar';
    }
    return 'Par';
  }
  return (
    <main className='flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-sky-50 to-emerald-100 p-4'>
      <div className='flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200'>
        <h1 className='text-sm font-semibold uppercase tracking-widest text-gray-500'>Contador</h1>
        <div className='flex w-full gap-3'>
          <input
            type="text"
            readOnly
            value={count}
            className='w-2/3 rounded-xl bg-gray-100 py-4 text-center text-5xl font-bold text-gray-900 outline-none'
          />
          <input
            type="text"
            readOnly
            value={condicional}
            className='w-1/3 rounded-xl bg-violet-100 py-4 text-center text-xl font-semibold text-violet-700 outline-none'
          />
        </div>
        <div className='grid w-full grid-cols-3 gap-3'>
          <button
            onClick={() => calculo('subtrair')}
            className='cursor-pointer rounded-xl bg-rose-500 py-3 text-lg font-semibold text-white transition hover:bg-rose-600 active:scale-95'
          >
            -1
          </button>
          <button
            onClick={() => calculo('somar')}
            className='cursor-pointer rounded-xl bg-emerald-500 py-3 text-lg font-semibold text-white transition hover:bg-emerald-600 active:scale-95'
          >
            +1
          </button>
          <button
            onClick={() => calculo('somar3')}
            className='cursor-pointer rounded-xl bg-sky-500 py-3 text-lg font-semibold text-white transition hover:bg-sky-600 active:scale-95'
          >
            +3
          </button>
        </div>
        <button
          onClick={limpar}
          className='cursor-pointer w-full rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-95'
        >
          Zerar
        </button>
        {alertBol && (
          <span className='w-full rounded-lg bg-amber-100 px-4 py-2 text-center text-sm text-amber-800'>
            Não é possivel subtrair pois o valor já está zerado.
          </span>
        )}
      </div>
    </main>
  )
}

export default App
