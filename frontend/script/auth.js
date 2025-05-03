document.getElementById("isNotAdmin").addEventListener("change", function (e) {
    const value = e.target.value;

    if (value === "logout") {
      logout(); // կանչում ենք logout ֆունկցիան
    } else {
      location.href = value; // մնացած բոլոր դեպքերում ուղղակի ռեդիրեքտ
    }
  });

let isLogin = localStorage.getItem("accesToken");
if (!isLogin || isLogin=="false") {
        document.getElementById("isNotAdmin").style.display = "none"
    }else {
        document.getElementById("login").style.display = "none"

        
    }
function logout() {
    console.log("aaaaaaaaaa");
    
    localStorage.removeItem("accesToken");
    window.location.href = "welcome.html";
}