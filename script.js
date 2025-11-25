/* 
    DOMContentLoaded 이벤트:
    웹 페이지의 HTML 내용이 모두 로드된 후에 이 안의 코드를 실행하라는 뜻입니다.
    이미지나 스타일이 다 로딩되기 전이라도 HTML 구조만 잡히면 실행됩니다.
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log('페이지가 준비되었습니다.');

    /* 
        이미지 슬라이더 기능 구현
        1. 슬라이드 이미지들을 모두 찾아옵니다. (.slide-item 클래스를 가진 요소들)
        2. 7초마다 순서대로 보여줍니다.
    */

    // document.querySelectorAll: 조건에 맞는 모든 요소를 리스트 형태로 가져옵니다.
    const slides = document.querySelectorAll('.slide-item');

    // 현재 몇 번째 슬라이드를 보여주고 있는지 저장하는 변수입니다. (0번부터 시작)
    let currentIndex = 0;

    // 슬라이드가 2개 이상일 때만 작동하도록 합니다.
    if (slides.length > 0) {

        // setInterval: 특정 시간(밀리초)마다 함수를 반복해서 실행합니다.
        // 7000ms = 7초
        setInterval(() => {

            // 1. 현재 보여지고 있는 슬라이드 숨기기
            // classList.remove('active'): 'active'라는 클래스를 지워서 투명하게 만듭니다.
            slides[currentIndex].classList.remove('active');

            // 2. 다음 순서 계산하기
            // (현재번호 + 1)을 전체개수로 나눈 나머지를 구하면, 
            // 마지막 번호 다음에 다시 0번으로 돌아오게 됩니다. (0, 1, 2, 3, 4 -> 0 ...)
            currentIndex = (currentIndex + 1) % slides.length;

            // 3. 다음 슬라이드 보여주기
            // classList.add('active'): 'active' 클래스를 추가해서 불투명하게(보이게) 만듭니다.
            slides[currentIndex].classList.add('active');

            console.log(currentIndex + '번 슬라이드로 변경됨');

        }, 2000); // 7초마다 실행
    }
});

