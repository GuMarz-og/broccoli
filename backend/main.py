from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

def lancer_lighthouse(url):
    print(url)

    return {
        "green":75,
        "accessibility":92
    }

class AnalyseRequest(BaseModel):
    url: str

@app.post("/analyse")
def analyse(data: AnalyseRequest):

    resultat = lancer_lighthouse(data.url)

    return resultat