export default async function fetchApi(method, path, body, headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', }) {
    headers['key'] = "asdf"

    JSON.parse
    return (
        await fetch(
            `http://${location.hostname}:9999${path}`,
            // `http://kiatpaisan.trueddns.com:33345${path}`,
            {
                method: method,
                headers: headers,
                body: body,
                credentials: "include"
            }
        )
            .then((res) => res.json())
    )

};
