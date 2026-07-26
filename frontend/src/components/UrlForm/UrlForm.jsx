import { useState } from "react";

import "./UrlForm.css";

function UrlForm({ onAnalyze }) {

    const [url, setUrl] = useState("");

    function handleUrlChange(event) {
        setUrl(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        onAnalyze(url);
    }

    return (
        <form className = "url-form" onSubmit={handleSubmit}>
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