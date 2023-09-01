from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# PostgreSQLデータベースへの接続情報
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# SQLAlchemyオブジェクトを作成
db = SQLAlchemy(app)

# データベースモデルを定義
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

    def __init__(self, username):
        self.username = username

# ルート定義
@app.route('/')
def get_user():
    # Userテーブルからデータを取得
    users = User.query.all()
    
    # データをJSON形式に変換して正しくエンコード
    user_list = []
    for user in users:
        user_data = {
            'id': user.id,
            'username': user.username
        }
        user_list.append(user_data)
    print(user_list)
    print(jsonify(user_list), 200, {'Content-Type': 'application/json; charset=utf-8'})
    
    return jsonify(user_list), 200, {'Content-Type': 'application/json; charset=utf-8'}



@app.route('/test')
def test():
    print('test')
    return "test"

if __name__ == '__main__':
    with app.app_context():
        # データベース初期化とアプリケーションの実行
        db.create_all()
    app.run(debug=True)
