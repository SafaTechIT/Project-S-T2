from fastapi import APIRouter, Query, Body, Path, HTTPException
from pydantic import BaseModel
from typing import List
router = APIRouter(
    prefix="/virast",
    tags=["virast"],
)
class Virast(BaseModel):
    Title:str
    virast:str
    virast_id:str
    tags:List[str]


@router.post("/new/{id}")
async def create_virast(virast:Virast,id: str):
    return {
        "virast":virast.virast,
        "id":id
    }

@router.post("/new/{id}/comment/{comment_id}")
async def create_comment(virast:Virast,id:int ,
                         comment_title:int=Query(None,
                                              title="title of the comment",
                                              description="some of the comment_title",
                                              alias = "commentTitle",
                                              deprecated= True
                                              ),
                         content : str=Body(...,
                            min_length=10,
                            max_length=50,
                            regex="^[a-z\s]*$"
                          ),
                         comment_id:int=Path(None,gt=5,le=10)
                    ):
    return {
        "body": virast.virast,
        "id": id,
        "comment_title": comment_title,
        "content": content,
        "comment_id":comment_id
    }


@router.delete("/delete/{virast_id}")
async def delete_virast(virast:Virast,virast_id:int):
    if virast_id == virast.virast_id:
        return {"massege":"your virast deleted"}
    else:
        raise HTTPException(status_code=404,detail="there is not such virast")
