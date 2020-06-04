var detail = "\u200b".repeat(500)

var graph = ''
    +"최근 6일간 sender님의 채팅량 현황입니다\n"
    +"※일부 환경에서는 제대로 표현되지 않을수 있습니다\n"+detail
    +"　　　|　　　　　　　　　　　　　　\n"
    +"０６０|　■■　　　　　　　　　　　　\n"
    +"　　　|　■■　　　　　　　　　　　　\n"
    +"　　　|　■■　　　　　　　　　　　　\n"
    +"　　　|　■■　　　　　　　　　　　　\n"
    +"　　　|　■■　　　　　　　■■　　　　\n"
    +"　　　|　■■　　　　　　　■■　　　　\n"
    +"　　　|　■■　　　　　　　■■　　　　\n"
    +"　　　|　■■　　　　　　　■■　　　　\n"
    +"　　　|　■■　■■　　　　■■　　　　\n"
    +"　　　|　■■　■■　　　　■■　　　　\n"
    +"４００|　■■　■■　　　　■■　　　　\n"
    +"　　　|　■■　■■　　　　■■　　　　\n"
    +"　　　|　■■　■■　■■　■■　　　\n"
    +"　　　|　■■　■■　■■　■■　　　　\n"
    +"　　　|　■■　■■　■■　■■　　　　\n"
    +"　　　|　■■　■■　■■　■■　　　　\n"
    +"　　　|　■■　■■　■■　■■　　　　■■\n"
    +"　　　|　■■　■■　■■　■■　　　　■■\n"
    +"　　　|　■■　■■　■■　■■　　　　■■\n"
    +"　　　|　■■　■■　■■　■■　　　　■■\n"
    +"２００|　■■　■■　■■　■■　■■　■■\n"
    +"　　　|　■■　■■　■■　■■　■■　■■\n"
    +"　　　|　■■　■■　■■　■■　■■　■■\n"
    +"　　　|　■■　■■　■■　■■　■■　■■\n"
    +"　　　|　■■　■■　■■　■■　■■　■■\n"
    +"　　　|　■■　■■　■■　■■　■■　■■\n"
    +"　　　|　■■　■■　■■　■■　■■　■■\n"
    +"　　　|　■■　■■　■■　■■　■■　■■\n"
    +"　　　|　■■　■■　■■　■■　■■　■■\n"
    +"　０　|　■■　■■　■■　■■　■■　■■\n"
    +"　　―――――――――――――――――――――――――\n"
    +"　　　|　１９　２０　２１　２２　２３　２４\n";　
    //０１２3４５６７８９０１２３４５６７８９１２\n
    //　　　　[0] [1] [2] [3] [4] [5]  
    //보통기기 25, 일부기기 23까지 지원

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

changeNum = function(c) { //반각 숫자를 전각 숫자로 바꿔주는 기능
    switch(String(c)) {
        case '0': return '０'
        case '1': return '１'
        case '2': return '２'
        case '3': return '３'
        case '4': return '４'
        case '5': return '５'
        case '6': return '６'
        case '7': return '７'
        case '8': return '８'
        case '9': return '９'
    }
    return c
}

getChatNum = function(room, date, sender) { //해당하는 날의 채팅수를 구해오는 함수
    var data = DB.readData('당일채팅량', room, date+'/'+sender)
    return data
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

function response(room, msg, sender, isGroupChat, replier, imageDB){
    msg = msg.trim()
    var sptMsg = msg.split(' ')
    if(sptMsg[0] != '그뤠프') return
    var today  = new Date()
    var year   = today.getFullYear() 
    var month  = today.getMonth()
    var date   = today.getDate()
    var hour   = today.getHours()
    var minute = today.getMinutes()
    var day    = today.getDay() //0:일 1:월 2:화 3:수 4:목
    if(date<10) date = '0'.concat(date)
    if(month+1<10) month = '0'.concat(month+1)

    var limit = 300; //처음 채팅 정의
    var MAX = 0; //가장 많이 채팅한 숫자를 저장함
    var chat = new Array(); //그 날에 채팅한 양을 저장함
    var dateC = new Array(); //날짜들을 저장함
    var currentDate = String(year) + String(month) + String(date)

    for(var i=5;i>=0;i--) { //5일전부터 오늘까지 (총6일) 차례대로 채팅을 불러온다
        dateC[i] = currentDate.substr(6,2)
        chat[i] = getChatNum(room, currentDate, sender)
        if(chat[i]==NaN) chat[i] = 0 //파일이 없다면 0
        if(Number(chat[i])>Number(MAX)) MAX = chat[i] //최대량을 저장한다
        currentDate = getYesterday(currentDate)
    }
    while(MAX%300) { //300으로 나누어떨어질때까지 더한다
        limit = ++MAX
    }
    for(var i=5;i>=0;i--) { //세로축에 맞게 변형한다
        chat[i] = (chat[i] / (limit/30)).toFixed(0)
    }
    var dateStr = new Array('　','　','　','|');
    for(var i=0;i<6;i++) {
        dateStr.push('　');
        for(var j=0;j<2;j++) {
            var num = changeNum(dateC[i][j])
            dateStr.push(num);
        }
    }
    dateStr.push('\n');
    ////////////////////////////
    var graph = new Array()
    for(var i=0;i<33;i++) {
        graph[i] = new Array()
    }
    var limitLastNum = limit/100

    graph[1]  = [changeNum(limitLastNum),'０','０']
    graph[11] = [changeNum(limitLastNum*(2/3)),'０','０']
    graph[21] = [changeNum(limitLastNum*(1/3)),'０','０']
    for(var i=0;i<33;i++) {
        for(var j=0;j<23;j++) {
            if(j==3) {  // 세로축
                graph[i][j] = '|'
            }
            if(i==31) { // 가로축
                graph[i][j] = '一'
            }
            if(j==22 && i!=32) { // 줄바꿈
                graph[i][j] = '\n'
            }
            if(i==32) { //날짜부분 따로 처리한거 불러옴
                graph[i][j] = dateStr[j];
            }
            if(j>3 && i<31 && j!=22) {
                if(i==1||i==11||i==21)
                    graph[i][j] = '⋯'
            }
            if((j-4)%3 != 0 && j>4 && i<31) { //공백을 넣을곳이 아니라면
                var position = Math.floor((j-4)/3)
                if(30-chat[position]<i)
                    graph[i][j] = '■'
            }
            if(graph[i][j]==null) { //정의되지 않았다면 공백
                graph[i][j] = '　'
            }
        }
    }
    var result = "최근 6일간 "+sender+"님의 채팅량 현황입니다\n"
                +"※아래 전체보기를 눌러주세요"+detail+'\n'
    for(var i=0;i<33;i++) {
        for(var j=0;j<23;j++) {
            result = result.concat(graph[i][j])
        }
    }
    replier.reply(result)
}
//(j-3)/3%1 //몇번째
//(j-3)%3!=0//예외처리