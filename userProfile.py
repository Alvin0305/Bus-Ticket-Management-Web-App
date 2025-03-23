from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database configuration
db_config = {
    'user': 'root',
    'password': 'mysql4me@2025',
    'host': 'localhost',
    'database': 'BusBooking',
    'raise_on_warnings': True
}

def get_db_connection():
    try:
        connection = mysql.connector.connect(**db_config)
        return connection
    except Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        return None

# Existing routes (login, register) would remain here

@app.route('/api/update-profile', methods=['PUT'])
def update_profile():
    data = request.get_json()
    user_id = data.get('userId')
    name = data.get('name')
    dob = data.get('dob')
    gender = data.get('gender')
    email = data.get('email')
    phone = data.get('phone')
    password = data.get('password')
    
    connection = get_db_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed"}), 500
    
    cursor = connection.cursor()
    try:
        # Check if email already exists for another user
        cursor.execute("SELECT * FROM User WHERE email = %s AND id != %s", (email, user_id))
        if cursor.fetchone():
            return jsonify({"error": "Email already in use by another account"}), 400
        
        # Update user details
        update_query = """
        UPDATE User 
        SET name = %s, DOB = %s, gender = %s, email = %s, phone = %s, password = %s
        WHERE id = %s
        """
        cursor.execute(update_query, (name, dob, gender, email, phone, password, user_id))
        connection.commit()
        
        # Fetch updated user data
        cursor.execute("SELECT * FROM User WHERE id = %s", (user_id,))
        updated_user = cursor.fetchone()
        
        if updated_user:
            # Convert to dictionary for JSON response
            columns = [col[0] for col in cursor.description]
            user_dict = {columns[i]: updated_user[i] for i in range(len(columns))}
            return jsonify({"message": "Profile updated successfully", "user": user_dict}), 200
        else:
            return jsonify({"error": "User not found after update"}), 404
            
    except Error as e:
        print(f"Error executing query: {e}")
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/api/delete-profile', methods=['DELETE'])
def delete_profile():
    data = request.get_json()
    user_id = data.get('userId')
    
    connection = get_db_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed"}), 500
    
    cursor = connection.cursor()
    try:
        # First check if user exists
        cursor.execute("SELECT * FROM User WHERE id = %s", (user_id,))
        if not cursor.fetchone():
            return jsonify({"error": "User not found"}), 404
        
        # Delete user
        delete_query = "DELETE FROM User WHERE id = %s"
        cursor.execute(delete_query, (user_id,))
        connection.commit()
        
        if cursor.rowcount > 0:
            return jsonify({"message": "Account deleted successfully"}), 200
        else:
            return jsonify({"error": "Failed to delete account"}), 500
            
    except Error as e:
        print(f"Error executing query: {e}")
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
    finally:
        cursor.close()
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)