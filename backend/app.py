from flask import *
from cs50 import SQL
from aux import dbinit

# Config 
dbinit()
app = Flask(__name__)
db = SQL("sqlite:///file.db") 

@app.route("/")
def index():
    return jsonify("OK")