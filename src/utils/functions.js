import axios from "@/plugins/axios"

const searchEndpoint = '/search/repositories';
const perPage = 3;

function getCreatedQuery() {
    const today = new Date()
    today.setMonth(today.getMonth() - 1)
    const date = today.toISOString().split('T')[0]
    return `created:>${date}`
}

async function fetchRepoWithMostStars(language) {
    return axios.get(searchEndpoint, {
        params: {
            q:`language:${language} ${getCreatedQuery()}`,
            sort: 'desc',
            per_page: perPage
        }
    });
}


export {
    fetchRepoWithMostStars
}