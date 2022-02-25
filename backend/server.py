from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app

app = Flask(__name__)

cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
Register_data = db.collection('users')

@app.route('/add', methods=['POST'])
def create():
    try:
        id = request.json['id']
        Register_data.document(id).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return e

if __name__ == "__main__":
    app.run(debug=True)