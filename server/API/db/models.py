from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel
Base = declarative_base()

class UserProfile(BaseModel):
    __tablename__ = 'user_profile'
    username : str
    email : str
    full_name : str
    biography : str
    virast_number : int
    followers : int
    following : int

class DbUser(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True,index=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)