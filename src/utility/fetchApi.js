export default async function fetchApi(method, path, body, headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', }) {
    headers['key'] = "asdf"

    return (
        await fetch(
            `http://localhost:9999${path}`,
            {
                method: method,
                headers: headers,
                body: body
            }
        )
            .then((res) => res.json())
    )

};
