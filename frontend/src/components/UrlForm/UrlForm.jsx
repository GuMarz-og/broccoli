import { useState } from "react";

function UrlForm() {

    const [url, setUrl] = useState("");

    function handleUrlChange(event) {
        setUrl(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("URL soumise :", url);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="url">
                URL du site web
            </label>

            <input
                id = "url"
                type="url"
                value={url}
                onChange={handleUrlChange}
                placeholder="https://..."
                required
            />

            <button type="submit">
                Analyser
            </button>
        </form>
    );
}

export default UrlForm;