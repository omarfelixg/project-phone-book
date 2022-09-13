
export async function getList() {
    try {
        const response = await fetch('http://localhost:3010/api/contacts')
        const json = await response.json()
        return json.content
    } catch (error) {
        console.log(error)
    }
}

export async function remove(id) {
    try {
        await fetch(`http://localhost:3010/api/contact/${id}`, {
            method: 'delete'
        })
    } catch (error) {
        console.log(error)
    }
}

export async function create(data) {
    try {
        const response = await fetch('http://localhost:3010/api/contact', {
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            method: 'POST',
            body: JSON.stringify(data)
        })
        const json = await response.json()
        return json.content
    } catch (error) {
        console.log(error)
    }
}