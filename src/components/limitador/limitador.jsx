import { useState } from 'react'

function Limitador() {
    const [texto, setTexto] = useState('asdasd');
    const [vrl, setVrl] = useState();
    const [valorp, setValor] = useState();
    const valorPermitido = 100;
    function verificarTexto(texto) {
        setTexto(texto)
        if (texto.length > valorPermitido) {
            setValor(texto.length - valorPermitido)
            return setVrl(true)
        }
        return setVrl(false)
    }
    return (
        <main className='flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-sky-50 to-emerald-100 p-4'>
            <div className='flex w-full max-w-sm flex-col gap-6 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200'>
                <h1 className='text-center text-sm font-semibold uppercase tracking-widest text-gray-500'>Limitador de texto</h1>

                <div className='flex w-full gap-3'>
                    <textarea
                        type="text"
                        placeholder='Digite um item...'
                        className='w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-violet-400' value={texto}
                        onChange={(e) => verificarTexto(e.target.value)}
                    />

                </div>
                {vrl && (<span className='bg-black text-white p-2 rounded-lg'>Limite excedido Max: {valorPermitido},<br/> -{valorp} caracteres</span>)}
            </div>
        </main >
    )
}

export default Limitador;
