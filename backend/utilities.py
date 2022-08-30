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
    db = firestore.client()
    for i in range(len(modules)):
        document_ref = db.collection('Courses').document(modules.iloc[i]['Module Code'])
        document_ref.set({
            "Description": modules.iloc[i]['Description'],
            "Module Name": modules.iloc[i]['Name of Module']
        })

if __name__ == "__main__":
    cred = credentials.Certificate(credential)
    firebase_admin.initialize_app(cred)

    # path_to_all_names = os.getenv('NAME_PATH')
    # all_names = pd.read_csv(path_to_all_names)
    # create_default_users(all_names)

    path_to_modules = os.getenv('MOD_PATH')
    modules = pd.read_excel(path_to_modules)
    create_modules(modules)
