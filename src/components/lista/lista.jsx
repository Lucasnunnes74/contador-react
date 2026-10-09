import { useState } from 'react'

function Lista() {
    const [texto, setTexto] = useState('')
    const [lista, setLista] = useState([]);
    const [vrl, setVrl] = useState(false)

    function adicionar(texto) {
        if (texto.trim() !== '') {
            setLista([...lista, { id: crypto.randomUUID(), nome: texto, status: false }])
            setTexto('')
            setVrl(false)
        }
        else {
            setVrl(true)
        }
    }
    function removeItem(id) {
        const item = lista.find((i) => i.id === id)
        if (item.status) {
            setLista(lista.filter((i) => i.id !== id))
        }
        else {
            setLista(lista.map((i) => i.id === id ? { ...i, status: true } : i))
        }
    }

    function listaButton() {
        return lista.map((item) => (
            <li key={item.id} className='flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3'>
                <span className={`cursor-pointer ${item.status ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                    {item.nome}
                </span>
                {item.status && (
                    <button
                        className='cursor-pointer rounded-lg bg-rose-500 px-3 py-1 text-sm font-semibold text-white transition hover:bg-rose-600 active:scale-95' onClick={() => removeItem(item.id)}
                    >
                        Remover
                    </button>
                )}
                {!item.status && (
                    <button
                        className='cursor-pointer rounded-lg bg-blue-500 px-3 py-1 text-sm font-semibold text-white transition hover:bg-blue-600 active:scale-95' onClick={() => removeItem(item.id)}
                    >
                        Riscar
                    </button>
                )}
            </li>
        ))
    }

    return (
        <main className='flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-sky-50 to-emerald-100 p-4'>
            <div className='flex w-full max-w-sm flex-col gap-6 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200'>
                <h1 className='text-center text-sm font-semibold uppercase tracking-widest text-gray-500'>Lista de compras</h1>

                <div className='flex w-full gap-3'>
                    <input
                        type="text"
                        placeholder='Digite um item...'
                        className='w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-violet-400' value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                    />
                    <button
                        className='cursor-pointer rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600 active:scale-95' onClick={() => adicionar(texto)}
                    >
                        Adicionar
                    </button>
                </div>
                {vrl && (<span className='bg-black text-white p-2 rounded-lg'>Preencha um valor para adicionar</span>)}
                <span className='text-sm font-semibold text-violet-700'>{lista.length} {lista.length === 1 ? 'item' : 'itens'}</span>

                <ul className='flex flex-col gap-2'>
                    {listaButton()}


                </ul>
            </div>
        </main >
    )
}

export default Lista;
