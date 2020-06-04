
// 업다운에 필요한 전역변수
var UDchance    = new Array()
var UDrandomNum = new Array()
// 숫자야구에 필요한 전역변수
var NBchance    = new Array()
var NBrandomNum = new Array()
// 인디언 포커에 필요한 전역변수
const IP = {}; // 인디언 포커에 필요한 함수 객체
var IPplayer =  new Array()  // 참여하는 플레이어
var IPDeck = new Array()     // 이용하는 덱
var IPCurrentPt = 0          // 판에 나와있는 포인트
var IPCurrentPlayer = ''     // 이번 차례의 플레이어
var IPstartedPlayer = ''     // 이번 턴을 처음 시작한 플레이어
var IPplayerCard = new Array() // 플레이어의 카드
IPplayerCard[0] = '임시카드0'
IPplayerCard[1] = '임시카드1'
var IPplayerPt = new Array() // 플레이어의 점수
var IPHaveToBet = 0         // 배팅해야 하는 포인트
var IPraisedPt = 0          // 레이즈 한 포인트
var IPturnEnd = false       // 턴이 끝났는지
// 전체 게임진행에 필요한 전역변수
var isPlaying = new Array();

IsNumber = function() { //숫자로만 이루어졌는지 판단하는 함수
    return (/^[0-9]+$/).test(); 
}

endGame = function(sender,replier) {
    if(isPlaying[sender]) {
        isPlaying[sender] = false
        replier.reply('게임이 종료되었습니다')
    }
    else {
        replier.reply('진행중인 게임이 존재하지 않습니다')
        return
    }
}

upDown = function(sender, msg, replier) {
    if(msg=='업다운게임') { // 게임을 시작한다
        if(isPlaying[sender]) { //만약 게임을 하고있다면
            replier.reply('이미 게임이 진행중입니다\n'+
                          '진행중인 게임을 종료하고싶으면 \'게임종료\'를 입력해주세요')
            return
        }
        isPlaying[sender] = true;
        replier.reply('업다운 게임이 시작되었습니다\n'+
                      '0이상100이하 숫자를 입력해주세요\n'+
                      '총 기회는 5번입니다\n'+
                      '!30 같이 처음에 \'!\'를 붙여주세요')
        UDrandomNum[sender] = Math.ceil(Math.random()*100)
        UDchance[sender] = 5
        return
    }
    if(!msg.match(/^!.+/)) return //만약 지정된 형식이 아니면 리턴
    var num = Number(msg.substr(1))
    if(isPlaying[sender] == true) { //게임이 진행중이라면
        if( num == NaN || num>100 || num<0) {
            return replier.reply('0이상 100이하의 수를 입력해 주세요')
        }
        else {
            UDchance[sender]--
            if(num == UDrandomNum[sender]) { //만약 정답이라면
                replier.reply(sender+'님 정답입니다!!\n'+'축하드립니다!!!')
                isPlaying[sender] = false
                return
            }
            else { // 만약 오답이라면
                var mark = num < UDrandomNum[sender] ? 'UP':'DOWN'
                if(UDchance[sender]<=0) { // 모든 기회를 소모했다면
                    replier.reply(sender+'님 패배하였습니다\n'+
                                  '정답 : '+UDrandomNum[sender])
                    isPlaying[sender] = false
                    return
                }
                replier.reply(sender + '님 ('+ UDchance[sender] +'회 남음)\n' +'    < ' +mark+' >')
                return
            }
        }
    }
    else {
        replier.reply('게임이 개시되지 않았습니다\n'+
                      '게임을 시작하고 싶으시면 \'업다운게임\'을 입력해주세요')
        return 
    }
}

