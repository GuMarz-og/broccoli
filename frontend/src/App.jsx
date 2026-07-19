import { useState } from "react";
import { analyserSite } from "./services/api";
import UrlForm from "./components/UrlForm";
import Result from "./components/Result";
import "./index.css";

function App() {
  const [resultat, setResultat] = useState();

  // Fonction qui appelle l'API pour analyser le site web et met à jour le résultat
  async function handleAnalyse(url) {
    try {
      const data = await analyserSite(url);
      setResultat(data);
    } catch (error) {
      setResultat({
        error: error.message,
      });
    }
  }

  return (
    // Conteneur principal de l'application
    <div className="container">
      <h1>Broccoli</h1>

      <UrlForm onAnalyse={handleAnalyse} />

      <Result resultat={resultat} />
    </div>
  );
}

export default App;