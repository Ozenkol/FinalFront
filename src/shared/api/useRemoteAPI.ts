export const useRemoteAPI = () => {
    const get = (url: string) => fetch(url);
    const post = <T>(url: string, data: T) => fetch(url, { method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data) } )
    const remove = (url: string) => fetch(url, {method: 'DELETE'});

    return {
        get,
        post,
        remove
    }

}