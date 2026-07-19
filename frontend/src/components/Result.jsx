// Composant Result qui affiche le résultat de l'analyse
function Result({ resultat }) {
  return (
    <div className="resultat">
      <h2>Résultat</h2>

      {resultat ? (
        <p>{JSON.stringify(resultat)}</p>
      ) : (
        <p>Aucun résultat pour le moment</p>
      )}
    </div>
  );
}

export default Result;