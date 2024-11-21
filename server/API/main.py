from fastapi import FastAPI
from router import profile
from router import virast
from router import search
from router import chatting
app = FastAPI()
app.include_router(profile.router)
app.include_router(virast.router)
app.include_router(search.router)
app.include_router(chatting.router)