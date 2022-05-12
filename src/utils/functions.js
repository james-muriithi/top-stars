import moment from "moment";
import axios from "@/plugins/axios";

const searchEndpoint = '/search/repositories';
const perPage = 3;

const monthAgo = moment().subtract(1, 'month').format('YYYY-MM-DD')

function getCreatedQuery() {
    return `created:>${monthAgo}`
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

function formatDate(date){
    return moment(date).format("Do MMMM, YYYY");
}


export {
    fetchRepoWithMostStars,
    formatDate,
    monthAgo
}