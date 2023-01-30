
// #25
let lotto_v1 = (lotto, mykey) => {
    let match = 0;
    let msg = '아쉽지만, 다음기회에!!';

    //if (lotto[0] == mykey[0] || lotto[0] == mykey[1] || lotto[0] == mykey[2]) { ++match; }
    //if (lotto[1] == mykey[0] || lotto[1] == mykey[1] || lotto[1] == mykey[2]) { ++match; }
    //if (lotto[2] == mykey[0] || lotto[2] == mykey[1] || lotto[2] == mykey[2]) { ++match; }

    for (let i = 0; i <= 2; ++i) {
        for (let j = 0; j <= 2; ++j) {
            if (lotto[i] == mykey[j]) { ++match; }
        }
    }

    if (match == 1) { msg = '1개 일치!!'; }
    else if (match == 2) { msg = '2개 일치!!'; }
    else if (match == 3) { msg = '당첨!! 상금 100만원!!'; }

    return msg;
};


// #26
let computeTax = (isMarried, salary) => {
    let tax = 0;

    if (isMarried == 'no') {
        if (salary < 3000) {
            tax = salary * (10 / 100);
        } else {
            tax = salary * (25 / 100);
        }
    } else {
        if (salary < 6000) {
            tax = salary * (15 / 100);
        } else {
            tax = salary * (35 / 100);
        }
    }

    return `결혼여부:${isMarried}, 연봉:${salary} 만원,
            납부세금:${tax} 만원`;
};

// #30
let catchNumber = (num2) => {
    let num1 = 0;
    let result = '';

    while(true) {
        num1 = parseInt(prompt('임의의 숫자 3자리는?'));

        if (num1 > num2) {
            result = '추측한 숫자가 커요~';
        } else if (num1 < num2) {
            result = '추측한 숫자가 작아요~';
        } else {
            document.write('빙고! 숫자를 맞췄어요~ <br>');
            break;
        }
        console.log(result);
    }
};

// #32
let checkNumber = () => {
    let nums = parseInt(prompt('임의의 숫자는?'));
    let result = '범위 밖 값';

    if (nums < 10000) {
        result = '10000미만';
    } else if (nums >= 10000 && nums < 20000) {
        result = '10000 ~ 20000미만';
    } else if (nums >= 20000 && nums < 30000) {
        result = '20000 ~ 30000미만';
    }

    return result;
};

// #33
let cardCheck = (cardnum) => {
    let result = '잘못된 카드번호입니다!!';

    let cdnum = cardnum[1] + cardnum[2]
        + cardnum[3] + cardnum[4] + cardnum[5];

    if (cardnum[0] == '4') {
        result = 'visa - ';
        if (cdnum == '04825') result += '비씨카드';
        else if (cdnum == '38676') result += '신한카드';
        else if (cdnum == '57973') result += '국민은행';

    } else if (cardnum[0] == '5') {
        result = '마스터카드 - ';
        switch (cdnum) {
            case '15594': result += '신한카드'; break;
            case '24353': result += '외환카드'; break;
            case '40926': result += '국민은행'; break;
        }
    } else if (cardnum[0] == '3' && cardnum[1] == '5') {
        cdnum = cardnum[2] + cardnum[3]
            + cardnum[4] + cardnum[5];
        result = 'JCB카드 - ';
        switch (cdnum) {
            case '6317': result += 'NH농협카드'; break;
            case '6901': result += '신한카드'; break;
            case '6912': result += 'KB국민카드'; break;
        }
    }

    return result;
}

//35
let checkDayTime =(daytime) =>{
    let result ='';

    switch (daytime) {
        case `morning hours`:result =`아침시간(7-12)`;break;
        case `midday`:case'noon':result=`점심시간(12-1)`;break;
        case `afternoon hours`:result =`오후시간(6-9)`;break;
        case `night hours`:result =`아침시간(7-12)`;break;
        case `midnight hours`:result =`아침시간(7-12)`;break;
        case `elaryl morning hours`:result =`아침시간(7-12`;break;
        case `sall hours`:result =`새벽(1-3)`;break;
        case `dawn`:case`daybreak`:result =`해뜰녁(5-12)`;break;
        default:result=`잘못입력하였습니다`;
        
      }
      return result;
};

//48#
let computeInvestment = (account,interest) =>{ let sum =account;
    let year =0;
    while (true){
      if ( sum>account*2 ) break;
      sum += sum*(interest/100);

      ++year
      console.log(year,'/',sum);
    }
    return `${year} / ${parseInt(sum)}`;
};








