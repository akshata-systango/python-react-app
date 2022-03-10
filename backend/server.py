from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@127.0.0.1/python_react_app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Register(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    userName = db.Column(db.String(100))
    password = db.Column(db.String(100))
    confirm_password = db.Column(db.String(100))

    def __init__(self, userName, password, confirm_password):
        self.userName = userName
        self.password = password
        self.confirm_password = confirm_password

class Register_schema(ma.Schema):
    class Meta:
        fields = ('id', 'userName', 'password', 'confirm_password')

register_schema = Register_schema()
registers_schema = Register_schema(many=True)

@app.route('/get', methods = ['GET'])
def get_users():
    all_users = Register.query.all()
    results = registers_schema.dump(all_users)
    return jsonify(results)

@app.route('/add', methods = ['POST'])
def add_user():
    userName = request.json['userName']
    password = request.json['password']
    confirm_password = request.json['confirm_password']

    register = Register(userName, password, confirm_password)
    db.session.add(register)
    db.session.commit()

    return register_schema.jsonify(register)

@app.route('/update/<id>/', methods = ['PUT'])
def update_user(id):
    user = Register.query.get(id)

    userName = request.json['userName']
    password = request.json['password']

    user.userName = userName
    user.password = password

    db.session.commit()
    return register_schema.jesonify(user)

@app.route('/delete/<id>/', methods = ['DELETE'])
def delete_user(id):
    delete_user = Register.query.get(id)
    db.session.delete(delete_user)
    db.session.commit()
    return register_schema.jesonify(delete_user)

if __name__ == "__main__":
    app.run(debug=True)