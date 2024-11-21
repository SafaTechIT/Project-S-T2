from fastapi import FastAPI,APIRouter
from db.models import UserProfile
router = APIRouter()
@router.post("/profile")
async def create_profile(request:UserProfile ):
    return {
        "username": request.username,
        "name": request.full_name,
        "email": request.email,
        "following": request.following,
        "followers": request.followers,
        "biography": request.biography,
    }
