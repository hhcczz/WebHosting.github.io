export function testCountrySites(countries) {
    const seenCodes = new Set(); // 중복 검사용 Set
    
    countries.forEach((country, index) => {
        // 중복 검사
        if (seenCodes.has(country.code)) {
            console.log(`⚠️ 중복된 국가 코드: ${country.name} (${country.code}) - ${index + 1}번째`);
            return;
        }
        
        seenCodes.add(country.code); // 중복 방지
        
        // 접속 테스트
        const url = `https://flagcdn.com/w320/${country.code}.png`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log(`❌ 접속 실패: ${country.name} (${url}) - 상태코드: ${response.status}`);
                }
            })
            .catch(error => {
                console.log(`❌ 접속 실패: ${country.name} (${url}) - 에러: ${error.message}`);
            });
    });
    console.log("✅ Country Test Complete");
}
