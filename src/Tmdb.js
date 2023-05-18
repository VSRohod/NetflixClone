// PEGANDO API KEY
const API_KEY = 'b0d5511b0f5af399fd527c039410628f';
const API_BASE = 'https://api.themoviedb.org/3';


// CRIANDO FUNCTION PARA LISTAGEM DE FILMES,SÉRIES E DOCUMENTÁRIOS
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

// CRIANDO OBJETOS
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList : async () => {
        return [
            {
                slug : 'originals',
                title : 'Originais da Netflix',
                items : await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug : 'trending',
                title : 'Recomendados para você',
                items : await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug : 'toprated',
                title : 'Em Alta',
                items : await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug : 'action',
                title : 'Ação',
                items : await basicFetch(`/discover/movie?with_genres=28&anguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug : 'comedy',
                title : 'Comédia',
                items : await basicFetch(`/discover/movie?with_genres=35&anguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug : 'horror',
                title : 'Terror',
                items : await basicFetch(`/discover/movie?with_genres=27&anguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug : 'romance',
                title : 'Romance',
                items : await basicFetch(`/discover/movie?with_genres=10749&anguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug : 'documentary',
                title : 'Documentários',
                items : await basicFetch(`/discover/movie?with_genres=99&anguage=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }
}