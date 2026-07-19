const API_URL = "http://localhost:8000";


export async function analyserSite(url) {

    const response = await fetch(
        `${API_URL}/analyze`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                url: url
            })
        }
    );


    if (!response.ok) {
        throw new Error(
            "Erreur API"
        );
    }


    return response.json();
}