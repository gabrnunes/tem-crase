import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import SearchInput from '../components/searchInput'
import search from '../lib/search'

export default function Busca({ answer, related, error }) {
    const router = useRouter()
    const { s } = router.query

    if(error) {
        return (
            <div>Erro inesperado</div>
        )
    }

    if(!answer) {
        return (
        <>
        <SearchInput text={s} />

        <h1>Não encontrado</h1>

        {related && (
            <div>
                <h3>Você quis dizer:</h3>
            {related.map((rel, index) => {
                return <ul>
                <li key={`related-${index}`}>
                    <a href={rel.uid}>{rel.data.frase[0].text}</a>
                </li>
                </ul>
            })}
            </div>
        )}
        </>
        )
    }
  
    return (
        <>
        <SearchInput text={s} />
        <h1>
            {answer.frase[0].text}
        </h1>
        <div className="resposta">
            {answer.resposta.data.titulo[0].text}
        </div>
        <p>
        {answer.explicacao[0].text}
        </p>
        </>
    );
}

export async function getServerSideProps({query}) {
    const res = await search(query.s);

    if (!res.success) {
        if (res.error.code === 'not_found') {
            return {
                props: {
                    related: res.related
                }
            }
        }

        return {
            props: {
                error: true
            }
        }
    }

    return {
        props: {
            answer: res.searchResult
        }
    }
  
}