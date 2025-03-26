from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
from datetime import datetime

app = Flask(__name__)

# Enhanced CORS configuration
# CORS(app, resources={
#     r"/api/*": {
#         "origins": ["http://localhost:5173"],
#         "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
#         "allow_headers": ["Content-Type", "Authorization"],
#         "supports_credentials": True
#     }
# })
CORS(app)

# Database configuration
db_config = {
    'user': 'root',
    'password': 'mysql4me@2025',
    'host': 'localhost',
    'database': 'BusBooking1',
    'raise_on_warnings': True
}

def get_db_connection():
    try:
        connection = mysql.connector.connect(**db_config)
        return connection
    except Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        return None

# def get_db_connection():
#     try:
#         connection = mysql.connector.connect(**db_config)
#         return connection
#     except Error as e:
#         print(f"Error connecting to MariaDB Platform: {e}")
#         return None

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    connection = get_db_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = connection.cursor(dictionary=True)
    try:
        # Fetch user by email
        cursor.execute("SELECT * FROM User WHERE email = %s AND password = %s", (email, password))
        user = cursor.fetchone()

        if user:
            # Compare hashed password
            # if bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
                # Remove password from the response for security
                # user.pop('password', None)
            return jsonify({"message": "Login successful", "user": user}), 200
            # else:
            #     return jsonify({"error": "Invalid credentials"}), 401
        else:
            return jsonify({"error": "User not found"}), 404
    except Error as e:
        print(f"Error executing query: {e}")
        return jsonify({"error": "An error occurred"}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirmPassword')

    if password != confirm_password:
        return jsonify({"error": "Passwords do not match"}), 400

    connection = get_db_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = connection.cursor()
    try:
        # Check if email already exists
        cursor.execute("SELECT * FROM User WHERE email = %s", (email,))
        if cursor.fetchone():
            return jsonify({"error": "Email already exists"}), 200

        # Insert new user
        insert_query = """
        INSERT INTO User (name, email, password)
        VALUES (%s, %s, %s)
        """
        cursor.execute(insert_query, (name, email, password))
        connection.commit()

        return jsonify({"message": "Registration successful"}), 201
    except Error as e:
        print(f"Error executing query: {e}")
        return jsonify({"error": "An error occurred during registration"}), 500
    finally:
        cursor.close()
        connection.close()

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
        # cursor.execute("SELECT * FROM User WHERE email = %s", (email,))
        # if cursor.fetchone():
        #     return jsonify({"error": "Email already in use by another account"}), 400
        
        # Update user details
        update_query = """
        UPDATE User 
        SET name = %s, dob = %s, gender = %s, phone = %s, password = %s
        WHERE email = %s
        """
        cursor.execute(update_query, (name, dob, gender, phone, password, email))
        connection.commit()
        
        # Fetch updated user data
        cursor.execute("SELECT * FROM User WHERE email = %s", (email,))
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


@app.route('/api/tickets/count', methods=['GET'])
def get_tickets_count():
    connection = get_db_connection()
    if not connection:
        return jsonify({'error': 'Database connection failed'}), 500
        
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT COUNT(*) as count FROM Ticket")
        result = cursor.fetchone()
        return jsonify({'count': result['count']})
    except Error as e:
        print(f"Database error: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/api/transactions/revenue', methods=['GET'])
def get_total_revenue():
    connection = get_db_connection()
    if not connection:
        return jsonify({'error': 'Database connection failed'}), 500
        
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT SUM(amount) as revenue FROM Transaction")
        result = cursor.fetchone()
        return jsonify({'revenue': float(result['revenue']) if result['revenue'] else 0})
    except Error as e:
        print(f"Database error: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/api/users/count', methods=['GET'])
def get_users_count():
    connection = get_db_connection()
    if not connection:
        return jsonify({'error': 'Database connection failed'}), 500
        
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT COUNT(*) as count FROM User")
        result = cursor.fetchone()
        return jsonify({'count': result['count']})
    except Error as e:
        print(f"Database error: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/api/transactions/yearly', methods=['GET'])
def get_yearly_revenue_profit():
    connection = get_db_connection()
    if not connection:
        return jsonify({'error': 'Database connection failed'}), 500
        
    cursor = connection.cursor(dictionary=True)
    try:
        query = """
        SELECT 
            YEAR(transaction_time) as year,
            SUM(amount) as revenue,
            SUM(amount) * 0.01 as profit
        FROM Transaction
        GROUP BY YEAR(transaction_time)
        ORDER BY year
        """
        cursor.execute(query)
        results = cursor.fetchall()
        return jsonify(results)
    except Error as e:
        print(f"Database error: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/api/users/yearly', methods=['GET'])
def get_yearly_customers_tickets():
    connection = get_db_connection()
    if not connection:
        return jsonify({'error': 'Database connection failed'}), 500
        
    cursor = connection.cursor(dictionary=True)
    try:
        query = """
        SELECT 
            YEAR(T.booking_time) as year,
            COUNT(DISTINCT T.user_id) as customers,
            COUNT(T.ticket_id) as tickets
        FROM Ticket T
        GROUP BY YEAR(T.booking_time)
        ORDER BY year
        """
        cursor.execute(query)
        results = cursor.fetchall()
        return jsonify(results)
    except Error as e:
        print(f"Database error: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/api/buses/top', methods=['GET'])
def get_top_buses():
    connection = get_db_connection()
    if not connection:
        return jsonify({'error': 'Database connection failed'}), 500
        
    cursor = connection.cursor(dictionary=True)
    try:
        query = """
        SELECT 
            B.bus_number,
            COUNT(T.ticket_id) as tickets
        FROM Ticket T
        JOIN Bus B ON T.bus_id = B.bus_id
        GROUP BY B.bus_id, B.bus_number
        ORDER BY tickets DESC
        LIMIT 10
        """
        cursor.execute(query)
        results = cursor.fetchall()
        return jsonify(results)
    except Error as e:
        print(f"Database error: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/api/users/top', methods=['GET'])
def get_top_users():
    connection = get_db_connection()
    if not connection:
        return jsonify({'error': 'Database connection failed'}), 500
        
    cursor = connection.cursor(dictionary=True)
    try:
        query = """
        SELECT 
            U.name,
            COUNT(T.ticket_id) as tickets
        FROM Ticket T
        JOIN User U ON T.user_id = U.user_id
        GROUP BY U.user_id, U.name
        ORDER BY tickets DESC
        LIMIT 10
        """
        cursor.execute(query)
        results = cursor.fetchall()
        return jsonify(results)
    except Error as e:
        print(f"Database error: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        connection.close()

# @app.route('/api/admin-user/search', methods=['POST'])
# def get_search_user():
#     data = request.get_json()
#     option = data.get("option")
#     searchValue = data.get("searchValue")

#     connection = get_db_connection()
#     if not connection:
#         return jsonify({'error': 'Database connection failed'}), 500
    
#     cursor = connection.cursor(dictionary=True)
#     # cursor = connection.cursor(dictionary=True)
#     try:
#         query = """
#         SELECT* 
#         FROM 
#             User 
#         WHERE %s LIKE %s%
#         """

#         cursor.execute(query, (option, searchValue))
#         connection.commit()
#         results=cursor.fetchall()
#         return jsonify(results), 200
#     except Error as e:
#         print(f"Database error: {e}")
#         return jsonify({'error': str(e)}), 500
#     # finally:
#     cursor.close()
#     connection.close()
@app.route('/api/admin-user/search', methods=['POST'])
def get_search_user():
    data = request.get_json()
    option = data.get("option")
    searchValue = data.get("searchValue")

    # Validate allowed columns to prevent SQL injection
    allowed_columns = ['name', 'email', 'phone', 'all']  # Add your actual column names
    if option not in allowed_columns:
        return jsonify({'error': 'Invalid search option'}), 400

    connection = get_db_connection()
    if not connection:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        with connection.cursor(dictionary=True) as cursor:
            # Safe parameterized query with proper LIKE syntax
            if option == "all" :
                query = f"""
                SELECT 
                    name, 
                    gender, 
                    email, 
                    user_id, 
                    phone, 
                    dob 
                FROM User 
                """

                cursor.execute(query)
                # Add % wildcard to search for values that START with searchValue
            else :

                query = f"""
                SELECT 
                    name, 
                    gender, 
                    email, 
                    user_id, 
                    phone, 
                    dob 
                FROM User 
                WHERE {option} LIKE %s
                """
                # Add % wildcard to search for values that START with searchValue
                search_pattern = f"%{searchValue}%"
                cursor.execute(query, (search_pattern,))
            
            
            results = cursor.fetchall()
            return jsonify(results), 200
    except Error as e:
        print(f"Database error: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        if connection:
            connection.close()



if __name__ == '__main__':
    app.run(debug=True, port=5000)