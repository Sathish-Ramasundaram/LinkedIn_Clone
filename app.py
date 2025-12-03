from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/mynetwork")
def mynetwork():
    return render_template("mynetwork.html")

@app.route("/jobs")
def jobs():
    return render_template("jobs.html")

@app.route("/messaging")
def messaging():
    return render_template("messaging.html")

@app.route("/notifications")
def notifications():
    return render_template("notifications.html")

@app.route('/api/posts')
def get_posts():
    return jsonify([
        {
            "company": "Metra Commuter Rail",
            "followers": "30,500 followers",
            "type": "5d",
            "headline": "Hire the best sales talent to grow your business.",
            "content": "Check out our current job posting and apply at https://lnkd.in/g55DyKFt ",
            "image": "/static/img/metra.png",
            "likes": 120,
            "comments": 8
        },
                {
            "company": "Kjoller",
            "followers": "5,846 followers",
            "type": "Promoted",
            "headline": "We back ambitious companies with our own capital and a proven track record.",
            "content": "We back ambitious companies with our own capital and a proven track record. Beyond funding, we bring experience, networks and strategic support to help your business grow faster. If you’re ready to raise smart capital, we’d love to hear your case.",
            "image": "/static/img/kjoller.png",
            "likes": 95,
            "comments": 12
        }
    ])

if __name__ == '__main__':
    app.run(debug=True)
