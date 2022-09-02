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
    
def create_users_collection(credentials):
    for i in range(len(credentials)):
        user = auth.get_user_by_email(credentials.iloc[i]['email'])
        user_dict = {
            'UID': user.uid,
            'Name': credentials.iloc[i]['firstname'] + " " + credentials.iloc[i]['lastname']
        }
        db.collection("Users").add(user_dict)

def create_swap(modules, names):
    from random import randint

    indexes = ['10110', '10120', '10130', '10141', '10155']
    max_mod = len(modules)
    max_name = len(names)
    max_index = len(indexes)

    for i in range(3):
        module_chosen = randint(0, max_mod-1)
        module_code = modules.iloc[module_chosen]['Module Code']
        name_selected = []
        for j in range(5):
            name = randint(0, max_name-1)
            while name in name_selected:
                name = randint(0, max_name-1)
            name_selected.append(name)
            name_str = names.iloc[name]['firstname'] + " " + names.iloc[name]['lastname']
            email_str = names.iloc[name]['email']

            index_obtained = randint(0, max_index-1)
            index_wanted = randint(0, max_index-1)

            while index_obtained == index_wanted:
                index_obtained = randint(0, max_index-1)
                index_wanted = randint(0, max_index-1)
            
            swap_dictionary = {
                "Email": email_str,
                "Name": name_str,
                "Module Code": module_code,
                "IndexObtained": indexes[index_obtained],
                "IndexWanted": indexes[index_wanted]
            }
            db.collection("Index-Swap").add(swap_dictionary)

def create_grp_finder(data):
    for i in range(len(data)):
        data_dict = {
            "Email": data.iloc[i]['email'],
            "Name": data.iloc[i]['name'],
            "Index": str(data.iloc[i]['index']),
            "Intro": data.iloc[i]['intro'],
            "Module Code": data.iloc[i]['module code']
        }
        db.collection("Group-Finder").add(data_dict)

if __name__ == "__main__":
    cred = credentials.Certificate(credential)
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    path_to_all_names = os.getenv('NAME_PATH')
    all_names = pd.read_csv(path_to_all_names)
    create_default_users(all_names)

    path_to_data = os.getenv('DATA_PATH')
    modules = pd.read_excel(path_to_data, sheet_name="Courses")
    create_modules(modules)

    forum_data = pd.read_excel(path_to_data, sheet_name="Forum")
    create_forum(forum_data)

    create_users_collection(all_names)
    create_swap(modules, all_names)
    
    group_data = pd.read_excel(path_to_data, sheet_name="GroupFinder")
    create_grp_finder(group_data)