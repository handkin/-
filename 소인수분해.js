function factorize(msg, replier)
{
	var splitedMsg = msg.split(" ");
	if(splitedMsg[0]=="계산" && splitedMsg[1]=="소인수분해")
	{
		var number = Number(splitedMsg[2]);
		var count = 0; //몇승인지 확인
		var result =""; //출력할 문자
		if(number > 9007199254740991) { // 자바스크립트 한
			return replier.reply("ㅗ")
		}
		//2미만의 수 처리
		if(number<1)
			return replier.reply("1 이상의 수를 입력해 주세요");
		else if(number==1)
			return replier.reply("1");
		//2 이상의 수 처리
		for(var i=2; Number(Prime[i]) <=Math.sqrt(number) && Prime[i]!=null ;i++) //저장된 소수에서 확인
		{
			count = 0
			while( number % Prime[i] == 0) 
			{ //나누어떨어지면 계속
				count++;
				number /= Prime[i];
			}
			if( count == 0)
				continue;
			else if( count == 1)
				result = result.concat(Prime[i]+" x "); //1승일경우 그냥 출력
			else 
				result = result.concat(Prime[i]+"^"+count+" x ");
		}

		for(var i= (Prime.length>=2 ? Prime[Prime.length-1] : 2); i<=Math.sqrt(number) && (i<200000-Prime.length); i++) //새로운 소수를 찾는다(200000큰 수까지)
		{
			count = 0
			while( number % i == 0) //새로운 소수를 찾는다
			{ //나누어떨어지면 계속
				count++;
				number /= i;
			}
			if( count == 0)
				continue;
			else if( count == 1)
				result = result.concat(i+" x "); //1승일경우 그냥 출력
			else 
				result = result.concat(i+"^"+count+" x ");
			Prime.push(Number(i)); //새로 찾은 소수를 집어넣는다
		}

		if(i==(200000-Prime.length)) {
			replier.reply("시름");
			return;
		}
		if(number!=1)
			result = result.concat(number);
		else
			result = result.substring(0,result.length-3); //마지막 곱하기 기호이외 출력
		replier.reply(result);
	}
}

function aliquot(msg)
{
	if(splitedMsg[0]=="계산" && splitedMsg[1]=="약수")
	{
		var number = Number(splitedMsg[2]);
	}
}

var Prime = new Array(); //소수들을 넣을 배열을 생성한다

function response(room, msg, sender, isGroupChat, replier, imageDB) {
	factorize(msg, replier);
}


/*

function calculate(msg,replier)
{
  var order = msg.split(" ")[0];
  if(order=="계산") {
    switch(msg.split(" ")[1]) {
      case "인수분해": factor(msg.split(" ")[2],replier); break;
      case "제곱":
    }
  }
  if(msg.match(/^제곱 (.+)신호$/)){
      var msgnum1= msg.split(" ")[1]
      var msgnum2 = msg.split(" ")[2]
   if(msgnum1.match(/[^0-9]/g)==null&&msgnum2.match(/[^0-9]/g)==null){
      var msgnum3 = Math.pow(msgnum1,msgnum2)
       replier.reply(msgnum1+"을 "+msgnum2+"제곱한 값은 "+msgnum3+"입니다")
  }else{
        replier.reply("문자는 계산할수 없습니다\n예시:제곱 2 2 신호\n띄어쓰기에 유의하세요")
  }
}*/