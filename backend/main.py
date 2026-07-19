from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

// Configuration du middleware CORS pour autoriser les requêtes depuis le frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Fonction qui simule le lancement de Lighthouse pour analyser une URL
def lancer_lighthouse(url):

    return {
        "green":75,
        "accessibility":92
    }

#-----------------------------------------------------------
# Requête GET pour vérifier que l'API est opérationnelle
#-----------------------------------------------------------

# Route d'accueil qui retourne un message indiquant que l'API est opérationnelle
@app.get("/")
def accueil():
    return {
        "message": "API Broccoli opérationnelle"
    }

#-----------------------------------------------------------
# Requête POST pour analyser une URL en utilisant Lighthouse
#-----------------------------------------------------------


# Modèle de données pour la requête d'analyse, contenant l'URL à analyser
class AnalyzeRequest(BaseModel):
    url: str

# Route POST qui reçoit une URL et retourne le résultat de l'analyse
@app.post("/analyze")
def analyze(data: AnalyzeRequest):

    resultat = lancer_lighthouse(data.url)

    print("main.py : " + str(resultat))
    return resultat