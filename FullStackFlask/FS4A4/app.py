from flask import Flask,request, render_template,redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

@app.route('/users')
def users():
    users = User.query.all() #[]
    return render_template('users.html', users=users)

@app.route('/users/new')
def new_user():
    return render_template('new_user.html')

@app.route('/users/create', methods=['POST'])

def create_user():
    name = request.form['name']
    email = request.form['email']   

    user = User(name=name, email=email)

    try:
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        print("Error:", e)

    return redirect('/users')

@app.route('/users/<int:id>')
def show_user(id):
    user = User.query.get(id)
    return render_template('show_user.html', user=user )

@app.route('/users/<int:id>/edit')
def edit_user(id):
    return render_template('edit_user.html', id=id)

@app.route('/users/<int:id>/update', methods=['POST'])
def update_user(id):
    name=request.form['name']
    email= request.form['email']

    user = User.query.get(id)

    user.name = name
    user.email = email

    try:
        db.session.commit()
    except Exception as e:
        print("Error:", e)

    return redirect('/users')

@app.route('/users/<int:id>/delete')
def delete_user(id):
    user = User.query.get(id)
    
    try:
        db.session.delete(user)
        db.session.commit()
    except Exception as e:
        print("Error:", e)

    return redirect('/users')


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        app.run(debug = True, port=5000)