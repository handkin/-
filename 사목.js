/**********************
 *     사목
 * 가로X세로 7X6
 * 
 * 백 : ○ 흑 : ●
 * 
 */



//맵 초기화
var map = new Array();
for(var i=0;i<7;i++) {
    map[i] = new Array();
}

AI = {}

AI.getValueableHole = function() { //넣을수 있는 구멍을 배열 형태로 반환함
    var valueableHole = new Array();
    for(var i=0;i<6;i++) {
        if(!isFull(i))
            valueableHole.push(i)
    }
    return valueableHole;
}

AI.thinking = function() {
    var path = new Array();
    var hole = {'0'}
    for(var i=0;i<7;i++) {
        if(isFull(i)) cnt++;
    }
}

checkWinner = function(player) { //player가 승리했는지 확인하는 함수
    if(check가로(player)) return true;
    if(check세로(player)) return true;
    if(check대각선(player)) return true;
    return false;
}

check세로 = function(player) {
    var stone = player=='white' ? '○':'●'
    for(var j=0;j<6;j++) {
        if( map[2][j] != stone || map[3][j] != stone ) //만약 조건을 충족하지 않는다면 다음라인
            continue;
        else {
            if( map[1][j] == stone ) {
                if( map[0][j] == stone || map[4][j] == stone)
                    return true
            }
            if( map[4][j] == stone ) {
                if(map[5][j]==stone)//||map[0][j]==stone) //위에서 처리
                    return true
            }
        }
    }
    return false //걸리는게 없다면 false반환
}

check가로 = function(player) {
    var stone = player=='white' ? '○':'●'
    for(var i=0;i<6;i++) {
        var tmpJ = 0 //마지막으로 돌이 있던 위치 저장
        if( map[i][3] != stone) //만약 조건을 충족하지 않는다면 다음라인
            continue;
        else {
            var cnt = 0

            for(var j=tmpJ; j<tmpJ&&j<7; j++) {
                if(map[i][j]==stone)
                    cnt++;
                else 
                    cnt=0;
            }
            if(cnt>=4) return true;
        }
    }
    return false //걸리는게 없다면 false반환
}
check대각선 = function(player) {
    var stone = player=='white' ? '○':'●'
    for(var j=3;j<7;j++) { //우측 대각선
        for(var i=5;i>=3;i--) {
            var Sj = j
            var Si = i
            for(var k=0;k<4;k++) {
                if(map[Si--][Sj--] != stone)
                    break;
                else
                    if(k==3) return true; //끝까지 일치한다면 true
                    else continue; //확인중
            }
        }
    }
    for(var j=0;j<5;j++) { //좌측 대각선
        for(var i=5;i>=3;i--) {
            var Sj = j
            var Si = i
            for(var k=0;k<4;k++) {
                if(map[Si++][Sj++] != stone)
                    break;
                else
                    if(k==3) return true; //끝까지 일치한다면 true
                    else continue; //확인중
            }
        }
    }
    return false //걸리는게 없다면 false반환
}

isFull = function(line) { //해당 줄이 꽉찻는지 확인하는 함수
    if(map[line][5] != null)
        return true
    else
        return false
}

putStone = function(player,line) {
    var stone = player=='white' ? '○':'●'
    line = Number(line)-1
    if(line==NaN)   //숫자가 아니라면 false
        return false    
    if(isFull(line)) //더 못넣으면 flase
        return false
    map[line].push(stone)
    return true //정상적으로 처리되면 true
}

filledMap = function() { //맵의 빈공간을 채운 맵을 반환하는 함수(맵은 바꾸지 않음)
    var tmpMap = ''
    for(var i=5;i>=0;i--) {
        for(var j=0;j<7;j++) {
            if(map[j][i]==null)
                tmpMap = tmpMap.concat('　');
            else
                tmpMap = tmpMap.concat(map[j][i]);
        }
        tmpMap = tmpMap.concat('\n');
    }
    return tmpMap.substr(0,tmpMap.length-1)
}

clearMap = function() {
    map = new Array();
    for(var i=0;i<7;i++) {
        map[i] = new Array();
    }
}

var CurrentPlayer = 'black'

function response(room, msg, sender, isGroupChat, replier, imageDB) {
    if(room!='가브리엘 드롭 아웃') return
    var sptMsg = msg.trim().split(' ')
    if(msg.indexOf('돌')==0) {
        var num = msg.replace('돌','')
        num = Number(num.trim())
        if(Number(num)>7||num==NaN) return

        putStone(CurrentPlayer,num)

        if(checkWinner(CurrentPlayer)) {
            replier.reply((CurrentPlayer+'승리!\n').concat(filledMap()))
            //플레이어 초기화
            CurrentPlayer = 'black'
            //맵 초기화
            clearMap()
        }
        else
            replier.reply(filledMap())
        
        CurrentPlayer = (CurrentPlayer == 'black' ? 'white':'black')
    }
    if(msg=='초기화') {
        clearMap()
        replier.reply('초기화 완료')
    }
}