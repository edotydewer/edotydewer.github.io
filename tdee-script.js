document.getElementById('tdee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("กรุณากรอกข้อมูลอายุ น้ำหนัก และส่วนสูงให้ถูกต้อง");
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    const tdee = bmr * activity;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>TDEE ของคุณคือ:</h3>
        <p>${Math.round(tdee)}</p>
        <span>แคลอรี่/วัน</span>
    `;
    resultDiv.style.display = 'block';
});
