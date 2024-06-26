'use client';

import { useState } from "react";
import photoDelete from "../../actions/photo-delete";


export default  function PhotoDelete({ id }: { id: string }) {

  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      await photoDelete(id);
    }
    setLoading(false);
  }


    return (
      <>
        {loading ? (
          <button disabled  className="bg-gray-200 py-1 px-2 leading-none border border-transparent text-sm font-sans cursor-pointer rounded-md transition duration-100 focus:outline-none focus:bg-white focus:shadow focus:border-gray-600 hover:bg-white hover:shadow hover:border-gray-600">
            Deletando...
          </button>
        ) : (
          <button onClick={handleDelete} className="bg-gray-200 py-1 px-2 leading-none border border-transparent text-sm font-sans cursor-pointer rounded-md transition duration-100 focus:outline-none focus:bg-white focus:shadow focus:border-gray-600 hover:bg-white hover:shadow hover:border-gray-600">
            Deletar
          </button>
        )}
      </>
    )
  }
  