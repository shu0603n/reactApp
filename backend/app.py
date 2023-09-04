from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
CORS(app)

# PostgreSQLデータベースへの接続情報
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@PGLOCAL:5432'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# SQLAlchemyオブジェクトを作成
db = SQLAlchemy(app)

# Flask-Migrateを設定
migrate = Migrate(app, db)

# データベースモデルを定義
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

    def __init__(self, username):
        self.username = username

# マイグレーションスクリプト内でデータをINSERTする
# def upgrade():
#     # データをINSERT
#     initial_users = [
#         User(username='test1'),
#         User(username='test2'),
#         User(username='test3')
#     ]
#     db.session.add_all(initial_users)
#     db.session.commit()

# ルート定義
@app.route('/')
def get_user():
    return 'test'
    # initial_users = [
    #     User(id=1,username='test1'),
    #     User(id=2,username='test2'),
    #     User(id=3,username='test3')
    # ]
    # db.session.add_all(initial_users)
    # db.session.commit()
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
    return jsonify(user_list)

@app.route('/test')
def test():
    print('test')
    return "test"

if __name__ == '__main__':
    app.run(debug=True)
