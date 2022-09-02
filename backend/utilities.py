from venv import create
import firebase_admin, os
import pandas as pd
from firebase_admin import auth
from firebase_admin import credentials
from firebase_admin import firestore
from dotenv import load_dotenv

load_dotenv()       # load environment variables

credential = os.getenv('CERT_PATH')

def create_default_users(names):
    for i in range(len(names)):
        email_str = names.iloc[i]['email']
        name = names.iloc[i]['firstname']
        user = auth.create_user(
            email=email_str,
            email_verified=False,
            password='Password123@',
            display_name=name,
            disabled=False
        )

def create_modules(modules):
    indexes = ['10110', '10120', '10130', '10141', '10155']
    for i in range(len(modules)):
        module_dict = {
            'Module Code': modules.iloc[i]['Module Code'],
            "Description": modules.iloc[i]['Description'],
            "Module Name": modules.iloc[i]['Module Name'],
            "Index": indexes
        }
        db.collection("Module").add(module_dict)

def create_forum(data):
    for i in range(len(data)):
        tmp_dict = {
            "Comments": data.iloc[i]['Comment'],
            "Date": data.iloc[i]['Date'],
            "Module Code": data.iloc[i]['Module Code'],
            'Name of User': data.iloc[i]['User']
        }
        db.collection('Forum').add(tmp_dict)
    

if __name__ == "__main__":
    cred = credentials.Certificate(credential)
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    # path_to_all_names = os.getenv('NAME_PATH')
    # all_names = pd.read_csv(path_to_all_names)
    # create_default_users(all_names)

    path_to_modules = os.getenv('MOD_PATH')
    modules = pd.read_excel(path_to_modules)
    create_modules(modules)
