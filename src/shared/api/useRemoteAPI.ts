export const useRemoteAPI = () => {
    const get = (url: string) => fetch(url, {method: 'GET', credentials: "include"});
    const post = <T>(url: string, data: T) => fetch(url, { method: "POST", credentials: "include", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) } )
    const remove = (url: string) => fetch(url, {method: 'DELETE',  credentials: "include"});

    return {
        get,
        post,
        remove
    }

}