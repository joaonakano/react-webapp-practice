import React, { useState, useEffect} from 'react';
import Colors from './Colors';
import axios from 'axios';  // Importando a biblioteca para fazer requisições HTTP

const Home=()=>{    // Criando uma const Home que armazena uma arrow function que contém a logica de consumo de API
    const [Data, setData] = useState({  // Criando uma variável Data para armazenar informações da Compania responsável pela API
        Company: '', // Inicialmente, a variável recebe um objeto JavaScript com as chaves Company e Description
        Description: ''
    });

    const [colorsData, setColorsData] = useState([]);   // Criando uma variável colorsData para armazenar as informações das cores da API

    useEffect(()=>{ // Uso do Hook useEffect para enviar a requisição à API
        axios.get('https://reqres.in/api/unknown')  // Uso da biblioteca axios para enviar a requisição
            .then(res=>{    // Então, uma arrow function que recebe a resposta com um Objeto JSON é executada
                let companyData = res.data.support; // Armazenam-se os dados da Compania do Objeto JSON na variável companyData

                setData({Company:companyData.url, Description:companyData.text});   // Atualiza-se a variável Data com as informações da Compania: url e motto
                setColorsData(res.data.data);   // Atualiza-se a variável colorsData com um Objeto JSON Complexo que contém as cores
            })
            .catch(err=>{   // Execução de uma arrow function caso seja retornado qualquer erro apos a requisição
                console.log(err);
            })
    },[]);
    
    return(
        <>
            <h1>{Data.Company}</h1>
            <p>{Data.Description}</p>
            <Colors data={colorsData}/>
        </>
    )
}

export default Home;