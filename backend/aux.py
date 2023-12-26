import secrets
import string
from cs50 import SQL

def dbinit():
    # Connect to the ElephantSQL database
    db_url = "postgresql://mfwmlcdp:sYg0kej_KDz1wiPDSP0Fhlft-JslSOhg@mel.db.elephantsql.com/mfwmlcdp"
    db = SQL(db_url)

    # Execute the schema.sql script
    with open('schema.sql') as f:
        sql_script = f.read()
        db.execute(sql_script)

    print("Database initialized")

def generate_random_code(length=6):
    alphanumeric_chars = string.ascii_letters + string.digits
    random_code = ''.join(secrets.choice(alphanumeric_chars) for _ in range(length))
    return random_code