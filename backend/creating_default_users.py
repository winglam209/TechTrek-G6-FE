import firebase_admin, os
import pandas as pd
from firebase_admin import auth
from firebase_admin import credentials
from dotenv import load_dotenv

load_dotenv()       # load environment variables

credential = os.getenv('CERT_PATH')
cred = credentials.Certificate(credential)
firebase_admin.initialize_app(cred)

names = pd.read_csv("./env/names.csv")

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
