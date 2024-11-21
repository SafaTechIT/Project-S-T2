from typing import Optional
from fastapi import APIRouter, HTTPException
from router.virast import Virast
from db.models import UserProfile

router = APIRouter(
    prefix="/search",
)


@router.post("/")
async def search(main_tag:Virast.tags,main_username:UserProfile.username,wrote_tag: Optional[str] = None, wrote_name: Optional[str] = None):
    if main_tag == wrote_tag:
        return wrote_tag
    elif main_username == wrote_name:
        return wrote_name
    else:
        raise HTTPException(status_code=404, detail="there is no match")
