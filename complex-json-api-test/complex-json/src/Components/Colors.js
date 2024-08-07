import React from 'react';

const Colors=({data})=>{    // Criação de um componente Colors que exibe uma cor de acordo com o DATA recebido
    return(
        <>
            {
                data && data.map(d=>{   // Se, e apenas se, DATA for válido, ocorre uma iteração nesse Objeto
                    return(
                        <div className="card" key={d.id} style={{background:d.color}}>
                            <div className="container">
                                <h4><b>{d.name}</b></h4>
                                <p>{d.color}</p>
                            </div>
                        </div>
                    )   // O retorno será um código JSX que conterá o background, o nome e o código da cor do objeto em questão
                })
            }
        </>
    )
}

export default Colors;