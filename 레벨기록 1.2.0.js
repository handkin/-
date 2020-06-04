const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const DB = {};

/*DB 객체에 포함된 함수들 정의*/
// name : 성질, room : 방이름 , sender : 보낸사람
DB.createDir = function(name, room) { //채팅이 저장될 폴더를 생성하는 함수 
    var folder = new java.io.File(sdcard + "/레벨기록/" + name + '/'+ room + '/');
    folder.mkdirs(); //폴더 생성. 상위 폴더가 없으면, 상위 폴더도 생성. 
}; 
DB.saveData = function(name, room, sender, msg) { //파일에 내용을 저장하는 함수 
    var file = new java.io.File(sdcard + "/레벨기록/" + name + '/' + room + '/' + sender +".txt");
    var fos = new java.io.FileOutputStream(file);
    var str = new java.lang.String(msg);
    fos.write(str.getBytes());
    fos.close(); 
}; 
DB.readData = function(name, room, sender) { //파일에 저장된 내용을 불러오는 함수 
    var file = new java.io.File(sdcard + "/레벨기록/" + name + '/' + room + '/' + sender +".txt"); 
    if (!file.exists()) return null; //파일이 없으면 null 반환 
    var fis = new java.io.FileInputStream(file); 
    var isr = new java.io.InputStreamReader(fis); 
    var br = new java.io.BufferedReader(isr); 
    var str = br.readLine(); 
    var line = ""; 
    while ((line = br.readLine()) != null) { 
        str += "\n" + line; 
    } 
    fis.close(); 
    isr.close(); 
    br.close(); 
    return str; 
};

isLevelUp = function(data, msg) { //레벨업이 됫는지 확인하는 함수
    var tmpExp = data
    var level = 1;
    while(tmpExp>=OneLevelExp*level) {
        tmpExp -= (OneLevelExp*level)
        level++;
    }
    var tmpExp = data - msg.length
    var beforeLevel = 1;
    while(tmpExp>=OneLevelExp*beforeLevel) {
        tmpExp -= (OneLevelExp*beforeLevel)
        beforeLevel++;
    }
    return level != beforeLevel
};

getSenderExp = function(name, room, sender) { //보낸이의 경험치를 반환하는 함수
    var data = DB.readData(name , room, sender)
    return data
}

getLevel = function(exp) { //레벨을 반환하는 함수
    var level = 1;
    while(exp>=OneLevelExp*level) {
        exp -= (OneLevelExp*level)
        level++;
    }
    return level
}

