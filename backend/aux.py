import secrets
import string
import sqlite3

def dbinit():
    connection = sqlite3.connect('database.db')
    with open('schema.sql') as f:
        connection.executescript(f.read())
    cur = connection.cursor()
    connection.commit()
    connection.close()

def generate_random_code(length=6):
    alphanumeric_chars = string.ascii_letters + string.digits
    random_code = ''.join(secrets.choice(alphanumeric_chars) for _ in range(length))
    return random_code