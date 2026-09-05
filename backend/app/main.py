from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import auth, profile, project, ai

app = FastAPI(title="ProjectForge AI Backend")

# CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(profile.router, prefix="/profile", tags=["profile"])
app.include_router(project.router, prefix="/project", tags=["project"])
app.include_router(ai.router, prefix="/ai", tags=["ai"])
