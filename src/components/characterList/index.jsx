'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./characterList.module.css";
import ErrorMessage from "../errorMessage";
import LoadingMessage from "../loadingMessage";

const CharacterList = () => {
    const url = "https://hp-api.onrender.com/api/characters"; // URL da API

    const [characters, setCharacters] = useState([]); // Estado para armazenar os personagens
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true); // Inicia o carregamento
                const response = await axios.get(url); // Faz a requisição para a API
                setCharacters(response.data); // Atualiza o estado com os characteres recebidos
                setLoading(false); // Finaliza o carregamento
            } catch (error) {
                console.error("Erro ao buscar characteres:", error); // Loga o erro no console
                setError(
                    "Não foi possível carregar os characteres. Tente novamente mais tarde"
                ); // Atualiza o estado de erro

                setLoading(false); // Finaliza o carregamento
            }

        }

        fetchCharacters(); // Chama a função para buscar os characteres

    }, []);

    <>
        <LoadingMessage loading={loading} />
        {/* Displays loading message if necessary */}
        <ErrorMessage error={error} /> {/* Displays error message if necessary */}
    </>


    return (
        <div className={styles.characterGrid}>
            {characters.map((character) => (
                <div key={character.id} className={styles.characterCard}>
                    <div className={styles.imageContainer}>
                        <img src={character.image} alt={character.name} className={styles.image} />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.characterTitle}>{character.name}</h2>
                        <p className={styles.director}>Casa de Hogwarts: {character.house}</p>
                        <p className={styles.actor}>Ator: {character.actor}</p>
                        <div className={styles.rating}>
                            <span className={styles[character.house?.toLowerCase()]}>{character.house}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CharacterList;