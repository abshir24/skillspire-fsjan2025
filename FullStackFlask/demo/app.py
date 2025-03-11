from flask import Flask, render_template, request, redirect

from flask_sqlalchemy import SQLAlchemy

from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///demo.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')  
def hello():
    all_users = User.query.all() #// [<User 1>, <User 2>, <User 3>]

    user = User.query.get(3) #// <User 3>

    return render_template("demo.html", all_users = all_users)

@app.route('/login', methods =["GET","POST"])
def login():
    name = request.form['name']
    email = request.form['email'] 
    password = request.form['password'] 

    user = User(name = name, email = email, password = password)

    db.session.add(user)
    db.session.commit()

    return redirect('/')

@app.route('/edit/<int:id>')
def edit(id):
    user = User.query.get(id)

    user.name = "User 1"
    user.password = "123"

    db.session.commit()

    return redirect('/')

@app.route('/delete/<int:id>')
def delete(id):
    user = User.query.get(id)

    db.session.delete(user)
    db.session.commit()

    return redirect('/')
    
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        print("Database created")
        app.run(debug=True)