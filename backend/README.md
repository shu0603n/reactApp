<!-- 起動方法 -->
python app.py
<!-- requirements.txt出力 -->
pip freeze > requirements.txt
<!-- requirements.txtからインストール -->
pip install -r requirements.txt

rm -r migrations
flask db init 
flask db migrate 
flask db upgrade