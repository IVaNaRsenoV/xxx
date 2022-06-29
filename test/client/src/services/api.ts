async function api (url: string, method: string, data?: any | null, headers?: any | null) {
    try {
        const response = await fetch(url, {
            method,
            headers: headers || {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error(error)
        const xhr = new XMLHttpRequest();
        console.warn(xhr.responseText)
    }
}

export default api;