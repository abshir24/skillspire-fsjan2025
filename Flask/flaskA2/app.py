from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def printInfo():
    first_name = "Test"
    last_name="Test_Last"
    food = "food"
    vacation_destination = "Island"
    return render_template('info.html', first_name = first_name, last_name = last_name, food=food, vacation_destination= vacation_destination)

if __name__ == "__main__":
    app.run()