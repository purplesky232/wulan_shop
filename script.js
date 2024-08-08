// Function untuk login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Lakukan validasi username dan password
    if (username === 'admin' && password === 'admin') {
      // Setelah login berhasil, redireksi user ke halaman index.html
      window.location.href = 'index.html';
    } else {
      alert('Login gagal, periksa kembali username dan password Anda');
    }
  }
  
  // Function untuk register
  function register() {
    var usernameRegis = document.getElementById('usernameRegis').value;
    var passwordRegis = document.getElementById('passwordRegis').value;
  
    // Lakukan registrasi user
  
    // Setelah register berhasil, redireksi user ke halaman index.html
    window.location.href = 'index.html';
  }
  
  // Event listener untuk tombol login
  document.getElementById('loginButton').addEventListener('click', login);
  
  // Event listener untuk tombol register
  document.getElementById('registerButton').addEventListener('click', register);
  
