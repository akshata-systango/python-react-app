from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app

app = Flask(__name__)

cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
todo_ref = db.collection('users')

@app.route('/add')
def Create():
    try:
        id = request.json['id']
        todo_ref.document(id).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return e
    # return { "member" : ['member1','member2','member3']}

@app.route('/list', methods=['GET'])
def read():
    try:
        # Check if ID was passed to URL query
        todo_id = request.args.get('id')
        if todo_id:
            todo = todo_ref.document(todo_id).get()
            return jsonify(todo.to_dict()), 200
        else:
            all_todos = [doc.to_dict() for doc in todo_ref.stream()]
            return jsonify(all_todos), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route('/update', methods=['POST', 'PUT'])
def update():
    try:
        id = request.json['id']
        todo_ref.document(id).update(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

if __name__ == "__main__":
    app.run(debug=True)