printCurrentLevel = function(name, room, sender, msg, todayNum, replier) { //  현황 표시

    var exp = getSenderExp(name, room, sender);
    var level = getLevel(exp);
    var levelUp = isLevelUp(exp, msg);
    var nextNum = (OneLevelExp*(level+1)*level/2)-exp // 다음필요경험치
    var roomChatCnt = cntRoomChatNum(name, room, todayNum);
    var percent = ((exp/Number(roomChatCnt))*100).toFixed(2) //점유율을 소수 둘째자리까지 표시
    var mark = levelUp ? 'Level Up!!' : '['+percent+'%]'
    sender = sender.replace(/ｇⅨ簑ℓ/g,'/')


    if(levelUp && level<=3) return //3렙까지는 레벨업이 뜨지않음

    if(usePoint(room, sender, '100') || levelUp) { // 100포인트 사용
        return replier.reply(sender+'님 ' + mark +'\n현재레벨 : '+level+' (' +DB.readData('포인트', room, sender.replace(/\//g,'ｇⅨ簑ℓ'))+ ')'+'\n경험치 : '+exp+' / ' + (Number(exp) + Number(nextNum))) // 결과출력
    }
    else{
        return replier.reply('포인트가 부족합니다');
    }
    
}

cntRoomChatNum = function(name, room, todayNum) {
    var sumExp = 0
    var senders = DB.readData(name, room, '*순위*').split('\n');
    for(var i=1;i<senders.length;i++) {
        if(!isValuableDate(room, senders[i], todayNum)) continue; //만약 최근 채팅하지 않았다면 continue
        sumExp += Number(getSenderExp(name, room, senders[i]));
    }
    return sumExp
}

printRank = function(name, room, sender, todayNum, replier) {
    var detail = "\u200b".repeat(500)
    var senders = DB.readData(name, room, '*순위*').split('\n'); //이름들을 담음

    function people(pSender,pData) { //방,사람,점수를 담을 객체 생성
        this.sender = pSender
        this.data = pData
        return this
    }
    function compare(a,b) { //비교함수
        return Number(b.data)-Number(a.data)
    }

    var rank = new Array
    for(var i=0;i<senders.length;i++) { //보낸이들을 배열에 담는다
        var exp = getSenderExp (name, room, senders[i])
        if(!isValuableDate(room, senders[i], todayNum)) continue; //만약 최근 채팅하지 않았다면 continue
        rank.push(new people(senders[i], exp))
    }
    var g = rank.sort(compare);
    
    //var t = g.sort(compare)
    var result = '순위 ' + g.length+'人中'// + '/현재 점검중입니다/'
    for(var i=0;i<g.length;i++) {
        { //단위변경
        var changedNum
        if(g[i].data>1000000) 
            changedNum = (g[i].data/1000000).toFixed(2) + 'M'
        else if(g[i].data>100000)  // 134214 = 134K
            changedNum = (g[i].data/1000).toFixed(0) + 'K'
        else if(g[i].data>10000)  // 13421 = 13.4K
            changedNum = (g[i].data/1000).toFixed(1) + 'K'
        else 
            changedNum = g[i].data
        }
        if(i==5||(room=="용사식당"&&i==0)) // 용사식당만 모두 안보이게
            result = result.concat(detail)
        result = result.concat('\n'+ (i+1) + '위 : '+ changedNum +'개 - '+ g[i].sender + (sender==g[i].sender ? " ◀":''))

    }
    result = result.replace(/ｇⅨ簑ℓ/g,'/')
    if(usePoint(room, sender, '300')) { // 300포인트 사용
        return replier.reply(result) // 결과출력
    }
    else{
        return replier.reply('포인트가 부족합니다');
    }
    
}

printTodayRank = function(name, room, todayNum, replier) {
    var detail = "\u200b".repeat(500)
    var senders = DB.readData(name, room+'/'+todayNum, '*순위*').split('\n'); //이름들을 담음

    function people(pSender,pData) { //방,사람,점수를 담을 객체 생성
        this.sender = pSender
        this.data = pData
        return this
    }
    function compare(a,b) { //비교함수
        return Number(b.data)-Number(a.data)
    }

    var rank = new Array
    for(var i=0;i<senders.length;i++) { //보낸이들을 배열에 담는다
        var exp = getSenderExp (name, room+'/'+todayNum, senders[i])
        rank.push(new people(senders[i], exp))
    }
    var g = rank.sort(compare);
    
    //var t = g.sort(compare)
    var result = todayNum + ' 채팅량 상위 5명' // + '/현재 점검중입니다/'
    for(var i=0;i<g.length&&i<4;i++) {
        { //단위변경
        var changedNum
        if(g[i].data>1000000) 
            changedNum = (g[i].data/1000000).toFixed(2) + 'M'
        else if(g[i].data>100000)  // 134214 = 134K
            changedNum = (g[i].data/1000).toFixed(0) + 'K'
        else if(g[i].data>10000)  // 13421 = 13.4K
            changedNum = (g[i].data/1000).toFixed(1) + 'K'
        else 
            changedNum = g[i].data
        }
        result = result.concat('\n'+ (i+1) + '위 : '+ changedNum +'개 - '+ g[i].sender)
    }

    result = result.replace(/ｇⅨ簑ℓ/g,'/') // '/'처리
    replier.reply(result) // 결과출력
    
}

printPoint = function(room, sender, replier) { //포인트를 출력함
    return replier.reply(DB.readData('포인트', room, sender));
}

saveTodayData = function(room, sender, todayNum, msg) { //todayNum날의 채팅량을 저장하는 함수
    var data = DB.readData('당일채팅량', room+'/'+todayNum, sender) // 당일채팅량/room/todayNum/sender.txt를 읽는다
    if(data == null) {
        DB.createDir('당일채팅량', room+'/'+todayNum)
        DB.saveData ('당일채팅량', room+'/'+todayNum, sender, msg.length)
    }
    else {
        DB.saveData ('당일채팅량', room+'/'+todayNum, sender, Number(data) + Number(msg.length))
    }
};

saveFullData = function(room, sender, msg) { //누적 채팅량을 저장하는 함수
    var data = DB.readData('누적채팅량', room, sender) // 누적채팅량/room/sender.txt를 읽는다
    if(data == null) {
        DB.createDir('누적채팅량', room)
        DB.saveData ('누적채팅량', room, sender, msg.length) 
    }
    else {
        DB.saveData ('누적채팅량', room, sender, Number(data) + Number(msg.length))
    }
}

saveDate = function(room, sender, todayNum) { // 마지막 채팅 날짜를 저장함 (현재는 사용하지 않음)
    var data = DB.readData('최신채팅일', room, sender) // 최신채팅일/room/sender.txt를 읽는다
    if(data == null) {
        DB.createDir('최신채팅일', room)
        DB.saveData ('최신채팅일', room, sender, todayNum) 
    }
    else {
        DB.saveData ('최신채팅일', room, sender, todayNum)
    }
}

savePoint = function(room, sender, savePt) { // 포인트를 저장하는 함수
    var data = DB.readData('포인트', room, sender) // 포인트/room/sender.txt를 읽는다
    if(data == null) {
        DB.createDir('포인트', room)
        DB.saveData ('포인트', room, sender, DB.readData('누적채팅량', room, sender)) 
    }
    else {
        DB.saveData ('포인트', room, sender, Number(data) + Number(savePt))
    }
}

usePoint = function(room, sender, needPt) { // 포인트를 사용하는 함수(사용에 성공하면 true반환 실패하면 false반환)
    sender = sender.replace(/\//g,'ｇⅨ簑ℓ')
    var data = DB.readData('포인트', room, sender) // 포인트/room/sender.txt를 읽는다
    if(Number(data) < Number(needPt)) { // 포인트가 부족하다면 false반환
        return false;
    }
    else {
        DB.saveData ('포인트', room, sender, Number(data) - Number(needPt))
        return true;
    }
}


isValuableDate = function(room, sender, todayNum) { // limitDay이내에 채팅을 했는지 확인하는 함수
    var limitDay = 3; //몇일이내의 채팅을 유효하게 할것인가
    var currentDate = todayNum;
    for(var i=0;i<limitDay;i++) {
        var isChatted = DB.readData('당일채팅량', room+'/'+currentDate, sender)
        if(isChatted != null) return true //만약 채팅을 했다면 true리턴
        currentDate = getYesterday(currentDate) //전날을 확인
    }
    return false //채팅을 하지 않았다면 false리턴
}

getYesterday = function(day) { //어제 날짜를 구하는 함수
    var year = Number(day.substr(0,4))
    var month = Number(day.substr(4,2))
    var date = Number(day.substr(6,2))
    if(date>1) {
        date = date-1
    }
    else if(month>1) {
        month = month - 1
        switch(month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: date = 31; break
            case 4:
            case 6:
            case 9:
            case 11: date = 30; break
            case 2:  date = 28; break
        }
    }
    else {
        year = year - 1
        month = 12
        date = 31
    }
    if(month<10) month = '0'.concat(month)
    if(date<10) date = '0'.concat(date)
    return String(year) + String(month) + String(date)
}

addNewRoomMenber = function(room, sender, todayNum) {
    var 누적data = DB.readData('누적채팅량',        room      , '*순위*')
    var 당일data = DB.readData('당일채팅량', room+'/'+todayNum, '*순위*')
    if(누적data == null) DB.saveData ('누적채팅량',        room      , '*순위*', '\n' + sender)
    if(당일data == null) DB.saveData ('당일채팅량', room+'/'+todayNum, '*순위*', '\n' + sender)
    if(!누적data || !당일data) return
    var 누적senders = 누적data.split('\n')
    var 당일senders = 당일data.split('\n')
    var i = 0;
    var j = 0;
    for(i=1;i<누적senders.length;i++) {
        if(누적senders[i] == sender) break;
    }
    for(j=1;j<당일senders.length;j++) {
        if(당일senders[j] == sender) break;
    }
    if(i==누적senders.length) DB.saveData ('누적채팅량',        room      , '*순위*', 누적data + '\n' + sender)
    if(j==당일senders.length) DB.saveData ('당일채팅량', room+'/'+todayNum, '*순위*', 당일data + '\n' + sender) 
}

printPatchNote = function(replier) {
    var detail = "\u200b".repeat(500)
    var patchNote =
    "패치노트" + detail +
    "ver 1.2.1\n"+
    "패치노트 기능 추가\n"+
    "/이 닉네임에 포함됬을경우 포인트 부족이 뜨는 버그 해결\n"+
    "더이상 레벨업에 포인트를 소모하지 않습니다"
    replier.reply(patchNote)
}


/////////////////////////
var OneLevelExp = 200////
/////////////////////////

function response(room, msg, sender, isGroupChat, replier, imageDB) {
    /* 메세지, 보낸이 처리 */
    msg = msg.trim()
    msg = msg.replace("보냈습니다.",''); //처리하기 귀찮았워
    sender = sender.replace(/\//g,'ｇⅨ簑ℓ') //파일경로에 방해되는 '/'를 'ｇⅨ簑ℓ'로 바꾼다
    /* 날짜 처리 */
    var today = new Date()
    var year  = today.getFullYear() 
    var month = today.getMonth()
    var date  = today.getDate()
    var day   = today.getDay() //0:일 1:월 2:화 3:수 4:목
    

    isManager = function() {
        var profiles = java.lang.String(imageDB.getProfileImage()).hashCode();
        if(profiles==-1278142564||profiles==683759106||profiles==1046162445) return true
        else return false
    }

    if(date<10) date = '0'.concat(date)
    if(month+1<10) month = '0'.concat(month+1)
    var todayNum = String(year) + String(month) + String(date)
    if(sender!='천연수'&&(msg.length>50||msg.match("http"))) return //긴거는 무시
    
    /******************************************************************
     *                      ver 1.2.1 레벨기록                         *
     *                                                                *
     * 레벨업에 필요한 경험치를 바꾸고 싶으면 OneLevelExp를 바꾸면 된다   *
     *           순위기능은 한번이라도 채팅 친 사람만 해당  
     * '레벨저장'/whatDo/room/sender 순
     *****************************************************************/

    saveTodayData(room, sender, todayNum, msg) //오늘의 채팅량 저장
    saveFullData(room, sender, msg) //누적 채팅량 저장
    addNewRoomMenber(room, sender, todayNum) //이름목록을 저장
    savePoint(room, sender, msg.length) //포인트를 저장

    var 누적exp = getSenderExp('누적채팅량', room, sender)
    var 당일exp = getSenderExp('당일채팅량', room, sender)
    var levelUp = isLevelUp(누적exp,msg) //레벨업을 했는지 여부
    
    if(msg=='패치노트')
        printPatchNote(replier)
    if(msg=='현황'||levelUp) // 현황이나 레벨업을 했을경우
        printCurrentLevel('누적채팅량', room, sender, msg, todayNum, replier) //현재 레벨을 출력한다
    if(msg=='전체순위') //순위를 볼때
        printRank('누적채팅량', room, sender, todayNum, replier) //순위출력
    if(msg=='포인트')
        printPoint(room, sender, replier)
    if(msg=='오늘순위'&&isManager(sender))
        printTodayRank('당일채팅량', room, todayNum, replier)

    
    if(msg.indexOf('점수수정')!=-1&&msg.indexOf('@')!=-1) {//||
        if(isManager()){
            msg = msg.replace('점수수정 ','')
            var str = msg.split("@")
            var target = str[0]
            var cngNum = Number(str[1])
            target = target.replace(/\//g,'ｇⅨ簑ℓ') //파일경로에 방해되는 '/'를 'ｇⅨ簑ℓ'로 바꾼다
            var data = DB.readData('누적채팅량', room, target)
            if(data==null) { //없다면 오류표시
                return replier.reply(target+"님이 존재하지 않습니다")
            }
            else {
                DB.saveData('누적채팅량', room, target, Number(data)+Number(cngNum)); //기존에 있던 내용 갱신 
            }
            data = DB.readData('누적채팅량', room, target)
            replier.reply(target+' : '+ (cngNum<0 ? '':'+') + cngNum+'▶' + data)
        }
        else if(!isManager()) {
            replier.reply("권한이 없습니다")
        }
        else {
            replier.reply("전송이 진행중입니다")
        }
    }
    
    /*if(msg=='프로필') {
        replier.reply(profiles)
    }*/
}