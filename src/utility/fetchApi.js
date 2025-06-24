export default async function fetchApi(method, path, body) {
    return (
        await fetch(
            `http://localhost:9999${path}`,
            {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        )
            .then((res) => res.json())
    )

};
