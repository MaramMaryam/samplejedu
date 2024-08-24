
import { ENDPOINT } from "../utils/endPoinrs"
import { baseInstance, baseUrl } from "./baseUrl"

// export const getPosts = async () => {
//     const response = await fetch(baseUrl + ENDPOINT.POST.GETPOST, {
//         method: 'GET',
//     })
//     return response.json();
// };
export async function getStaticProps() {
    const res = await fetch(baseUrl + ENDPOINT.POST.GETPOST, {
        method: 'GET',
    });
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}


export const getPost = async (id: any) => {
    const response = await fetch(baseUrl + ENDPOINT.POST.GETPOST + '/' + id, {
        method: 'GET',
    })
    return response.json();
}; 


