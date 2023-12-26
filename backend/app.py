from flask import *
from cs50 import SQL
from aux import *
import qrcode
from flask_cors import CORS
import os

# Config 
dbinit()
app = Flask(__name__)
db = SQL("postgres://mfwmlcdp:sYg0kej_KDz1wiPDSP0Fhlft-JslSOhg@mel.db.elephantsql.com/mfwmlcdp")

CORS(app)  # Enable CORS for all routes

QR_CODE_DIR = './static'
if not os.path.exists(QR_CODE_DIR):
    os.makedirs(QR_CODE_DIR) 

@app.route("/")
def index():
    return jsonify("OK")

## API  

@app.route("/api/v1/generate_link", methods=["POST"])
def generate_link():
        start_url = request.json['start_url']
        new_id = generate_random_code()

        db.execute('INSERT INTO entries (id, start_url) VALUES (:id, :start_url)', id=new_id, start_url=start_url)

        print(f'NEW ID ' + new_id)

        return jsonify({'status': 'success', 'id': new_id })

@app.route('/api/v1/generate_qr', methods=['POST'])
def generate_qr_code():
    url = request.json['start_url']
    
    # Generate the QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="black", back_color="white")

    qr_code_filename = f'qr_code_{hash(url)}.png'
    qr_img_path = os.path.join(QR_CODE_DIR, qr_code_filename)

    qr_img.save(qr_img_path)

    # Return a JSON response with the path of the saved QR code
    response_data = {'qr_code_path': qr_img_path}
    return jsonify(response_data)

## Redirects

@app.route("/<slug>")
def redirect_url(slug):
    url = db.execute("SELECT * FROM entries WHERE id = :id", id=slug)
    return redirect(url[0]["start_url"])