numberBaseBall = function(room, sender, msg, replier) {
    var game = 'numberBaseBall'
    var out = 0
    var ball = 0 
    var strike = 0

    if(msg=='숫자야구') { // 게임을 시작한다
        if(isPlaying[sender]) { //만약 게임을 하고있다면
            replier.reply('이미 게임이 진행중입니다\n'+
                          '진행중인 게임을 종료하고싶으면 \'게임종료\'를 입력해주세요')
            return
        }
        isPlaying[sender] = true;
        replier.reply('업다운 게임이 시작되었습니다\n'+
                      '4자리 숫자를 입력해주세요\n'+
                      '총 기회는 10번입니다\n'+
                      '!3421 같이 처음에 \'!\'를 붙여주세요')
        var NumArr = Array('0','1','2','3','4','5','6','7','8','9')
        NBrandomNum[sender] = ''
        for(var i=0;i<4;i++) {
            var rndNum = Math.floor(Math.random()*NumArr.length)
            NBrandomNum[sender] = NBrandomNum[sender].concat(NumArr[rndNum])
            NumArr = NumArr.splice(rndNum,1)
        }
        NBchance[sender] = 10
        return
    }
    if(!msg.match(/^![0-9]{4}/)) return //만약 지정된 형식이 아니면 리턴
    var num = Number(msg.substr(1))
    if(isPlaying[sender] == true) { //게임이 진행중이라면
        if( num == NaN) {
            return replier.reply('4자리 숫자를 입력해 주세요')
        }
        else {
            chance[game][sender]--
            if(num == randomNum[game][sender]) { //만약 정답이라면
                replier.reply(sender+'님 정답입니다!!\n'+'축하드립니다!!!')
                isPlaying[sender] = false
                return
            }
            else { // 만약 오답이라면
                while(num) {
                    num
                }
                var mark = num < randomNum[game][sender] ? 'UP':'DOWN'
                if(chance[game][sender]<=0) { // 모든 기회를 소모했다면
                    replier.reply(sender+'님 패배하였습니다\n'+
                                  '정답 : '+randomNum[game][sender])
                    isPlaying[sender] = false
                    return
                }
                replier.reply(sender + '님 ('+ chance[game][sender] +'회 남음)\n' +'    < ' +mark+' >')
                return
            }
        }
    }
    else {
        replier.reply('게임이 개시되지 않았습니다\n'+
                      '게임을 시작하고 싶으시면 \'업다운게임\'을 입력해주세요')
        return 
    }
}

IP.isPlaying = function(sender) { // 해당 유저가 플레이 중인지 확인하는 함수
    if(IPplayer.indexOf(sender) != -1) // IP플레이어에 포함되어 있다면
        return true;
    else
        return false; // IP플레이어에 포함되어 있지 않다면
}

IP.isTurn = function(sender) { // 해당 유저의 턴인지 확인하는 함수
    return sender == IPCurrentPlayer
}

IP.makeNewDeck = function() { // 덱을 새로 만드는 함수
    IPDeck = new Array() // 덱을 초기화한다
    var NotShuffledDeck = new Array(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10) // 1~10까지의 카드가 2장씩
    while(NotShuffledDeck.length > 0) { // 섞이지 않은 덱에 원소가 존재할때동안
        const randomIdx = parseInt(Math.random() * NotShuffledDeck.length); // 랜덤한 원소 번호 추출
        IPDeck.push(NotShuffledDeck[randomIdx]);                  // 랜덤한 원소를 덱에 넣는다
        NotShuffledDeck.splice(randomIdx, 1);                       // 덱에 넣은 원소를 없앤다
    }
}

IP.sendOpponentCard = function() {
    if(!Api.canReply(IPplayer[0]) || !Api.canReply(IPplayer[1])) //만약 카드를 전송할 수 없다면
        return false
    else { // 플레이어 들에게 카드를 보낸다
        IPDeck = new Array(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10)

        var randomIdx = parseInt(Math.random() * IPDeck.length)
        IPplayerCard[0] = IPDeck[randomIdx]
        IPDeck.splice(randomIdx, 1);

        randomIdx = parseInt(Math.random() * IPDeck.length)
        IPplayerCard[1] = IPDeck[randomIdx]
        IPDeck.splice(randomIdx, 1); 

        Api.replyRoom(IPplayer[0], IPplayer[1] + '님의 카드 : ' + IPplayerCard[1]) 
        Api.replyRoom(IPplayer[1], IPplayer[0] + '님의 카드 : ' + IPplayerCard[0]) 
        return true
    }   
}

IP.isCommand = function(msg) { // 명령어인지 확인하는 함수
    var CommandList = Array('check','bet','call','raise','fold','die','all in'+
                            '체크','베트','콜','레이즈','폴드','다이','올인')
    if(CommandList.indexOf(msg) != -1) // 만약 명령어라면
        return true 
    else // 명령어가 아니라면
        return false
}

IP.setNextPlayer = function() { // 다음 플레이어를 설정한다
    IPCurrentPlayer = (IPCurrentPlayer == IPplayer[0]) ? IPplayer[1] : IPplayer[0]
}

IP.canCheck = function(playerPt) { // 체크를 할 수 있는가
    if(IPHaveToBet == 0 ) return true // 플레이어 포인트가 0이 아니라면 true
    else return false
}

