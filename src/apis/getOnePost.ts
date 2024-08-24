
import { ENDPOINT } from "../utils/endPoinrs"
import { baseInstance, baseUrl } from "./baseUrl"

export const getPost = async (id: any) => {
    const response = await fetch(baseUrl + ENDPOINT.POST.GETPOST + '/' + id, {
        method: 'GET',
    })
    return response.json();
}; 
export async function getStaticProps({ params }:any) {
    const res = await fetch(baseUrl+ENDPOINT.POST.GETPOST + '/' + params.id);
    const post = await res.json();

    return {
        props: {
            post,
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
}

