from flask import Flask, render_template

app = Flask(__name__)

# @app.route('/home/<number>')  #http://127.0.0.1:5000/home/20
# def hello(number):
#     return render_template("demo.html", number = number )

@app.route('/')  
def hello():
    return render_template("demo.html", number = 1)

if __name__ == "__main__":
    app.run()