IP.canCall = function(playerPt) { // 콜을 할 수 있는가
    if(Number(IPHaveToBet) > Number(playerPt)) return false
    else if(IPHaveToBet==0 && playerPt==0) return false
    else return true
}

IP.canRaise = function(playerPt) { // 레이즈를 할 수 있는가
    if(playerPt >= IPraisedPt && playerPt > IPHaveToBet && IPraisedPt > 0) return true
    else return false
}

IP.canFold = function(playerPt) { // 폴드를 할 수 있는가
    if(playerPt != 0) return true
    else return false
}

IP.canAllIn = function(playerPt) { // 올인을 할 수 있는가
    if(playerPt != 0) return true
    else return false
}

indianPoker = function(room, sender, msg, replier) {
    if(msg=='인디언포커 참여') { // 게임을 시작한다
        if(isPlaying[sender]) { // 만약 게임을 하고있다면
            replier.reply('이미 진행중인 게임이 있습니다\n'+
                          '진행중인 게임을 종료하고싶으면 \'게임종료\'를 입력해주세요')
            return
        }
        if(IPplayer.length == 2) { // 만약 2인이 게임을 진행중이라면
            replier.reply('이미 게임이 진행중입니다\n'+
                          '현재 진행중인 게임이 끝날때까지 기다려 주세요')
            return
        }
        isPlaying[sender] = true;
        IPplayer.push(sender); // 플레이어를 추가한다
        replier.reply('인디언포커에 참가되었습니다')
        if(IPplayer.length == 1) // 만약 1명만 참여했다면
            replier.reply('2명이 되면 시작합니다 다음 플레이어를 기다려 주세요')

        if(IPplayer.length == 2) // 만약 2명 참여 완료됬다면
            if(IP.sendOpponentCard() == true) { // 제대로 보내졌다면
                replier.reply('인디언 포커가 시작되었습니다\n'+
                              '각자 개인톡에 보내진 카드를 확인해 주세요')
                IPplayerPt[0] = 29 //각자 포인트를 지급한다
                IPplayerPt[1] = 29
                IPCurrentPt = 2 //판돈은 2로 시작

                IPCurrentPlayer = IPplayer[parseInt(Math.random() * IPplayer.length)] // 랜덤한 플레이어를 설정한다
                IPstartedPlayer = IPCurrentPlayer
                replier.reply(IPCurrentPlayer+'님 턴')
                replier.reply('판돈 : '+ IPCurrentPt +'\n'+
                              IPplayer[0]+' : '+IPplayerPt[0]+'\n'+
                              IPplayer[1]+' : '+IPplayerPt[1]+'\n'+
                              '체크 / 레이즈 / 폴드 / 올인')
            }
            else { // 만약 보내기에 실패했다면
                replier.reply('카드 보내기에 실패하였습니다')
                replier.reply('인디언 포커는 개인 톡으로 카드를 보냅니다\n'+
                              '최소 한번은 봇에게 개인톡을 걸어주세요\n'+
                              '다시 게임을 시작하시려면 \'게임종료\'후 다시 참가해주세요')
            }
    }

    if(!IP.isPlaying(sender)) return //만약 플레이중인 사람이 아니라면 리턴
    if(!IP.isTurn(sender)) return // 만약 자신의 턴이 아니라면 리턴
    if(!IP.isCommand(msg)) return //명령어가 아니라면 리턴

    var command = msg  //추후에 명령어 변환 필요
    var player = IPCurrentPlayer // 현재 플레이어
    var opponentPlayer = player == IPplayer[0] ?  IPplayer[1] : IPplayer[0]
    var playerPt =  player == IPplayer[0] ?  IPplayerPt[0] : IPplayerPt[1] // 현재 플레이어의 포인트
    var opponentPt = player == IPplayer[0] ?  IPplayerPt[1] : IPplayerPt[0] // 상대 플레이어의 포인트
    var result = ''; // 결과
    // 현재 턴의 플레이어의 명령 처리
    if(IP.canCheck(playerPt) && command == 'check') { // 체크를 하면
        IPHaveToBet = 0
        if(IPstartedPlayer != player) {//만약 시작한 사람이 체크를 하면
            IPturnEnd = true // 턴종료
            if(IPplayerCard[0] >  IPplayerCard[1])
                result = 'win'
            else if(IPplayerCard[0] <  IPplayerCard[1])
                result = 'lose'
            else if(IPplayerCard[0] ==  IPplayerCard[1]) 
                result = 'draw'
        }
    }
    else if(IP.canCall(playerPt) && command == 'call' ) { // 콜을 하면
        playerPt    -= IPHaveToBet // 배팅해야 하는 포인트 제거
        IPCurrentPt += IPHaveToBet // 판돈에 추가
        IPHaveToBet  = 0
        IPturnEnd = true
        if(IPplayerCard[0] >  IPplayerCard[1])
            result = 'win'
        else if(IPplayerCard[0] <  IPplayerCard[1])
            result = 'lose'
        else if(IPplayerCard[0] ==  IPplayerCard[1]) 
            result = 'draw'
        
    }
    else if(IP.canRaise(playerPt) && command == 'raise' ) { // 레이즈를 하면
        playerPt    -= IPraisedPt
        IPHaveToBet += IPraisedPt
        IPHaveToBet  = IPraisedPt - IPHaveToBet
        IPraisedPt = 0
    }
    else if(IP.canFold(playerPt) && command == 'fold' ) { // 폴드를 하면
        IPturnEnd = true
        result = 'lose'
        IPHaveToBet = 0
    }
    else if(IP.canAllIn(playerPt) && command == 'all in' ) { // 올인을 하면
        IPHaveToBet = playerPt > opponentPt ? opponentPt :  playerPt // 상대보다 크면 상대의 포인트 보유량으로
    }

    if(IPturnEnd) { // 만약 턴이 끝났다면
        IPturnEnd = false
        if(result == 'win') { // 승패를 조정한다
            result = player == IPplayer[0] ?  'win' : 'lose'
        }
        else if(result == 'lose') {
            result = player == IPplayer[0] ?  'lose' : 'win'
        }
        else if(result == 'draw') {
            result = 'draw'
        }
        
        switch(result) { // 승패에 따른 포인트를 지급한다
            case 'win':
                playerPt += IPCurrentPt
                IPCurrentPt = 0
                break
            case 'lose':
                opponentPt += IPCurrentPt
                IPCurrentPt = 0
                break
            case 'draw':
                playerPt += IPCurrentPt/2
                opponentPt += IPCurrentPt/2
                IPCurrentPt = 0
                break
        }

        if(playerPt == 0) { // 자신 승리
            replier.reply(player+'님 승리하셨습니다. 축하드립니다')
        }
        else if(opponentPt == 0) { // 상대 승리
            replier.reply(opponentPlayer+'님 승리하셨습니다. 축하드립니다')
        }
        else if(IPDeck.length == 0){ // 덱을 모두 소모하였다면
            replier.reply('덱을 모두 사용하여 현재의 포인트로 승자를 선정합니다')
            if(playerPt > opponentPt)
                replier.reply( player+'님 승리하셨습니다. 축하드립니다')
            else if(playerPt < opponentPt)
                replier.reply( opponentPlayer+'님 승리하셨습니다. 축하드립니다')
            else if(playerPt == opponentPt)
                replier.reply('무승부로 끝이 났습니다')
        }
        else { //게임이 끝이나지 않았다면
            IP.sendOpponentCard() // 다음 게임을 위해 카드를 보낸다
            IP.setNextPlayer() // 다음 선수를 대기?
            IPstartedPlayer = IPCurrentPlayer
            //다음 판을 준비한다
            playerPt -= 1
            opponentPt -= 1
            IPCurrentPt = 2
        }
        
    }
    player == IPplayer[0] ?  IPplayerPt[0] = playerPt : IPplayerPt[1] = playerPt // 해당 플레이어의 포인트 적용
    player == IPplayer[0] ?  IPplayerPt[1] = opponentPt : IPplayerPt[0] = opponentPt // 상대 플레이어의 포인트 적용
    
    replier.reply(IPCurrentPlayer+'님 턴')
                replier.reply('판돈 : '+ IPCurrentPt +'\n'+
                              IPplayer[0]+' : '+IPplayerPt[0]+'\n'+
                              IPplayer[1]+' : '+IPplayerPt[1]+'\n'+
                              '체크 / 레이즈 / 폴드 / 올인')

}



function response(room, msg, sender, isGroupChat, replier, imageDB) {
    msg = msg.trim()
    if(room == '천연수' || room == '#가브리엘 드롭 아웃' || room == '손으로 만든 옴닉 게임방') {
        upDown(sender,msg,replier)
        indianPoker(room, sender, msg, replier)
    }
    if(msg=='게임종료') { // 게임을 종료한다
        endGame(sender,replier)
        IPplayer = new Array()
    }
    msg = msg.trim()
}