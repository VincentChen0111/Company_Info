from flask import Flask, request, jsonify
import sqlite3
import os

app = Flask(__name__)
logo_save_folder = '.\\logos'
logo_file_types = {'.png', '.jpg', '.jpeg', '.gif', '.ico'}

def allowed_logo_file(filename):
    return '.' in filename and \
        os.path.splitext(filename)[1].lower() in logo_file_types

@app.route('/api/supplier', methods=['POST'])
def create_supplier():
    try:
         #connect to sqlite db
        sqliteConnection = sqlite3.connect('./database/Supplier.db')

        print("Connected to Supplier Database.")
        cursor = sqliteConnection.cursor()
        SQL_insert_query = """INSERT INTO supplier
                            (name, logo, address) 
                            VALUES (?, ?, ?);"""

        name = request.form['name']
        address = request.form['address']
        logo = request.files['logo']
        if logo and allowed_logo_file(logo.filename):
            cursor.execute('SELECT max(id) FROM supplier')
            autoincrement_id = cursor.fetchone()[0] + 1

            filename = str(autoincrement_id) +  os.path.splitext(logo.filename)[1].lower()
            path = os.path.join(logo_save_folder, filename)
            logo.save(path)
            cursor.execute(SQL_insert_query,(name,path,address))
            sqliteConnection.commit()
            cursor.close()

            print('Supplier created')
            return jsonify({'message': 'Supplier created'}), 201
        else:
            print('Invalid file')
            return jsonify({'message': 'Invalid file'}), 400
    except sqlite3.Error as error:
        print("Failed to insert data into sqlite table", error)
    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("The SQLite connection is closed")

if __name__ == '__main__':
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)