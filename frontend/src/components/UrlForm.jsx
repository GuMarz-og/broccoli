import { useState } from "react";

// Composant UrlForm qui permet à l'utilisateur d'entrer une URL et de lancer l'analyse
function UrlForm({ onAnalyse }) {
  const [url, setUrl] = useState("");

  // Fonction qui gère le clic sur le bouton d'analyse
  // Vérifie que l'URL n'est pas vide avant d'appeler la fonction onAnalyse 
  function handleClick() {
    if (!url.trim()) {
      alert("Veuillez entrer une URL");
      return;
    }

    onAnalyse(url);
  }

  return (
    // Conteneur du formulaire
    <div className="formulaire">
      <label>URL du site web :</label>

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleClick}>
        Analyser
      </button>
    </div>
  );
}

export default UrlForm;