import firebase_admin, os
#import pandas as pd
import json
from firebase_admin import credentials, db

cred = credentials.Certificate("path to cert")
firebase_admin.initialize_app(cred,
{'databaseURL': 'https://ase-2022-732e9-default-rtdb.asia-southeast1.firebasedatabase.app/'})

ref = db.reference("/")
course_list = ["CZ3002", "CZ4045", "CZ3006", "CZ1012", "CZ4067", "CZ3005"]
for course in course_list:
    ref = db.reference("/Forum/"+course)

    with open("forum.json", "r") as f:
            file_contents = json.load(f)
            
    #for key, value in file_contents.items():
    #    ref.push().set(value)
    ref.set(file_contents)

    ref = db.reference("/IndexSwap/"+course)
    with open("swapIndex.json", "r") as f:
        file_contents = json.load(f)
    ref.set(file_contents)

ref = db.reference("/TeamFind")
with open("findTeam.json", "r") as f:
    file_contents = json.load(f)
ref.set(file_contents)



